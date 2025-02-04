"use strict";

require('dotenv').config();

var pool = require('./poolfile');

var crudsObj = {};

crudsObj.postCompanySetup = function (name, address, registration_number, industry, company_size, trading_name, phone_number1, phone_number2, email1, email2, mode_transaction_size, number_of_transactions_per_day, website, bank_account_id1, bank_account_id2, bp_number, vat_number, base_currency, vat_tax_rate, discount_rate, interest_rate, physical_address, portrait_logo, horizontal_logo, sub_logo, footer, salutations, letterhead) {
  // Set interest_rate to null if it's undefined
  interest_rate = interest_rate !== undefined ? interest_rate : null;
  return new Promise(function (resolve, reject) {
    // Step 1: Insert the new company setup record
    pool.query("INSERT INTO company_setup \n            (name, address, registration_number, industry, company_size, trading_name, \n            phone_number1, phone_number2, email1, email2, mode_transaction_size, \n            number_of_transactions_per_day, website, bank_account_id1, bank_account_id2, \n            bp_number, vat_number, base_currency, vat_tax_rate, discount_rate, \n            interest_rate, physical_address, portrait_logo, horizontal_logo, sub_logo, \n            footer, salutations, letterhead) \n            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [name, address, registration_number, industry, company_size, trading_name, phone_number1, phone_number2, email1, email2, mode_transaction_size, number_of_transactions_per_day, website, bank_account_id1, bank_account_id2, bp_number, vat_number, base_currency, vat_tax_rate, discount_rate, interest_rate, physical_address, portrait_logo, horizontal_logo, sub_logo, footer, salutations, letterhead], function (err, result) {
      if (err) {
        console.error("Insert error:", err);
        return reject(err);
      } // Step 2: Capture the last inserted ID


      var companySetupId = result.insertId; // Step 3: Update the company_id to match the company_setup_id

      pool.query("UPDATE company_setup \n                    SET company_id = ? \n                    WHERE company_setup_id = ?", [companySetupId, companySetupId], function (updateErr, updateResult) {
        if (updateErr) {
          console.error("Update error:", updateErr);
          return reject(updateErr);
        }

        return resolve({
          status: '200',
          message: 'Company setup created successfully',
          company_id: companySetupId // Return the updated company_id

        });
      });
    });
  });
};

crudsObj.getCompanySetups = function () {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM company_setup', function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

crudsObj.getCompanySetupById = function (id) {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM company_setup WHERE company_setup_id = ?', [id], function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

crudsObj.getCompanyNameByCompanyId = function (companyID) {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT name FROM company_setup WHERE company_id = ?', [companyID], function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

crudsObj.updateCompanySetup = function (company_setup_id, company_id, name, address, registration_number, industry, company_size, trading_name, phone_number1, phone_number2, email1, email2, mode_transaction_size, number_of_transactions_per_day, website, bank_account_id1, bank_account_id2, bp_number, vat_number, physical_address, portrait_logo, horizontal_logo, footer, salutations, letterhead) {
  return new Promise(function (resolve, reject) {
    pool.query('UPDATE company_setup SET company_id = ?, name = ?, address = ?, registration_number = ?, industry = ?, company_size = ?, trading_name = ?, phone_number1 = ?, phone_number2 = ?, email1 = ?, email2 = ?, mode_transaction_size = ?, number_of_transactions_per_day = ?, website = ?, bank_account_id1 = ?, bank_account_id2 = ?, bp_number = ?, vat_number = ?, physical_address = ?, portrait_logo = ?, horizontal_logo = ?, footer = ?, salutations = ?, letterhead = ? WHERE company_setup_id = ?', [company_id, name, address, registration_number, industry, company_size, trading_name, phone_number1, phone_number2, email1, email2, mode_transaction_size, number_of_transactions_per_day, website, bank_account_id1, bank_account_id2, bp_number, vat_number, physical_address, portrait_logo, horizontal_logo, footer, salutations, letterhead, company_setup_id], function (err, result) {
      if (err) {
        return reject(err);
      }

      return resolve({
        status: '200',
        message: 'Company setup updated successfully'
      });
    });
  });
};

crudsObj.deleteCompanySetup = function (id) {
  return new Promise(function (resolve, reject) {
    pool.query('DELETE FROM company_setup WHERE company_setup_id = ?', [id], function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve({
        status: '200',
        message: 'Company setup deleted successfully'
      });
    });
  });
};

module.exports = crudsObj;