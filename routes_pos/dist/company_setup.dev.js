"use strict";

var express = require('express');

var companySetupRouter = express.Router();

var companySetupDbOperations = require('../cruds_pos/company_setup'); // Create a new company setup


companySetupRouter.post('/', function _callee(req, res, next) {
  var postedValues, name, address, registration_number, industry, company_size, trading_name, phone_number1, phone_number2, email1, email2, mode_transaction_size, number_of_transactions_per_day, website, bank_account_id1, bank_account_id2, bp_number, vat_number, base_currency, vat_tax_rate, discount_rate, interest_rate, physical_address, portrait_logo, horizontal_logo, sub_logo, footer, salutations, letterhead, results;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // Extract values from request body
          postedValues = req.body;
          name = postedValues.name;
          address = postedValues.address;
          registration_number = postedValues.registration_number;
          industry = postedValues.industry;
          company_size = postedValues.company_size;
          trading_name = postedValues.trading_name;
          phone_number1 = postedValues.phone_number1;
          phone_number2 = postedValues.phone_number2;
          email1 = postedValues.email1;
          email2 = postedValues.email2;
          mode_transaction_size = postedValues.mode_transaction_size;
          number_of_transactions_per_day = postedValues.number_of_transactions_per_day;
          website = postedValues.website;
          bank_account_id1 = postedValues.bank_account_id1;
          bank_account_id2 = postedValues.bank_account_id2;
          bp_number = postedValues.bp_number;
          vat_number = postedValues.vat_number;
          base_currency = postedValues.base_currency;
          vat_tax_rate = postedValues.vat_tax_rate;
          discount_rate = postedValues.discount_rate;
          interest_rate = postedValues.interest_rate;
          physical_address = postedValues.physical_address;
          portrait_logo = postedValues.portrait_logo;
          horizontal_logo = postedValues.horizontal_logo;
          sub_logo = postedValues.sub_logo;
          footer = postedValues.footer;
          salutations = postedValues.salutations;
          letterhead = postedValues.letterhead; // Call the database operation to insert and update

          _context.next = 32;
          return regeneratorRuntime.awrap(companySetupDbOperations.postCompanySetup(name, address, registration_number, industry, company_size, trading_name, phone_number1, phone_number2, email1, email2, mode_transaction_size, number_of_transactions_per_day, website, bank_account_id1, bank_account_id2, bp_number, vat_number, base_currency, vat_tax_rate, discount_rate, interest_rate, physical_address, portrait_logo, horizontal_logo, sub_logo, footer, salutations, letterhead));

        case 32:
          results = _context.sent;
          // Send the response
          res.json(results);
          _context.next = 40;
          break;

        case 36:
          _context.prev = 36;
          _context.t0 = _context["catch"](0);
          console.error("Error in POST route:", _context.t0);
          res.sendStatus(500);

        case 40:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 36]]);
}); // Get all company setups

companySetupRouter.get('/', function _callee2(req, res, next) {
  var results;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(companySetupDbOperations.getCompanySetups());

        case 3:
          results = _context2.sent;
          res.json(results);
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.sendStatus(500);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // Get a company setup by ID

companySetupRouter.get('/:id', function _callee3(req, res, next) {
  var company_setup_id, result;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          company_setup_id = req.params.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(companySetupDbOperations.getCompanySetupById(company_setup_id));

        case 4:
          result = _context3.sent;
          res.json(result);
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          res.sendStatus(500);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
companySetupRouter.get('/company_name/:company_id', function _callee4(req, res, next) {
  var company_id, result;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          company_id = req.params.company_id;
          _context4.next = 4;
          return regeneratorRuntime.awrap(companySetupDbOperations.getCompanyNameByCompanyId(company_id));

        case 4:
          result = _context4.sent;

          if (!(result.length === 0)) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            message: 'Company not found'
          }));

        case 7:
          // Assuming result[0] contains the company name
          res.json(result[0]); // Return the first result

          _context4.next = 14;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0); // Use console.error for error logging

          res.sendStatus(500);

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 10]]);
}); // Update a company setup by ID

companySetupRouter.put('/:id', function _callee5(req, res, next) {
  var company_setup_id, updatedValues, company_id, name, address, registration_number, industry, company_size, trading_name, phone_number1, phone_number2, email1, email2, mode_transaction_size, number_of_transactions_per_day, website, bank_account_id1, bank_account_id2, bp_number, vat_number, base_currency, vat_tax_rate, discount_rate, interest_rate, physical_address, portrait_logo, horizontal_logo, sub_logo, footer, salutations, letterhead, result;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          company_setup_id = req.params.id;
          updatedValues = req.body;
          company_id = updatedValues.company_id;
          name = updatedValues.name;
          address = updatedValues.address;
          registration_number = updatedValues.registration_number;
          industry = updatedValues.industry;
          company_size = updatedValues.company_size;
          trading_name = updatedValues.trading_name;
          phone_number1 = updatedValues.phone_number1;
          phone_number2 = updatedValues.phone_number2;
          email1 = updatedValues.email1;
          email2 = updatedValues.email2;
          mode_transaction_size = updatedValues.mode_transaction_size;
          number_of_transactions_per_day = updatedValues.number_of_transactions_per_day;
          website = updatedValues.website;
          bank_account_id1 = updatedValues.bank_account_id1;
          bank_account_id2 = updatedValues.bank_account_id2;
          bp_number = updatedValues.bp_number;
          vat_number = updatedValues.vat_number;
          base_currency = updatedValues.base_currency;
          vat_tax_rate = updatedValues.vat_tax_rate;
          discount_rate = updatedValues.discount_rate;
          interest_rate = updatedValues.interest_rate;
          physical_address = updatedValues.physical_address;
          portrait_logo = updatedValues.portrait_logo;
          horizontal_logo = updatedValues.horizontal_logo;
          sub_logo = updatedValues.sub_logo;
          footer = updatedValues.footer;
          salutations = updatedValues.salutations;
          letterhead = updatedValues.letterhead;
          _context5.next = 34;
          return regeneratorRuntime.awrap(companySetupDbOperations.updateCompanySetup(company_setup_id, company_id, name, address, registration_number, industry, company_size, trading_name, phone_number1, phone_number2, email1, email2, mode_transaction_size, number_of_transactions_per_day, website, bank_account_id1, bank_account_id2, bp_number, vat_number, base_currency, vat_tax_rate, discount_rate, interest_rate, physical_address, portrait_logo, horizontal_logo, sub_logo, footer, salutations, letterhead));

        case 34:
          result = _context5.sent;
          res.json(result);
          _context5.next = 42;
          break;

        case 38:
          _context5.prev = 38;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          res.sendStatus(500);

        case 42:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 38]]);
}); // Delete a company setup by ID

companySetupRouter["delete"]('/:id', function _callee6(req, res, next) {
  var id, result;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          _context6.next = 4;
          return regeneratorRuntime.awrap(companySetupDbOperations.deleteCompanySetup(id));

        case 4:
          result = _context6.sent;
          res.json(result);
          _context6.next = 12;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);
          res.sendStatus(500);

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
module.exports = companySetupRouter;