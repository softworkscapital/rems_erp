require('dotenv').config();
const pool = require('./poolfile');

let crudsObj = {};
crudsObj.postProductDefinition = ( 
    product_id,
    product_code,
    company_id,
    branch_id,
    product_brand,
    product_name,
    product_type,
    category,
    sub_category,
    sub_sub_category,
    unit_of_measure,
    unit_size,
    description_notes,
    sub_notes,
    sold_units_count,
    rating,
    rating_count,
    discount_rate,
    promo_time_left,
    color,
    popularity,
    shipping_days,
    condition,
    reviews_count,
    views_count,
    likes_count,
    uploaded_product_image_ref,
    uploaded_product_image_ref2,
    uploaded_product_image_ref3,
    uploaded_product_image_ref4,
    uploaded_product_image_ref5,
    uploaded_product_image_ref6,
    uploaded_product_image_ref7,
    syncid
) => {
    return new Promise((resolve, reject) => {
        pool.query(
            `INSERT INTO products_definition (
                product_code,
                company_id,
                branch_id,
                product_brand,
                product_name,
                product_type,
                category,
                sub_category,
                sub_sub_category,
                unit_of_measure,
                unit_size,
                description_notes,
                sub_notes,
                sold_units_count,
                rating,
                rating_count,
                discount_rate,
                promo_time_left,
                color,
                popularity,
                shipping_days,
                \`condition\`, 
                reviews_count,
                views_count,
                likes_count,
                uploaded_product_image_ref,
                uploaded_product_image_ref2,
                uploaded_product_image_ref3,
                uploaded_product_image_ref4,
                uploaded_product_image_ref5,
                uploaded_product_image_ref6,
                uploaded_product_image_ref7,
                syncid
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?)`,
            [
                product_code,
                company_id,
                branch_id,
                product_brand,
                product_name,
                product_type,
                category,
                sub_category,
                sub_sub_category,
                unit_of_measure,
                unit_size,
                description_notes,
                sub_notes,
                sold_units_count,
                rating,
                rating_count,
                discount_rate,
                promo_time_left,
                color,
                popularity,
                shipping_days,
                condition,
                reviews_count,
                views_count,
                likes_count,
                uploaded_product_image_ref,
                uploaded_product_image_ref2,
                uploaded_product_image_ref3,
                uploaded_product_image_ref4,
                uploaded_product_image_ref5,
                uploaded_product_image_ref6,
                uploaded_product_image_ref7,
                syncid
            ],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve({ status: '200', message: 'Saving successful' });
            }
        );
    });
};

crudsObj.getProductDefinitions = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM products_definition', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

crudsObj.getFullProductDefinitions = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT products_definition.*, inventory_mgt.selling_price, inventory_mgt.unit_cost, inventory_mgt.qty_balance FROM products_definition INNER JOIN inventory_mgt ON products_definition.product_id = inventory_mgt.product_id', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};
crudsObj.getFullProductDefinitionsByProductIdOrProductCode = (company_id, branch_id, product_id, product_code) => {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT 
                products_definition.*, 
                inventory_mgt.selling_price, 
                inventory_mgt.unit_cost, 
                inventory_mgt.qty_balance 
            FROM 
                products_definition 
            INNER JOIN 
                inventory_mgt 
            ON 
                products_definition.product_id = inventory_mgt.product_id 
            WHERE 
                products_definition.company_id = ? 
                AND products_definition.branch_id = ? 
                AND (products_definition.product_id = ? OR products_definition.product_code = ?)
        `;

        pool.query(query, [company_id, branch_id, product_id, product_code], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

    crudsObj.getProductDefinitionsByCompanyByBranch = (company_id, branch_id) => {
        return new Promise((resolve, reject) => {
            const query = `
                SELECT 
                    products_definition.*, 
                    inventory_mgt.selling_price, 
                    inventory_mgt.unit_cost, 
                    inventory_mgt.qty_balance 
                FROM 
                    products_definition 
                INNER JOIN 
                    inventory_mgt 
                ON 
                    products_definition.product_id = inventory_mgt.product_id 
                WHERE 
                    products_definition.company_id = ? 
                    AND products_definition.branch_id = ? 
            `;
    
            pool.query(query, [company_id, branch_id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    };
    



crudsObj.getAllCompaniesFullProductDefinitionsByCategory = (category) => {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT 
                products_definition.*, 
                inventory_mgt.selling_price, 
                inventory_mgt.unit_cost, 
                inventory_mgt.qty_balance,
                branches.branch_name,
                company_setup.name,
                company_setup.portrait_logo,
                company_setup.horizontal_logo
            FROM 
                products_definition 
            INNER JOIN 
                inventory_mgt 
            ON 
                products_definition.product_id = inventory_mgt.product_id
            INNER JOIN 
                branches
                ON
                products_definition.branch_id = branches.branch_id
                  INNER JOIN 
                company_setup
                ON
                products_definition.company_id = company_setup.company_id
            WHERE 
                products_definition.category = ?  
        `; // Removed the extra parenthesis

        pool.query(query, [category], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};





// getProductDefinitionById
crudsObj.getProductDefinitionById = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM products_definition WHERE product_id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

crudsObj.updateProductDefinition = (product_id, company_id, branch_id, product_name, unit_of_measure, unit_size, syncid) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'UPDATE products_definition SET company_id = ?, branch_id = ?, product_name = ?, unit_of_measure = ?, unit_size = ?, syncid = ? WHERE product_id = ?',
            [company_id, branch_id, product_name, unit_of_measure, unit_size, syncid, product_id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve({ status: '200', message: 'update successful' });
            }
        );
    });
};

crudsObj.deleteProductDefinition = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM products_definition WHERE product_id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = crudsObj;