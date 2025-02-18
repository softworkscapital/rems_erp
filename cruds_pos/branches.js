require('dotenv').config();
const pool = require('./poolfile');

let crudsObj = {};

// Create a new branch
crudsObj.postBranch = (branch_name, branch_location, branch_location_notes, branch_city, latitude, longitude, company_id, company_name, enrolled_on, enrolled_by, phone, email, sync_interval, branch_reorder_level_kgs, auto_branch_reorder_status, inventory_level, inventory_storage_capacity, rems_subscription_id, transactions_volume_limit_kgs, expiry_date) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'INSERT INTO branches(branch_name, branch_location, branch_location_notes, branch_city, latitude, longitude, company_id, company_name, enrolled_on, enrolled_by, phone, email, sync_interval, branch_reorder_level_kgs, auto_branch_reorder_status, inventory_level, inventory_storage_capacity, rems_subscription_id, transactions_volume_limit_kgs, expiry_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [branch_name, branch_location, branch_location_notes, branch_city, latitude, longitude, company_id, company_name, enrolled_on, enrolled_by, phone, email, sync_interval, branch_reorder_level_kgs, auto_branch_reorder_status, inventory_level, inventory_storage_capacity, rems_subscription_id, transactions_volume_limit_kgs, expiry_date],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                // Return the new branch ID and a success message
                return resolve({ status: '200', message: 'Saving successful', branch_id: result.insertId });
            }
        );
    });
};

// Get all branches
crudsObj.getBranches = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM branches', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

// Get a branch by ID
crudsObj.getBranchById = (branch_id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM branches WHERE branch_id = ?', [branch_id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

// Get branch name by branch ID
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

// Get branch names by company ID
crudsObj.getBranchNamesById = (company_id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT branch_name, branch_id FROM branches WHERE company_id = ?', [company_id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

// Get branch ID by branch name
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

// Update a branch
crudsObj.updateBranch = (id, branch_name, branch_location, branch_location_notes, branch_city, latitude, longitude, company_id, company_name, enrolled_on, enrolled_by, phone, email, sync_interval, branch_reorder_level_kgs, auto_branch_reorder_status, inventory_level, inventory_storage_capacity, rems_subscription_id, transactions_volume_limit_kgs, expiry_date) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'UPDATE branches SET branch_name = ?, branch_location = ?, branch_location_notes = ?, branch_city = ?, latitude = ?, longitude = ?, company_id = ?, company_name = ?, enrolled_on = ?, enrolled_by = ?, phone = ?, email = ?, sync_interval = ?, branch_reorder_level_kgs = ?, auto_branch_reorder_status = ?, inventory_level = ?, inventory_storage_capacity = ?, rems_subscription_id = ?, transactions_volume_limit_kgs = ?, expiry_date = ? WHERE branch_id = ?',
            [branch_name, branch_location, branch_location_notes, branch_city, latitude, longitude, company_id, company_name, enrolled_on, enrolled_by, phone, email, sync_interval, branch_reorder_level_kgs, auto_branch_reorder_status, inventory_level, inventory_storage_capacity, rems_subscription_id, transactions_volume_limit_kgs, expiry_date, id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve({ status: '200', message: 'Update successful' });
            }
        );
    });
};

// Delete a branch
crudsObj.deleteBranch = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM branches WHERE branch_id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = crudsObj;