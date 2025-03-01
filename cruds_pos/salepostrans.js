require('dotenv').config();
const pool = require('../cruds_pos/poolfile');

let crudsObj = {};

crudsObj.postSalePosTrans = (
    propertyid,
    project,
    company_id,
    branch_id,
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
    deposit,
    balance,
    receipt_ref_dispatch_locked,
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
    price,
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
    suspencebal,
    suspencedr,
    suspencecr,
    suspencenarration,
    marketing_media_sale_origin,
    marketing_loyalty_structure_id,
    customerid,
    comment,
    sync_status
) => {
    return new Promise((resolve, reject) => {
        pool.query(
            `INSERT INTO payments (
                propertyid,
                project,
                company_id,
                branch_id,
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
                deposit,
                balance,
                receipt_ref_dispatch_locked,
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
                price,
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
                suspencebal,
                suspencedr,
                suspencecr,
                suspencenarration,
                marketing_media_sale_origin,
                marketing_loyalty_structure_id,
                customerid,
                comment,
                sync_status
            ) VALUES (?, ?, ?,  ?, ?,?,?, ?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                propertyid,
                project,
                company_id,
                branch_id,
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
                deposit,
                balance,
                receipt_ref_dispatch_locked,
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
                price,
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
                suspencebal,
                suspencedr,
                suspencecr,
                suspencenarration,
                marketing_media_sale_origin,
                marketing_loyalty_structure_id,
                customerid,
                comment,
                sync_status
            ],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve({ status: "200", message: "Invoice created successfully", result });
            }
        );
    });
};

//get all trans by company id, branch id, operator id, shift id,
crudsObj.getSalePosTransSaleByShift = (company_id, branch_id, shift_id) => {
    return new Promise((resolve, reject) => {
       
        pool.query('SELECT * FROM payments ' +
            ' JOIN sale_list_item ON ' +
            ' payments.payid = sale_list_item.sale_records_id ' +
            ' AND payments.company_id = sale_list_item.company_id ' +
            ' AND payments.branch_id = sale_list_item.branch_id ' +
            ' JOIN products_definition ON ' +
            ' sale_list_item.product_id = products_definition.product_id ' +
            ' AND payments.company_id = sale_list_item.company_id ' +
            ' AND payments.branch_id = sale_list_item.branch_id ' +
            ' JOIN inventory_mgt ON ' +
            ' sale_list_item.product_id = inventory_mgt.product_id ' +
            ' AND payments.company_id = sale_list_item.company_id ' +
            ' AND payments.branch_id = sale_list_item.branch_id ' +
            ' WHERE payments.sales_shifts_id = ? AND payments.company_id = ? AND payments.branch_id = ?', 
            [shift_id, company_id, branch_id], // Parameters for the query
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            }
        );
    });
};


// Update other methods similarly...

crudsObj.getSalePosTransTotalSales = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT SUM(amntrec) AS total_sales FROM payments', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

// // Example for getting by ID
// crudsObj.getSalePosTransById = (id) => {
//     return new Promise((resolve, reject) => {
//         pool.query('SELECT * FROM payments WHERE payments_payid = ?', [id], (err, results) => {
//             if (err) {
//                 return reject(err);
//             }
//             return resolve(results);
//         });
//     });
// };

// Update other methods as needed...

module.exports = crudsObj;