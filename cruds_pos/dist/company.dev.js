"use strict";

require('dotenv').config();

var pool = require('./poolfile');

var crudsObj = {}; // In your database operations file

crudsObj.postCompany = function (company_id, company_name) {
  return new Promise(function (resolve, reject) {
    pool.query("INSERT INTO company (\n    company_name\n            ) VALUES (?)", [company_name], function (err, result) {
      if (err) {
        return reject(err);
      }

      return resolve({
        status: '200',
        message: 'saving successful'
      });
    });
  });
};

crudsObj.getCompanys = function () {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM company', function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

crudsObj.getCompanyById = function (company_id) {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM company WHERE company_id = ?', [company_id], function (err, results) {
      if (err) {
        return reject(err); // Handle any errors
      }

      return resolve(results); // Return the results
    });
  });
};

crudsObj.updateCompany = function (company_id, updatedValues) {
  var company_name = updatedValues.company_name;
  return new Promise(function (resolve, reject) {
    pool.query("UPDATE company SET \n                 company_name =?\n            WHERE company_id = ?", // No comma here
    [company_name, company_id // Pass the ID as the last parameter
    ], function (err, result) {
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

crudsObj.deleteCompany = function (id) {
  return new Promise(function (resolve, reject) {
    pool.query('DELETE FROM company WHERE company_id = ?', [id], function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

module.exports = crudsObj;