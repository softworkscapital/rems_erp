require('dotenv').config();
const pool = require('../cruds_pos/poolfile');

let crudsObj = {};

// Insert new petty cash record
crudsObj.postPettyCash = (
    pettycash_id,
    company_id,
    company_name,
    branch_id,
    branch_name,
    propertyid,
    project,
    daterec,
    timerec,
    datefor,
    description,
    quantity,
    combined_receipt_total_quantity,
    amntrec,
    amntrec_credit,
    interest,
    principal,
    debit,
    deposit,
    balance,
    receipt_ref_dispatch_locked,
    credit,
    feesdue,
    username,
    confirmed_by,
    authorized_by,
    branch,
    dispatch_status,
    dispatch_by,
    dispatch_date,
    dispatch_time,
    dispatched_quantity,
    undispatched_quantity_remaining,
    undispatched_inventory_release_date,
    dispatch_sales_shift_id,
    sales_shifts_id,
    folio,
    pmode,
    currency,
    base_currency,
    price,
    rate_to_usd,
    usd_price,
    usd_cost_per_unit,
    credit_repayment_currency_price,
    ref,
    vat_rate_charged,
    vat_invoice_no,
    discount_requisition_id,
    discount_amount,
    discount_cost,
    monthsbehind,
    movementafterpayment,
    suspencenarration,
    suspencedr,
    suspencecr,
    suspencebal,
    marketing_media_sale_origin,
    marketing_loyalty_structure_id,
    customerid,
    comment,
    scale,
    sync_status,
    sync_date_time,
    syncid
) => {
    return new Promise((resolve, reject) => {
        pool.query(
            `INSERT INTO payments_pettycash_pos (
                pettycash_id, company_id, company_name, branch_id, branch_name,
                propertyid, project, daterec, timerec, datefor,
                description, quantity, combined_receipt_total_quantity, amntrec,
                amntrec_credit, interest, principal, debit, deposit,
                balance, receipt_ref_dispatch_locked, credit, feesdue,
                username, confirmed_by, authorized_by, branch, dispatch_status,
                dispatch_by, dispatch_date, dispatch_time, dispatched_quantity,
                undispatched_quantity_remaining, undispatched_inventory_release_date,
                dispatch_sales_shift_id, sales_shifts_id, folio, pmode,
                currency, base_currency, price, rate_to_usd, usd_price,
                usd_cost_per_unit, credit_repayment_currency_price, ref,
                vat_rate_charged, vat_invoice_no, discount_requisition_id,
                discount_amount, discount_cost, monthsbehind, movementafterpayment,
                suspencenarration, suspencedr, suspencecr, suspencebal,
                marketing_media_sale_origin, marketing_loyalty_structure_id,
                customerid, comment, scale, sync_status, sync_date_time, syncid
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                pettycash_id, company_id, company_name, branch_id, branch_name,
                propertyid, project, daterec, timerec, datefor,
                description, quantity, combined_receipt_total_quantity, amntrec,
                amntrec_credit, interest, principal, debit, deposit,
                balance, receipt_ref_dispatch_locked, credit, feesdue,
                username, confirmed_by, authorized_by, branch, dispatch_status,
                dispatch_by, dispatch_date, dispatch_time, dispatched_quantity,
                undispatched_quantity_remaining, undispatched_inventory_release_date,
                dispatch_sales_shift_id, sales_shifts_id, folio, pmode,
                currency, base_currency, price, rate_to_usd, usd_price,
                usd_cost_per_unit, credit_repayment_currency_price, ref,
                vat_rate_charged, vat_invoice_no, discount_requisition_id,
                discount_amount, discount_cost, monthsbehind, movementafterpayment,
                suspencenarration, suspencedr, suspencecr, suspencebal,
                marketing_media_sale_origin, marketing_loyalty_structure_id,
                customerid, comment, scale, sync_status, sync_date_time, syncid
            ],
            (err, result) => {
                if (err) {
                    console.error('Database insert error:', err); // Log error
                    return reject(err);
                }
                return resolve({ status: "200", message: "Petty cash transaction created successfully", result });
            }
        );
    });
};



// Get all petty cash records
crudsObj.getAllPettyCash = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM payments_pettycash_pos', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

// Get petty cash record by ID
crudsObj.getPettyCashById = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM payments_pettycash_pos WHERE pettycash_id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

// Update petty cash record by ID
crudsObj.updatePettyCashById = (id, updatedValues) => {
    return new Promise((resolve, reject) => {
        const query = `
            UPDATE payments_pettycash_pos SET
                company_id = ?, company_name = ?, branch_id = ?, branch_name = ?,
                propertyid = ?, project = ?, daterec = ?, timerec = ?, datefor = ?,
                description = ?, quantity = ?, combined_receipt_total_quantity = ?,
                amntrec = ?, amntrec_credit = ?, interest = ?, principal = ?, debit = ?,
                deposit = ?, balance = ?, receipt_ref_dispatch_locked = ?, credit = ?,
                feesdue = ?, username = ?, confirmed_by = ?, authorized_by = ?,
                branch = ?, dispatch_status = ?, dispatch_by = ?, dispatch_date = ?,
                dispatch_time = ?, dispatched_quantity = ?, undispatched_quantity_remaining = ?,
                undispatched_inventory_release_date = ?, dispatch_sales_shift_id = ?,
                sales_shifts_id = ?, folio = ?, pmode = ?, currency = ?,
                base_currency = ?, price = ?, rate_to_usd = ?, usd_price = ?,
                usd_cost_per_unit = ?, credit_repayment_currency_price = ?, ref = ?,
                vat_rate_charged = ?, vat_invoice_no = ?, discount_requisition_id = ?,
                discount_amount = ?, discount_cost = ?, monthsbehind = ?,
                movementafterpayment = ?, suspencenarration = ?, suspencedr = ?,
                suspencecr = ?, suspencebal = ?, marketing_media_sale_origin = ?,
                marketing_loyalty_structure_id = ?, customerid = ?, comment = ?,
                scale = ?, sync_status = ?, sync_date_time = ?, syncid = ?
            WHERE pettycash_id = ?`;
        
        const params = [
            updatedValues.company_id, updatedValues.company_name, updatedValues.branch_id,
            updatedValues.branch_name, updatedValues.propertyid, updatedValues.project,
            updatedValues.daterec, updatedValues.timerec, updatedValues.datefor,
            updatedValues.description, updatedValues.quantity, updatedValues.combined_receipt_total_quantity,
            updatedValues.amntrec, updatedValues.amntrec_credit, updatedValues.interest,
            updatedValues.principal, updatedValues.debit, updatedValues.deposit,
            updatedValues.balance, updatedValues.receipt_ref_dispatch_locked,
            updatedValues.credit, updatedValues.feesdue, updatedValues.username,
            updatedValues.confirmed_by, updatedValues.authorized_by, updatedValues.branch,
            updatedValues.dispatch_status, updatedValues.dispatch_by, updatedValues.dispatch_date,
            updatedValues.dispatch_time, updatedValues.dispatched_quantity,
            updatedValues.undispatched_quantity_remaining, updatedValues.undispatched_inventory_release_date,
            updatedValues.dispatch_sales_shift_id, updatedValues.sales_shifts_id, updatedValues.folio,
            updatedValues.pmode, updatedValues.currency, updatedValues.base_currency,
            updatedValues.price, updatedValues.rate_to_usd, updatedValues.usd_price,
            updatedValues.usd_cost_per_unit, updatedValues.credit_repayment_currency_price,
            updatedValues.ref, updatedValues.vat_rate_charged, updatedValues.vat_invoice_no,
            updatedValues.discount_requisition_id, updatedValues.discount_amount,
            updatedValues.discount_cost, updatedValues.monthsbehind, updatedValues.movementafterpayment,
            updatedValues.suspencenarration, updatedValues.suspencedr, updatedValues.suspencecr,
            updatedValues.suspencebal, updatedValues.marketing_media_sale_origin,
            updatedValues.marketing_loyalty_structure_id, updatedValues.customerid,
            updatedValues.comment, updatedValues.scale, updatedValues.sync_status,
            updatedValues.sync_date_time, updatedValues.syncid, id
        ];
        
        pool.query(query, params, (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve({ status: "200", message: "Petty cash transaction updated successfully", result });
        });
    });
};

// Delete petty cash record by ID
crudsObj.deletePettyCashById = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM payments_pettycash_pos WHERE pettycash_id = ?', [id], (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve({ status: "200", message: "Petty cash transaction deleted successfully", result });
        });
    });
};

module.exports = crudsObj;