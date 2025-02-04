"use strict";

var express = require('express');

var branchRouter = express.Router();

var branchDbOperations = require('../cruds_pos/branches');

branchRouter.post('/', function _callee(req, res, next) {
  var postedValues, branch_name, branch_location, branch_location_notes, branch_city, latitude, longitude, company_id, company_name, enrolled_on, enrolled_by, phone, email, sync_interval, branch_reorder_level_kgs, auto_branch_reorder_status, inventory_level, inventory_storage_capacity, rems_subscription_id, transactions_volume_limit_kgs, expiry_date, results;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          postedValues = req.body;
          branch_name = postedValues.branch_name;
          branch_location = postedValues.branch_location;
          branch_location_notes = postedValues.branch_location_notes;
          branch_city = postedValues.branch_city;
          latitude = postedValues.latitude;
          longitude = postedValues.longitude;
          company_id = postedValues.company_id;
          company_name = postedValues.company_name;
          enrolled_on = postedValues.enrolled_on;
          enrolled_by = postedValues.enrolled_by;
          phone = postedValues.phone;
          email = postedValues.email;
          sync_interval = postedValues.sync_interval;
          branch_reorder_level_kgs = postedValues.branch_reorder_level_kgs;
          auto_branch_reorder_status = postedValues.auto_branch_reorder_status;
          inventory_level = postedValues.inventory_level;
          inventory_storage_capacity = postedValues.inventory_storage_capacity;
          rems_subscription_id = postedValues.rems_subscription_id;
          transactions_volume_limit_kgs = postedValues.transactions_volume_limit_kgs;
          expiry_date = postedValues.expiry_date;
          _context.next = 24;
          return regeneratorRuntime.awrap(branchDbOperations.postBranch(branch_name, branch_location, branch_location_notes, branch_city, latitude, longitude, company_id, company_name, enrolled_on, enrolled_by, phone, email, sync_interval, branch_reorder_level_kgs, auto_branch_reorder_status, inventory_level, inventory_storage_capacity, rems_subscription_id, transactions_volume_limit_kgs, expiry_date));

        case 24:
          results = _context.sent;
          res.json(results);
          _context.next = 32;
          break;

        case 28:
          _context.prev = 28;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.sendStatus(500);

        case 32:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 28]]);
});
branchRouter.get('/', function _callee2(req, res, next) {
  var results;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(branchDbOperations.getBranches());

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
branchRouter.get('/:id', function _callee3(req, res, next) {
  var branch_id, result;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          branch_id = req.params.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(branchDbOperations.getBranchById(branch_id));

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
branchRouter.get('/branch_name/:branch_id', function _callee4(req, res, next) {
  var branch_id, result;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          branch_id = req.params.branch_id;
          _context4.next = 4;
          return regeneratorRuntime.awrap(branchDbOperations.getBranchNameByBranchId(branch_id));

        case 4:
          result = _context4.sent;

          if (!(result.length === 0)) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            message: 'Branch not found'
          }));

        case 7:
          // Assuming result[0] contains the branch_name
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
});
branchRouter.get('/branch_name/company/:id', function _callee5(req, res, next) {
  var company_id, result;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          company_id = req.params.id;
          _context5.next = 4;
          return regeneratorRuntime.awrap(branchDbOperations.getBranchNamesById(company_id));

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
branchRouter.get('/branch_id/:branch_name', function _callee6(req, res, next) {
  var branch_name, result;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          branch_name = req.params.branch_name;
          _context6.next = 4;
          return regeneratorRuntime.awrap(branchDbOperations.getBranchIdByBranchName(branch_name));

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
branchRouter.put('/:id', function _callee7(req, res, next) {
  var branch_id, updatedValues, branch_name, branch_location, branch_location_notes, branch_city, latitude, longitude, company_id, company_name, enrolled_on, enrolled_by, phone, email, sync_interval, branch_reorder_level_kgs, auto_branch_reorder_status, inventory_level, inventory_storage_capacity, rems_subscription_id, transactions_volume_limit_kgs, expiry_date, result;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          branch_id = req.params.id;
          updatedValues = req.body;
          branch_name = updatedValues.branch_name;
          branch_location = updatedValues.branch_location;
          branch_location_notes = updatedValues.branch_location_notes;
          branch_city = updatedValues.branch_city;
          latitude = updatedValues.latitude;
          longitude = updatedValues.longitude;
          company_id = updatedValues.company_id;
          company_name = updatedValues.company_name;
          enrolled_on = updatedValues.enrolled_on;
          enrolled_by = updatedValues.enrolled_by;
          phone = updatedValues.phone;
          email = updatedValues.email;
          sync_interval = updatedValues.sync_interval;
          branch_reorder_level_kgs = updatedValues.branch_reorder_level_kgs;
          auto_branch_reorder_status = updatedValues.auto_branch_reorder_status;
          inventory_level = updatedValues.inventory_level;
          inventory_storage_capacity = updatedValues.inventory_storage_capacity;
          rems_subscription_id = updatedValues.rems_subscription_id;
          transactions_volume_limit_kgs = updatedValues.transactions_volume_limit_kgs;
          expiry_date = updatedValues.expiry_date;
          _context7.next = 25;
          return regeneratorRuntime.awrap(branchDbOperations.updateBranch(branch_id, branch_name, branch_location, branch_location_notes, branch_city, latitude, longitude, company_id, company_name, enrolled_on, enrolled_by, phone, email, sync_interval, branch_reorder_level_kgs, auto_branch_reorder_status, inventory_level, inventory_storage_capacity, rems_subscription_id, transactions_volume_limit_kgs, expiry_date));

        case 25:
          result = _context7.sent;
          res.json(result);
          _context7.next = 33;
          break;

        case 29:
          _context7.prev = 29;
          _context7.t0 = _context7["catch"](0);
          console.log(_context7.t0);
          res.sendStatus(500);

        case 33:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 29]]);
});
branchRouter["delete"]('/:id', function _callee8(req, res, next) {
  var id, result;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          id = req.params.id;
          _context8.next = 4;
          return regeneratorRuntime.awrap(branchDbOperations.deleteBranch(id));

        case 4:
          result = _context8.sent;
          res.json(result);
          _context8.next = 12;
          break;

        case 8:
          _context8.prev = 8;
          _context8.t0 = _context8["catch"](0);
          console.log(_context8.t0);
          res.sendStatus(500);

        case 12:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
module.exports = branchRouter;