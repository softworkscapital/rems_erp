"use strict";

var express = require('express');

var userRouter = express.Router();

var usersDbOperations = require('../cruds/users');

userRouter.post('/', function _callee(req, res, next) {
  var postedValues, company_id, branch_id, username, password, role, category, email, notify, activesession, addproperty, editproperty, approverequests, delivery, status, employee_id, client_profile_id, results;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          postedValues = req.body;
          company_id = postedValues.company_id;
          branch_id = postedValues.branch_id;
          username = postedValues.username;
          password = postedValues.passwordHash;
          role = postedValues.role;
          category = postedValues.category;
          email = postedValues.email;
          notify = postedValues.notify;
          activesession = postedValues.activesession;
          addproperty = postedValues.addproperty;
          editproperty = postedValues.editproperty;
          approverequests = postedValues.approverequests;
          delivery = postedValues.delivery;
          status = postedValues.status;
          employee_id = postedValues.employee_id;
          client_profile_id = postedValues.client_profile_id;
          console.log(email);
          _context.next = 21;
          return regeneratorRuntime.awrap(usersDbOperations.postUser(company_id, branch_id, username, password, role, category, email, notify, activesession, addproperty, editproperty, approverequests, delivery, status, employee_id, client_profile_id));

        case 21:
          results = _context.sent;
          res.json(results);
          _context.next = 29;
          break;

        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.sendStatus(500);

        case 29:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 25]]);
});
userRouter.post('/user/', function _callee2(req, res, next) {
  var postedValues, companyId, username, role, email, password, results;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          postedValues = req.body;
          companyId = postedValues.companyId;
          username = postedValues.username;
          role = postedValues.role;
          email = postedValues.email;
          password = postedValues.password;
          console.log(email);
          _context2.next = 10;
          return regeneratorRuntime.awrap(usersDbOperations.postUsernNew(companyId, username, role, email, password));

        case 10:
          results = _context2.sent;
          res.json(results);
          _context2.next = 18;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.sendStatus(500);

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 14]]);
});
userRouter.post('/client/', function _callee3(req, res, next) {
  var postedValues, company_id, branch_id, username, password, role, category, email, notify, activesession, addproperty, editproperty, approverequests, delivery, status, employee_id, company_email, client_profile_id, user_phone, otp, results;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          postedValues = req.body;
          company_id = postedValues.company_id;
          branch_id = postedValues.branch_id;
          username = postedValues.username;
          password = postedValues.password;
          role = postedValues.role;
          category = postedValues.category;
          email = postedValues.user_email;
          notify = postedValues.notify;
          activesession = postedValues.activesession;
          addproperty = postedValues.addproperty;
          editproperty = postedValues.editproperty;
          approverequests = postedValues.approverequests;
          delivery = postedValues.delivery;
          status = postedValues.status;
          employee_id = postedValues.employee_id;
          company_email = postedValues.company_email;
          client_profile_id = postedValues.id;
          user_phone = postedValues.phone;
          otp = postedValues.otp;
          console.log(client_profile_id);
          _context3.next = 24;
          return regeneratorRuntime.awrap(usersDbOperations.postUser2(company_id, branch_id, username, password, role, category, email, notify, activesession, addproperty, editproperty, approverequests, delivery, status, employee_id, company_email, client_profile_id, user_phone, otp));

        case 24:
          results = _context3.sent;
          res.json(results);
          _context3.next = 32;
          break;

        case 28:
          _context3.prev = 28;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          res.sendStatus(500);

        case 32:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 28]]);
});
userRouter.get('/', function _callee4(req, res, next) {
  var results;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(usersDbOperations.getUsers());

        case 3:
          results = _context4.sent;
          res.json(results);
          _context4.next = 11;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          res.sendStatus(500);

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
userRouter.get('/:id', function _callee5(req, res, next) {
  var id, result;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return regeneratorRuntime.awrap(usersDbOperations.getUserById(id));

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
}); //Get User By User Credentials

userRouter.get('/:email/:password', function _callee6(req, res, next) {
  var email, password, result;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          email = req.params.email;
          password = req.params.password;
          _context6.next = 5;
          return regeneratorRuntime.awrap(usersDbOperations.getUserByCred(email, password));

        case 5:
          result = _context6.sent;
          res.json(result);
          _context6.next = 13;
          break;

        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);
          res.sendStatus(500);

        case 13:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 9]]);
}); //Get User By User Email

