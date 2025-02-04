"use strict";

var express = require('express');

var CompanyRouter = express.Router();

var CompanysDbOperations = require('../cruds_pos/company'); // In your route file (e.g., survey_answers.js)


CompanyRouter.post('/', function _callee(req, res, next) {
  var postedValues, company_id, company_name, results;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          postedValues = req.body;
          company_id = postedValues.company_id, company_name = postedValues.company_name;
          console.log(CompanysDbOperations); // Debugging line

          _context.next = 6;
          return regeneratorRuntime.awrap(CompanysDbOperations.postCompany(company_id, company_name));

        case 6:
          results = _context.sent;
          res.json(results);
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.sendStatus(500);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
CompanyRouter.get('/', function _callee2(req, res, next) {
  var results;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(CompanysDbOperations.getCompanys());

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
});
CompanyRouter.get('/:id', function _callee3(req, res, next) {
  var company_id, result;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          company_id = req.params.id; // Get the ID from the request parameters

          _context3.next = 4;
          return regeneratorRuntime.awrap(CompanysDbOperations.getCompanyById(company_id));

        case 4:
          result = _context3.sent;
          // Call the DB operation
          res.json(result); // Return the result as JSON

          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          res.sendStatus(500); // Send a 500 status code on error

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
CompanyRouter.put('/:id', function _callee4(req, res, next) {
  var company_id, updatedValues, results;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          company_id = req.params.id;
          updatedValues = req.body;
          _context4.next = 5;
          return regeneratorRuntime.awrap(CompanysDbOperations.updateCompany(company_id, updatedValues));

        case 5:
          results = _context4.sent;
          res.json(results);
          _context4.next = 13;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          res.sendStatus(500);

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
CompanyRouter["delete"]('/:id', function _callee5(req, res, next) {
  var id, result;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return regeneratorRuntime.awrap(CompanysDbOperations.deleteCompany(id));

        case 4:
          result = _context5.sent;
          res.json(result);
          _context5.next = 12;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          res.sendStatus(500);

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
module.exports = CompanyRouter;