"use strict";

require('dotenv').config();

var pool = require('./poolfile');

var crudsObj = {}; // Create a new payment record

crudsObj.postPayment = function (data) {
  return new Promise(function (resolve, reject) {
    // SQL query for inserting a new payment
    var sql = "\n            INSERT INTO payments (\n                company_id, company_name, branch_id, branch_name, propertyid, project,\n                daterec, timerec, datefor, description, quantity, combined_receipt_total_quantity,\n                amntrec, amntrec_credit, interest, principal, deposit, balance, feesdue,\n                username, confirmed_by, authorized_by, branch, dispatch_status, dispatch_by,\n                dispatch_date, dispatch_time, dispatched_quantity, undispatched_quantity_remaining,\n                dispatch_sales_shift_id, sales_shifts_id, folio, pmode, currency, price,\n                rate_to_usd, ref, vat_rate_charged, vat_invoice_no, monthsbehind,\n                movementafterpayment, suspencenarration, suspencedr, suspencecr, suspencebal,\n                marketing_media_sale_origin, marketing_loyalty_structure_id, customerid,\n                comment, scale, sync_status, sync_date_time, syncid\n            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)\n        "; // Execute the query

    pool.query(sql, [data.company_id, data.company_name, data.branch_id, data.branch_name, data.propertyid, data.project, data.daterec, data.timerec, data.datefor, data.description, data.quantity, data.combined_receipt_total_quantity, data.amntrec, data.amntrec_credit, data.interest, data.principal, data.deposit, data.balance, data.feesdue, data.username, data.confirmed_by, data.authorized_by, data.branch, data.dispatch_status, data.dispatch_by, data.dispatch_date, data.dispatch_time, data.dispatched_quantity, data.undispatched_quantity_remaining, data.dispatch_sales_shift_id, data.sales_shifts_id, data.folio, data.pmode, data.currency, data.price, data.rate_to_usd, data.ref, data.vat_rate_charged, data.vat_invoice_no, data.monthsbehind, data.movementafterpayment, data.suspencenarration, data.suspencedr, data.suspencecr, data.suspencebal, data.marketing_media_sale_origin, data.marketing_loyalty_structure_id, data.customerid, data.comment, data.scale, data.sync_status, data.sync_date_time, data.syncid], function (err, result) {
      if (err) {
        // Reject the promise with the error
        return reject({
          status: '500',
          message: 'Error saving payment',
          error: err
        });
      } // Resolve the promise with a success message and the inserted row ID


      return resolve({
        status: '200',
        message: 'Saving successful',
        insertedId: result.insertId
      });
    });
  });
}; // Get all payment records


crudsObj.getPayments = function () {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM payments', function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
}; // Get payment record by ID


crudsObj.getPaymentById = function (payid) {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM payments WHERE payid = ?', [payid], function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
}; // Update a payment record


crudsObj.updatePayment = function (payid, data) {
  return new Promise(function (resolve, reject) {
    pool.query('UPDATE payments SET company_id = ?, company_name = ?, branch_id = ?, branch_name = ?, propertyid = ?, project = ?, daterec = ?, timerec = ?, datefor = ?, description = ?, quantity = ?, combined_receipt_total_quantity = ?, amntrec = ?, amntrec_credit = ?, interest = ?, principal = ?, deposit = ?, balance = ?, feesdue = ?, username = ?, confirmed_by = ?, authorized_by = ?, branch = ?, dispatch_status = ?, dispatch_by = ?, dispatch_date = ?, dispatch_time = ?, dispatched_quantity = ?, undispatched_quantity_remaining = ?, dispatch_sales_shift_id = ?, sales_shifts_id = ?, folio = ?, pmode = ?, currency = ?, price = ?, rate_to_usd = ?, ref = ?, vat_rate_charged = ?, vat_invoice_no = ?, monthsbehind = ?, movementafterpayment = ?, suspencenarration = ?, suspencedr = ?, suspencecr = ?, suspencebal = ?, marketing_media_sale_origin = ?, marketing_loyalty_structure_id = ?, customerid = ?, comment = ?, scale = ?, sync_status = ?, sync_date_time = ?, syncid = ? WHERE payid = ?', [data.company_id, data.company_name, data.branch_id, data.branch_name, data.propertyid, data.project, data.daterec, data.timerec, data.datefor, data.description, data.quantity, data.combined_receipt_total_quantity, data.amntrec, data.amntrec_credit, data.interest, data.principal, data.deposit, data.balance, data.feesdue, data.username, data.confirmed_by, data.authorized_by, data.branch, data.dispatch_status, data.dispatch_by, data.dispatch_date, data.dispatch_time, data.dispatched_quantity, data.undispatched_quantity_remaining, data.dispatch_sales_shift_id, data.sales_shifts_id, data.folio, data.pmode, data.currency, data.price, data.rate_to_usd, data.ref, data.vat_rate_charged, data.vat_invoice_no, data.monthsbehind, data.movementafterpayment, data.suspencenarration, data.suspencedr, data.suspencecr, data.suspencebal, data.marketing_media_sale_origin, data.marketing_loyalty_structure_id, data.customerid, data.comment, data.scale, data.sync_status, data.sync_date_time, data.syncid, payid], function (err, result) {
      if (err) {
        return reject(err);
      }

      return resolve({
        status: '200',
        message: 'update successful'
      });
    });
  });
}; // Delete a payment record


crudsObj.deletePayment = function (payid) {
  return new Promise(function (resolve, reject) {
    pool.query('DELETE FROM payments WHERE payid = ?', [payid], function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve({
        status: '200',
        message: 'delete successful'
      });
    });
  });
};

module.exports = crudsObj;