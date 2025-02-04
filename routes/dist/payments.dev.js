"use strict";

var express = require('express');

var paymentsRouter = express.Router();

var paymentsDbOperations = require('../cruds/payments'); // Adjust the path as necessary
// Create a new payment record


paymentsRouter.post('/', function _callee(req, res, next) {
  var postedValues, company_id, company_name, branch_id, branch_name, propertyid, project, daterec, timerec, datefor, description, quantity, combined_receipt_total_quantity, amntrec, amntrec_credit, interest, principal, deposit, balance, feesdue, username, confirmed_by, authorized_by, branch, dispatch_status, dispatch_by, dispatch_date, dispatch_time, dispatched_quantity, undispatched_quantity_remaining, dispatch_sales_shift_id, sales_shifts_id, folio, pmode, currency, price, rate_to_usd, ref, vat_rate_charged, vat_invoice_no, monthsbehind, movementafterpayment, suspencenarration, suspencedr, suspencecr, suspencebal, marketing_media_sale_origin, marketing_loyalty_structure_id, customerid, comment, scale, sync_status, sync_date_time, syncid, results;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          postedValues = req.body; // Extracting values from the request body

          company_id = postedValues.company_id;
          company_name = postedValues.company_name;
          branch_id = postedValues.branch_id;
          branch_name = postedValues.branch_name;
          propertyid = postedValues.propertyid;
          project = postedValues.project;
          daterec = postedValues.daterec;
          timerec = postedValues.timerec;
          datefor = postedValues.datefor;
          description = postedValues.description;
          quantity = postedValues.quantity;
          combined_receipt_total_quantity = postedValues.combined_receipt_total_quantity;
          amntrec = postedValues.amntrec;
          amntrec_credit = postedValues.amntrec_credit;
          interest = postedValues.interest;
          principal = postedValues.principal;
          deposit = postedValues.deposit;
          balance = postedValues.balance;
          feesdue = postedValues.feesdue;
          username = postedValues.username;
          confirmed_by = postedValues.confirmed_by;
          authorized_by = postedValues.authorized_by;
          branch = postedValues.branch;
          dispatch_status = postedValues.dispatch_status;
          dispatch_by = postedValues.dispatch_by;
          dispatch_date = postedValues.dispatch_date;
          dispatch_time = postedValues.dispatch_time;
          dispatched_quantity = postedValues.dispatched_quantity;
          undispatched_quantity_remaining = postedValues.undispatched_quantity_remaining;
          dispatch_sales_shift_id = postedValues.dispatch_sales_shift_id;
          sales_shifts_id = postedValues.sales_shifts_id;
          folio = postedValues.folio;
          pmode = postedValues.pmode;
          currency = postedValues.currency;
          price = postedValues.price;
          rate_to_usd = postedValues.rate_to_usd;
          ref = postedValues.ref;
          vat_rate_charged = postedValues.vat_rate_charged;
          vat_invoice_no = postedValues.vat_invoice_no;
          monthsbehind = postedValues.monthsbehind;
          movementafterpayment = postedValues.movementafterpayment;
          suspencenarration = postedValues.suspencenarration;
          suspencedr = postedValues.suspencedr;
          suspencecr = postedValues.suspencecr;
          suspencebal = postedValues.suspencebal;
          marketing_media_sale_origin = postedValues.marketing_media_sale_origin;
          marketing_loyalty_structure_id = postedValues.marketing_loyalty_structure_id;
          customerid = postedValues.customerid;
          comment = postedValues.comment;
          scale = postedValues.scale;
          sync_status = postedValues.sync_status;
          sync_date_time = postedValues.sync_date_time;
          syncid = postedValues.syncid; // Call the postPayment function

          _context.next = 57;
          return regeneratorRuntime.awrap(paymentsDbOperations.postPayment({
            company_id: company_id,
            company_name: company_name,
            branch_id: branch_id,
            branch_name: branch_name,
            propertyid: propertyid,
            project: project,
            daterec: daterec,
            timerec: timerec,
            datefor: datefor,
            description: description,
            quantity: quantity,
            combined_receipt_total_quantity: combined_receipt_total_quantity,
            amntrec: amntrec,
            amntrec_credit: amntrec_credit,
            interest: interest,
            principal: principal,
            deposit: deposit,
            balance: balance,
            feesdue: feesdue,
            username: username,
            confirmed_by: confirmed_by,
            authorized_by: authorized_by,
            branch: branch,
            dispatch_status: dispatch_status,
            dispatch_by: dispatch_by,
            dispatch_date: dispatch_date,
            dispatch_time: dispatch_time,
            dispatched_quantity: dispatched_quantity,
            undispatched_quantity_remaining: undispatched_quantity_remaining,
            dispatch_sales_shift_id: dispatch_sales_shift_id,
            sales_shifts_id: sales_shifts_id,
            folio: folio,
            pmode: pmode,
            currency: currency,
            price: price,
            rate_to_usd: rate_to_usd,
            ref: ref,
            vat_rate_charged: vat_rate_charged,
            vat_invoice_no: vat_invoice_no,
            monthsbehind: monthsbehind,
            movementafterpayment: movementafterpayment,
            suspencenarration: suspencenarration,
            suspencedr: suspencedr,
            suspencecr: suspencecr,
            suspencebal: suspencebal,
            marketing_media_sale_origin: marketing_media_sale_origin,
            marketing_loyalty_structure_id: marketing_loyalty_structure_id,
            customerid: customerid,
            comment: comment,
            scale: scale,
            sync_status: sync_status,
            sync_date_time: sync_date_time,
            syncid: syncid
          }));

        case 57:
          results = _context.sent;
          // Send the results back as JSON
          res.json(results);
          _context.next = 65;
          break;

        case 61:
          _context.prev = 61;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.sendStatus(500);

        case 65:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 61]]);
}); // Get all payment records

paymentsRouter.get('/', function _callee2(req, res, next) {
  var results;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(paymentsDbOperations.getPayments());

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
}); // Get payment record by ID

paymentsRouter.get('/:id', function _callee3(req, res, next) {
  var id, result;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(paymentsDbOperations.getPaymentById(id));

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
}); // Update a payment record

paymentsRouter.put('/:id', function _callee4(req, res, next) {
  var updatedValues, id, result;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          updatedValues = req.body;
          id = req.params.id;
          _context4.next = 5;
          return regeneratorRuntime.awrap(paymentsDbOperations.updatePayment(id, updatedValues));

        case 5:
          result = _context4.sent;
          res.json(result);
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
}); // Delete a payment record

paymentsRouter["delete"]('/:id', function _callee5(req, res, next) {
  var id, result;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return regeneratorRuntime.awrap(paymentsDbOperations.deletePayment(id));

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
}); // You can add more specific endpoints as needed

module.exports = paymentsRouter;