userRouter.get('/user/email/:email', function _callee7(req, res, next) {
  var email, result;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          email = req.params.email;
          _context7.next = 4;
          return regeneratorRuntime.awrap(usersDbOperations.getUserByEmail(email));

        case 4:
          result = _context7.sent;
          res.json(result);
          _context7.next = 12;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          console.log(_context7.t0);
          res.sendStatus(500);

        case 12:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
userRouter.get('/user/:email/:otp', function _callee8(req, res, next) {
  var email, otp, result;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          email = req.params.email;
          otp = req.params.otp;
          _context8.next = 5;
          return regeneratorRuntime.awrap(usersDbOperations.getUserByOtp(email, otp));

        case 5:
          result = _context8.sent;
          res.json(result);
          _context8.next = 13;
          break;

        case 9:
          _context8.prev = 9;
          _context8.t0 = _context8["catch"](0);
          console.log(_context8.t0);
          res.sendStatus(500);

        case 13:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 9]]);
}); //Update OTP

userRouter.put('/updateopt/:id', function _callee9(req, res, next) {
  var registration_id, postedValues, status, result;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          registration_id = req.params.id;
          postedValues = req.body;
          status = postedValues.otp;
          _context9.next = 6;
          return regeneratorRuntime.awrap(usersDbOperations.updateOTPStatus(registration_id, status));

        case 6:
          result = _context9.sent;
          res.json(result);
          _context9.next = 14;
          break;

        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](0);
          console.log(_context9.t0);
          res.sendStatus(500);

        case 14:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[0, 10]]);
}); //Update OTP

userRouter.put('/updatepassword/:id', function _callee10(req, res, next) {
  var userid, postedValues, password, result;
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          userid = req.params.id;
          postedValues = req.body;
          password = postedValues.passwordHash;
          _context10.next = 6;
          return regeneratorRuntime.awrap(usersDbOperations.updatePasswordStatus(userid, password));

        case 6:
          result = _context10.sent;
          res.json(result);
          _context10.next = 14;
          break;

        case 10:
          _context10.prev = 10;
          _context10.t0 = _context10["catch"](0);
          console.log(_context10.t0);
          res.sendStatus(500);

        case 14:
        case "end":
          return _context10.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
userRouter.put('/:id', function _callee11(req, res, next) {
  var id, updatedValues, company_id, branch_id, username, password, role, category, email, notify, activesession, addproperty, editproperty, approverequests, delivery, status, employee_id, result;
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          id = req.params.id;
          updatedValues = req.body;
          company_id = updatedValues.company_id;
          branch_id = updatedValues.branch_id;
          username = updatedValues.username;
          password = updatedValues.password;
          role = updatedValues.role;
          category = updatedValues.category;
          email = updatedValues.email;
          notify = updatedValues.notify;
          activesession = updatedValues.activesession;
          addproperty = updatedValues.addproperty;
          editproperty = updatedValues.editproperty;
          approverequests = updatedValues.approverequests;
          delivery = updatedValues.delivery;
          status = updatedValues.status;
          employee_id = updatedValues.employee_id;
          _context11.next = 20;
          return regeneratorRuntime.awrap(usersDbOperations.updateUser(id, company_id, branch_id, username, password, role, category, email, notify, activesession, addproperty, editproperty, approverequests, delivery, status, employee_id));

        case 20:
          result = _context11.sent;
          res.json(result);
          _context11.next = 28;
          break;

        case 24:
          _context11.prev = 24;
          _context11.t0 = _context11["catch"](0);
          console.log(_context11.t0);
          res.sendStatus(500);

        case 28:
        case "end":
          return _context11.stop();
      }
    }
  }, null, null, [[0, 24]]);
});
userRouter["delete"]('/:id', function _callee12(req, res, next) {
  var id, result;
  return regeneratorRuntime.async(function _callee12$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          id = req.params.id;
          _context12.next = 4;
          return regeneratorRuntime.awrap(usersDbOperations.deleteUser(id));

        case 4:
          result = _context12.sent;
          res.json(result);
          _context12.next = 12;
          break;

        case 8:
          _context12.prev = 8;
          _context12.t0 = _context12["catch"](0);
          console.log(_context12.t0);
          res.sendStatus(500);

        case 12:
        case "end":
          return _context12.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
module.exports = userRouter;