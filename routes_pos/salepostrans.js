const express = require('express');
const salePosTransRouter = express.Router();
const salePosTransDbOperations = require('../cruds_pos/salepostrans');

salePosTransRouter.post('/add_sale_pos_trans_sold', async (req, res, next) => {
    try {
        let postedValues = req.body;
        let {
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
        } = postedValues;

        let results = await salePosTransDbOperations.postSalePosTrans(
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
        );

        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});




// salePosTransRouter.get('/', async (req, res, next) => {
//     try {
//         let results = await salePosTransDbOperations.getSalePosTrans();
//         res.json(results);
//     } catch (e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// });

salePosTransRouter.get('/total/sales', async (req, res, next) => {
    try {
        let results = await salePosTransDbOperations.getSalePosTransTotalSales();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

salePosTransRouter.get('/get_sale_pos_trans_sold_by_shift/:branch_id/:company_id/:shift_id', async (req, res, next) => {
    try {
        const { branch_id, company_id, shift_id } = req.params; // Get parameters from URL
        let results = await salePosTransDbOperations.getSalePosTransSaleByShift(company_id, branch_id, shift_id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

salePosTransRouter.get('/branchesonline/company/:company_id', async (req, res, next) => {
    try {
        let company_id = req.params.company_id;
        let results = await salePosTransDbOperations.getSalePosTransBranchesOnlineByCompanyId(company_id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

salePosTransRouter.get('/branch/:branch_id/:company_id', async (req, res, next) => {
    try {
        let branch_id = req.params.branch_id;
        let company_id = req.params.company_id;
        let results = await salePosTransDbOperations.getSalePosTransByBranch(branch_id, company_id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// salePosTransRouter.get('/:id', async (req, res, next) => {
//     try {
//         let id = req.params.id;
//         let result = await salePosTransDbOperations.getSalePosTransById(id);
//         res.json(result);
//     } catch (e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// });

salePosTransRouter.put('/:id', async (req, res, next) => {
    try {
        let updatedValues = req.body;
        let id = req.params.id;

        // Extracting new columns
        let {
            propertyid,
            project,
            product_id,
            product_name,
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
        } = updatedValues;

        let result = await salePosTransDbOperations.updateSalePosTrans(
            id, propertyid, project, product_id, product_name,
            daterec, timerec, datefor, description, quantity,
            combined_receipt_total_quantity, amntrec, amntrec_credit,
            interest, principal, deposit, balance,
            receipt_ref_dispatch_locked, feesdue, username,
            confirmed_by, authorized_by, branch, dispatch_status,
            dispatch_by, dispatch_date, dispatch_time, dispatched_quantity,
            undispatched_quantity_remaining, undispatched_inventory_release_date,
            dispatch_sales_shift_id, sales_shifts_id, folio,
            pmode, currency, price, usd_price,
            usd_cost_per_unit, credit_repayment_currency_price,
            ref, vat_rate_charged, vat_invoice_no,
            discount_requisition_id, discount_amount, discount_cost,
            monthsbehind, movementafterpayment, suspencebal,
            suspencedr, suspencecr, suspencenarration,
            marketing_media_sale_origin, marketing_loyalty_structure_id,
            customerid, comment, sync_status
        );
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

salePosTransRouter.delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await salePosTransDbOperations.deleteSalePosTrans(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = salePosTransRouter;