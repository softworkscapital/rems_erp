require('dotenv').config();
const pool = require('./poolfile');

let crudsObj = {};

crudsObj.postInvetoryMgt = (company_id,branch_id, sale_records_id, product_id, date_time, qty_purchased, qty_sold, qty_balance, product_value_cost, product_value_selling_price, unit_cost, selling_price, syncid)=>{
    return new Promise((resolve, reject)=>{
        pool.query('INSERT INTO inventory_mgt(company_id,branch_id, sale_records_id, product_id, date_time, qty_purchased, qty_sold, qty_balance, product_value_cost, product_value_selling_price, unit_cost, selling_price, syncid) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)',[company_id,branch_id, sale_records_id, product_id, date_time, qty_purchased, qty_sold, qty_balance, product_value_cost, product_value_selling_price, unit_cost, selling_price, syncid], (err, result)=>{
            if(err){
                return reject(err);
            }
            return resolve({status:'200', message: 'saving successful'});
        })
    })
};


crudsObj.postInvetoryMgtDispatch = (company_id, branch_id, sale_records_id, product_id, quantity) => {
    return new Promise((resolve, reject) => {
        // First query: Select the last inventory record for the specified product
        pool.query('SELECT * FROM inventory_mgt WHERE product_id = ? ORDER BY inventory_mgt_id DESC LIMIT 1', [product_id], (err, results) => {
            if (err) {
                return reject(err);
            }

            // Check if results were found
            if (results.length === 0) {
                return reject(new Error("No inventory records found for the specified product."));
            }

            // Extract data from the first query result
            const lastInventoryRecord = results[0];
            const qty_balance = lastInventoryRecord.qty_balance-quantity; // Example field to use in the second query
            const product_value_cost = lastInventoryRecord.product_value_cost; // Example
            const product_value_selling_price = lastInventoryRecord.product_value_selling_price; // Example
            const unit_cost = lastInventoryRecord.unit_cost; // Example
            const selling_price = lastInventoryRecord.selling_price; // Example

            // Construct your date_time and syncid as needed
            const date_time = new Date().toISOString(); // Example date
            const syncid = '00000'; // Replace with your actual sync ID logic

            // Second query: Insert new inventory record
            pool.query('INSERT INTO inventory_mgt(company_id, branch_id, sale_records_id, product_id, date_time, qty_purchased, qty_sold, qty_balance, product_value_cost, product_value_selling_price, unit_cost, selling_price, syncid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
            [company_id, branch_id, sale_records_id, product_id, date_time, quantity, 0, qty_balance, product_value_cost, product_value_selling_price, unit_cost, selling_price, syncid], 
            (err, result) => {
                if (err) {
                    return reject(err);
                }

                // Resolve promise with success message
                return resolve({ status: '200', message: 'Saving successful' });
            });
        });
    });
};




crudsObj.getInvetoryMgt = ()=>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM inventory_mgt', (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
};

crudsObj.getInvetoryMgtById = (id) => {
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM inventory_mgt WHERE inventory_mgt_id  = ?',[id ], (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
  };

crudsObj.getInvetoryMgtByProductId = () => {
    return new Promise((resolve, reject)=>{
        pool.query('SELECT inventory_mgt.*, products_definition.product_name FROM inventory_mgt INNER JOIN products_definition ON inventory_mgt.product_id = products_definition.product_id', (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
  };

  crudsObj.updateInvetoryMgt = (id, company_id,branch_id, sale_records_id, product_id, date_time, qty_purchased, qty_sold, qty_balance, product_value_cost, product_value_selling_price, unit_cost, selling_price, syncid) => {
    console.log(unit_cost);
    return new Promise((resolve, reject) => {
      pool.query(
        'UPDATE inventory_mgt SET company_id = ? ,branch_id = ? , sale_records_id = ? , product_id = ? , date_time = ? , qty_purchased = ? , qty_sold = ? , qty_balance = ? , product_value_cost = ? , product_value_selling_price = ? , unit_cost = ? , selling_price = ? , syncid = ? WHERE inventory_mgt_id = ?',
        [company_id,branch_id, sale_records_id, product_id, date_time, qty_purchased, qty_sold, qty_balance, product_value_cost, product_value_selling_price, unit_cost, selling_price, syncid, id],
        (err, result) => {
          if (err) {
            return reject(err);
          }
          return resolve({ status: '200', message: 'update successful' });
        }
      );
    });
  };

  crudsObj.deleteInvetoryMgt = (id) => {
    return new Promise((resolve, reject)=>{
        pool.query('DELETE FROM inventory_mgt WHERE inventory_mgt_id  = ?',[id], (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
  };

module.exports = crudsObj;