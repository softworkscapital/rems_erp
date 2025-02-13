require('dotenv').config();
const pool = require('./poolfile');

let syncCrud = {};

// Method to get sale_list_item
syncCrud.getSaleListItem = (lastId, companyId, branchId) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'SELECT * FROM sale_list_item WHERE list_item_id > ? AND company_id = ? AND branch_id = ?',
            [lastId, companyId, branchId],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            }
        );
    });
};

// Method to get products_definition
syncCrud.getProductsDefinition = (lastId, companyId, branchId) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'SELECT * FROM products_definition WHERE product_id > ? AND company_id = ? AND branch_id = ?',
            [lastId, companyId, branchId],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            }
        );
    });
};

// Method to get payments
syncCrud.getPayments = (lastId, companyId, branchId) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'SELECT * FROM payments WHERE payid > ? AND company_id = ? AND branch_id = ?',
            [lastId, companyId, branchId],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            }
        );
    });
};

// Method to get inventory_mgt
syncCrud.getInventoryManagement = (lastId, companyId, branchId) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'SELECT * FROM inventory_mgt WHERE inventory_mgt_id > ? AND company_id = ? AND branch_id = ?',
            [lastId, companyId, branchId],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            }
        );
    });
};

// Method to get currency
syncCrud.getCurrency = (lastId, companyId, branchId) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'SELECT * FROM currency WHERE currency_id > ? AND company_id = ? AND branch_id = ?',
            [lastId, companyId, branchId],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            }
        );
    });
};

// Method to get shift_balances
syncCrud.getShiftBalances = (lastId, companyId, branchId) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'SELECT * FROM shift_balances WHERE shift_balances_id > ? AND company_id = ? AND branch_id = ?',
            [lastId, companyId, branchId],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            }
        );
    });
};

// Method to get company_setup
syncCrud.getCompanySetup = (lastId, companyId, branchId) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'SELECT * FROM company_setup WHERE company_setup_id > ? AND company_id = ?',
            [lastId, companyId, branchId],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            }
        );
    });
};

// Method to get branches
syncCrud.getBranches = (lastId, companyId, branchId) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'SELECT * FROM branches WHERE branch_id > ? AND company_id = ? AND branch_id = ?',
            [lastId, companyId, branchId],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            }
        );
    });
};


syncCrud.getUsers = (lastId, companyId, branchId) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'SELECT * FROM users WHERE branch_id > ? AND company_id = ? AND branch_id = ?',
            [lastId, companyId, branchId],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            }
        );
    });
};
module.exports = syncCrud;