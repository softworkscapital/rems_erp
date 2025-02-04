require('dotenv').config();
const pool = require('./poolfile');

let crudsObj = {};

crudsObj.postBranch = (branch_name,branch_location, branch_location_notes, branch_city, latitude, longitude, company_id, company_name, enrolled_on, enrolled_by, phone, email, sync_interval, branch_reorder_level_kgs, auto_branch_reorder_status, inventory_level, inventory_storage_capacity, rems_subscription_id, transactions_volume_limit_kgs, expiry_date)=>{
    return new Promise((resolve, reject)=>{
        pool.query('INSERT INTO branches(branch_name,branch_location, branch_location_notes, branch_city, latitude, longitude, company_id, company_name, enrolled_on, enrolled_by, phone, email, sync_interval, branch_reorder_level_kgs, auto_branch_reorder_status, inventory_level, inventory_storage_capacity, rems_subscription_id, transactions_volume_limit_kgs, expiry_date) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[branch_name,branch_location, branch_location_notes, branch_city, latitude, longitude, company_id, company_name, enrolled_on, enrolled_by, phone, email, sync_interval, branch_reorder_level_kgs, auto_branch_reorder_status, inventory_level, inventory_storage_capacity, rems_subscription_id, transactions_volume_limit_kgs, expiry_date], (err, result)=>{
            if(err){
                return reject(err);
            }
            return resolve({statu:'200', message: 'saving successful'});
        })
    })
};

crudsObj.getBranches = ()=>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM branches', (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
};

crudsObj.getBranchById = (branch_id) => {
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM branches WHERE branch_id = ?',[branch_id], (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
  };


  crudsObj.getBranchNameByBranchId = (branchID) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT branch_name FROM branches WHERE branch_id = ?', [branchID], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};



  crudsObj.getBranchNamesById = (company_id) => {
    return new Promise((resolve, reject)=>{
        pool.query('SELECT branch_name ,branch_id FROM branches WHERE company_id = ?',[company_id], (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
  };



  crudsObj.getBranchIdByBranchName = (branchName) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT branch_id FROM branches WHERE branch_name = ?', [branchName], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};





  crudsObj.updateBranch = (id, branch_name,branch_location, branch_location_notes, branch_city, latitude, longitude, company_id, company_name, enrolled_on, enrolled_by, phone, email, sync_interval, branch_reorder_level_kgs, auto_branch_reorder_status, inventory_level, inventory_storage_capacity, rems_subscription_id, transactions_volume_limit_kgs, expiry_date) => {
    return new Promise((resolve, reject) => {
      pool.query(
        'UPDATE branches SET branch_name = ? ,branch_location = ? , branch_location_notes = ? , branch_city = ? , latitude = ? , longitude = ? , company_id = ? , company_name = ? , enrolled_on = ? , enrolled_by = ? , phone = ? , email = ? , sync_interval = ? , branch_reorder_level_kgs = ? , auto_branch_reorder_status = ? , inventory_level = ? , inventory_storage_capacity = ? , rems_subscription_id = ? , transactions_volume_limit_kgs = ? , expiry_date = ? WHERE branch_id = ?',
        [branch_name,branch_location, branch_location_notes, branch_city, latitude, longitude, company_id, company_name, enrolled_on, enrolled_by, phone, email, sync_interval, branch_reorder_level_kgs, auto_branch_reorder_status, inventory_level, inventory_storage_capacity, rems_subscription_id, transactions_volume_limit_kgs, expiry_date, id],
        (err, result) => {
          if (err) {
            return reject(err);
          }
          return resolve({ status: '200', message: 'update successful' });
        }
      );
    });
  };

  crudsObj.deleteBranch = (id) => {
    return new Promise((resolve, reject)=>{
        pool.query('DELETE FROM users WHERE branch_id = ?',[id], (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
  };

module.exports = crudsObj;