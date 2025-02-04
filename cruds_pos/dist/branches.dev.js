"use strict";

require('dotenv').config();

var pool = require('./poolfile');

var crudsObj = {};

crudsObj.postBranch = function (branch_name, branch_location, branch_location_notes, branch_city, latitude, longitude, company_id, company_name, enrolled_on, enrolled_by, phone, email, sync_interval, branch_reorder_level_kgs, auto_branch_reorder_status, inventory_level, inventory_storage_capacity, rems_subscription_id, transactions_volume_limit_kgs, expiry_date) {
  return new Promise(function (resolve, reject) {
    pool.query('INSERT INTO branches(branch_name,branch_location, branch_location_notes, branch_city, latitude, longitude, company_id, company_name, enrolled_on, enrolled_by, phone, email, sync_interval, branch_reorder_level_kgs, auto_branch_reorder_status, inventory_level, inventory_storage_capacity, rems_subscription_id, transactions_volume_limit_kgs, expiry_date) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [branch_name, branch_location, branch_location_notes, branch_city, latitude, longitude, company_id, company_name, enrolled_on, enrolled_by, phone, email, sync_interval, branch_reorder_level_kgs, auto_branch_reorder_status, inventory_level, inventory_storage_capacity, rems_subscription_id, transactions_volume_limit_kgs, expiry_date], function (err, result) {
      if (err) {
        return reject(err);
      }

      return resolve({
        statu: '200',
        message: 'saving successful'
      });
    });
  });
};

crudsObj.getBranches = function () {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM branches', function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

crudsObj.getBranchById = function (branch_id) {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM branches WHERE branch_id = ?', [branch_id], function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

crudsObj.getBranchNameByBranchId = function (branchID) {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT branch_name FROM branches WHERE branch_id = ?', [branchID], function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

crudsObj.getBranchNamesById = function (company_id) {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT branch_name ,branch_id FROM branches WHERE company_id = ?', [company_id], function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

crudsObj.getBranchIdByBranchName = function (branchName) {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT branch_id FROM branches WHERE branch_name = ?', [branchName], function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

crudsObj.updateBranch = function (id, branch_name, branch_location, branch_location_notes, branch_city, latitude, longitude, company_id, company_name, enrolled_on, enrolled_by, phone, email, sync_interval, branch_reorder_level_kgs, auto_branch_reorder_status, inventory_level, inventory_storage_capacity, rems_subscription_id, transactions_volume_limit_kgs, expiry_date) {
  return new Promise(function (resolve, reject) {
    pool.query('UPDATE branches SET branch_name = ? ,branch_location = ? , branch_location_notes = ? , branch_city = ? , latitude = ? , longitude = ? , company_id = ? , company_name = ? , enrolled_on = ? , enrolled_by = ? , phone = ? , email = ? , sync_interval = ? , branch_reorder_level_kgs = ? , auto_branch_reorder_status = ? , inventory_level = ? , inventory_storage_capacity = ? , rems_subscription_id = ? , transactions_volume_limit_kgs = ? , expiry_date = ? WHERE branch_id = ?', [branch_name, branch_location, branch_location_notes, branch_city, latitude, longitude, company_id, company_name, enrolled_on, enrolled_by, phone, email, sync_interval, branch_reorder_level_kgs, auto_branch_reorder_status, inventory_level, inventory_storage_capacity, rems_subscription_id, transactions_volume_limit_kgs, expiry_date, id], function (err, result) {
      if (err) {
        return reject(err);
      }

      return resolve({
        status: '200',
        message: 'update successful'
      });
    });
  });
};

crudsObj.deleteBranch = function (id) {
  return new Promise(function (resolve, reject) {
    pool.query('DELETE FROM users WHERE branch_id = ?', [id], function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

module.exports = crudsObj;