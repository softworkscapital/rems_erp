const express = require('express');
const paymentRouter = express.Router();
const paymentDbOperations = require('../cruds_gas_ecosystem/payments');

paymentRouter.post('/', async (req, res, next) => {
    try {
        let postedValues = req.body;
        let {
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
            deposit,
            balance,
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
            dispatch_sales_shift_id,
            sales_shifts_id,
            folio,
            pmode,
            currency,
            price,
            rate_to_usd,
            ref,
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
        } = postedValues;

        console.log('Posted data: ', company_id, branch_id, description);

        let results = await paymentDbOperations.postPayment(
            company_id, company_name, branch_id, branch_name, propertyid, project,
            daterec, timerec, datefor, description, quantity, combined_receipt_total_quantity,
            amntrec, amntrec_credit, interest, principal, deposit, balance, feesdue,
            username, confirmed_by, authorized_by, branch, dispatch_status, dispatch_by,
            dispatch_date, dispatch_time, dispatched_quantity, undispatched_quantity_remaining,
            dispatch_sales_shift_id, sales_shifts_id, folio, pmode, currency, price,
            rate_to_usd, ref, monthsbehind, movementafterpayment, suspencenarration,
            suspencedr, suspencecr, suspencebal, marketing_media_sale_origin,
            marketing_loyalty_structure_id, customerid, comment, scale, sync_status,
            sync_date_time, syncid
        );
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

paymentRouter.get('/', async (req, res, next) => {
    try {
        let results = await paymentDbOperations.getPayments();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
paymentRouter.get('/total/sales', async (req, res, next) => {
    try {
        let results = await paymentDbOperations.getPaymentsTotalSales();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});





paymentRouter.get('/branchesonline/company/:company_id', async (req, res, next) => {
    try {
        let company_id = req.params.company_id; // Correctly get company_id
        let results = await paymentDbOperations.getPaymentsBranchesOnlineByCompanyId(company_id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});



paymentRouter.get('/branch/:branch_id/:company_id', async (req, res, next) => {
    try {
        let branch_id = req.params.branch_id
        let company_id = req.params.company_id
        let results = await paymentDbOperations.getPaymentsByBranch(branch_id, company_id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

paymentRouter.get('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await paymentDbOperations.getPaymentById(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

paymentRouter.put('/:id', async (req, res, next) => {
    try {
        let updatedValues = req.body;
        let id = req.params.id;

        // Extracting new columns
        let {
            payid,
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
            deposit,
            balance,
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
            dispatch_sales_shift_id,
            sales_shifts_id,
            folio,
            pmode,
            currency,
            price,
            rate_to_usd,
            ref,
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
        } = updatedValues;

        let result = await paymentDbOperations.updatePayment(
            id, payid, company_id, company_name, branch_id, branch_name, propertyid, project,
            daterec, timerec, datefor, description, quantity, combined_receipt_total_quantity,
            amntrec, amntrec_credit, interest, principal, deposit, balance, feesdue,
            username, confirmed_by, authorized_by, branch, dispatch_status, dispatch_by,
            dispatch_date, dispatch_time, dispatched_quantity, undispatched_quantity_remaining,
            dispatch_sales_shift_id, sales_shifts_id, folio, pmode, currency, price,
            rate_to_usd, ref, monthsbehind, movementafterpayment, suspencenarration,
            suspencedr, suspencecr, suspencebal, marketing_media_sale_origin,
            marketing_loyalty_structure_id, customerid, comment, scale, sync_status,
            sync_date_time, syncid
        );
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

paymentRouter.delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await paymentDbOperations.deletePayment(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = paymentRouter;
