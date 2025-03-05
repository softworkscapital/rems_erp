const express = require('express');
const paymentsPettyCashPosRouter = express.Router();
const paymentsPettyCashPosDbOperations = require('../cruds_pos/payments_pettycash_pos');

// Add new petty cash record
paymentsPettyCashPosRouter.post('/', async (req, res) => {
    try {
        const postedValues = req.body;

        // Log the incoming request for debugging
        console.log('Received POST request with body:', postedValues);

        const result = await paymentsPettyCashPosDbOperations.postPettyCash(
            postedValues.pettycash_id,
            postedValues.company_id,
            postedValues.company_name,
            postedValues.branch_id,
            postedValues.branch_name,
            postedValues.propertyid,
            postedValues.project,
            postedValues.daterec,
            postedValues.timerec,
            postedValues.datefor,
            postedValues.description,
            postedValues.quantity,
            postedValues.combined_receipt_total_quantity,
            postedValues.amntrec,
            postedValues.amntrec_credit,
            postedValues.interest,
            postedValues.principal,
            postedValues.debit,
            postedValues.deposit,
            postedValues.balance,
            postedValues.receipt_ref_dispatch_locked,
            postedValues.credit,
            postedValues.feesdue,
            postedValues.username,
            postedValues.confirmed_by,
            postedValues.authorized_by,
            postedValues.branch,
            postedValues.dispatch_status,
            postedValues.dispatch_by,
            postedValues.dispatch_date,
            postedValues.dispatch_time,
            postedValues.dispatched_quantity,
            postedValues.undispatched_quantity_remaining,
            postedValues.undispatched_inventory_release_date,
            postedValues.dispatch_sales_shift_id,
            postedValues.sales_shifts_id,
            postedValues.folio,
            postedValues.pmode,
            postedValues.currency,
            postedValues.base_currency,
            postedValues.price,
            postedValues.rate_to_usd,
            postedValues.usd_price,
            postedValues.usd_cost_per_unit,
            postedValues.credit_repayment_currency_price,
            postedValues.ref,
            postedValues.vat_rate_charged,
            postedValues.vat_invoice_no,
            postedValues.discount_requisition_id,
            postedValues.discount_amount,
            postedValues.discount_cost,
            postedValues.monthsbehind,
            postedValues.movementafterpayment,
            postedValues.suspencenarration,
            postedValues.suspencedr,
            postedValues.suspencecr,
            postedValues.suspencebal,
            postedValues.marketing_media_sale_origin,
            postedValues.marketing_loyalty_structure_id,
            postedValues.customerid,
            postedValues.comment,
            postedValues.scale,
            postedValues.sync_status,
            postedValues.sync_date_time,
            postedValues.syncid
        );

        res.json(result);
    } catch (e) {
        console.error('Error handling request:', e); // Log error
        res.sendStatus(500);
    }
});

// Get all petty cash records
paymentsPettyCashPosRouter.get('/', async (req, res) => {
    try {
        const results = await paymentsPettyCashPosDbOperations.getAllPettyCash();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Get petty cash record by ID
paymentsPettyCashPosRouter.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const results = await paymentsPettyCashPosDbOperations.getPettyCashById(id);
        if (results.length === 0) {
            return res.status(404).json({ message: "Petty cash record not found" });
        }
        res.json(results[0]);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Update petty cash record by ID
paymentsPettyCashPosRouter.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedValues = req.body;
        const result = await paymentsPettyCashPosDbOperations.updatePettyCashById(id, updatedValues);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Delete petty cash record by ID
paymentsPettyCashPosRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await paymentsPettyCashPosDbOperations.deletePettyCashById(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = paymentsPettyCashPosRouter;