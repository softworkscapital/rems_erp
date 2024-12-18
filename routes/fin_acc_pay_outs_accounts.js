const express = require('express');
const PayOutsAccRouter = express.Router();
const PayOutsAccDbOperations = require('../cruds/fac_acc_pay_outs_accounts');

PayOutsAccRouter.post('/', async (req, res, next) => {
    try {
        let postedValues = req.body;

        // Extracting values from the request body
        let fin_acc_pay_outs_account_id = postedValues.fin_acc_pay_outs_account_id;
        let fin_acc_account_map_id = postedValues.fin_acc_account_map_id;
        let index_acc_name_id = postedValues.index_acc_name_id;
        let index_acc_name = postedValues.index_acc_name;
        let dual_trans_acc_name_id = postedValues.dual_trans_acc_name_id;
        let dual_trans_acc_name = postedValues.dual_trans_acc_name;
        let datepaid = postedValues.datepaid;
        let datefor = postedValues.datefor;
        let description = postedValues.description;
        let member_contribution_amount = postedValues.member_contribution_amount;
        let company_contribution_amount = postedValues.company_contribution_amount;
        let time_rec = postedValues.time_rec;
        let interest = postedValues.interest;
        let principal = postedValues.principal;
        let deposit = postedValues.deposit;
        let folio = postedValues.folio;
        let balance = postedValues.balance;
        let total_paid_contributions = postedValues.total_paid_contributions;
        let branch_id = postedValues.branch_id;
        let member_id = postedValues.member_id;
        let sync_status = postedValues.sync_status;
        let sync_date_time = postedValues.sync_date_time;
        let sub_account_1 = postedValues.sub_account_1;
        let sub_account_2 = postedValues.sub_account_2;
        let sub_account_3 = postedValues.sub_account_3;
        let sub_account_4 = postedValues.sub_account_4;
        let sub_account_5 = postedValues.sub_account_5;
        let sales_shift_id = postedValues.sales_shift_id;
        let operator = postedValues.operator;
        let cost_center = postedValues.cost_center;
        let link = postedValues.link;
        let currency = postedValues.currency;
        let rate_to_usd = postedValues.rate_to_usd;
        let value = postedValues.value;
        let debit = postedValues.debit;
        let credit = postedValues.credit;
        let product_pension_plan_id = postedValues.product_pension_plan_id;
        let months_behind = postedValues.months_behind;
        let pmode = postedValues.pmode;
        let requester = postedValues.requester;
        let confirmed = postedValues.confirmed;
        let authorized = postedValues.authorized;
        let committed = postedValues.committed;  // Corrected spelling
        let txn_reference = postedValues.txn_reference;
        let flag = postedValues.flag;
        let comment = postedValues.comment;

        // Call the updated post PayOutsAcc function
        let results = await PayOutsAccDbOperations.postPayOutsAcc(
            fin_acc_pay_outs_account_id,
            fin_acc_account_map_id,
            index_acc_name_id,
            index_acc_name,
            dual_trans_acc_name_id,
            dual_trans_acc_name,
            datepaid,
            datefor,
            description,
            member_contribution_amount,
            company_contribution_amount,
            time_rec,
            interest,
            principal,
            deposit,
            folio,
            balance,
            total_paid_contributions,
            branch_id,
            member_id,
            sync_status,
            sync_date_time,
            sub_account_1,
            sub_account_2,
            sub_account_3,
            sub_account_4,
            sub_account_5,
            sales_shift_id,
            operator,
            cost_center,
            link,
            currency,
            rate_to_usd,
            value,
            debit,
            credit,
            product_pension_plan_id,
            months_behind,
            pmode,
            requester,
            confirmed,
            authorized,
            committed,  // Corrected spelling
            txn_reference,
            flag,
            comment
        );

        // Send the results back as JSON
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

PayOutsAccRouter.get('/', async (req, res, next) => {
    try {
        let results = await PayOutsAccDbOperations.getPayOutsAccs();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


PayOutsAccRouter.get('/contribution_all_pension_plans__sums_today', async (req, res, next) => {
    try {
        let results = await PayOutsAccDbOperations.getContributionAllPensionPlansSumsToday();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

PayOutsAccRouter.get('/contribution_all_pension_plans__sums_todate', async (req, res, next) => {
    try {
        let results = await PayOutsAccDbOperations.getContributionAllPensionPlansSumsTodate();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});




PayOutsAccRouter.get('/get/acc/limit', async (req, res, next) => {
    try {
        let results = await PayOutsAccDbOperations.getPayOutsAccHistory();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

PayOutsAccRouter.get('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await PayOutsAccDbOperations.getPayOutsAccById(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


PayOutsAccRouter.get('/revenue_contributions_sums_today', async (req, res, next) => {
    try {
        let result = await PayOutsAccDbOperations.getPayOutsAccContributionsSumsToday();
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});




PayOutsAccRouter.get('/revenue_contributions_sums_date', async (req, res, next) => {
    try {
        const result = await PayOutsAccDbOperations.getPayOutsAccContributionsSumsDate();
        res.json(result);
    } catch (e) {
        console.error(e); // Use console.error for error logging
        res.sendStatus(500); // Internal server error
    }
});


PayOutsAccRouter.get('/acc/:name', async (req, res, next) => {
    try {
        let name = req.params.name;
        let result = await PayOutsAccDbOperations.getPayOutsAccAccByName(name);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

PayOutsAccRouter.get('/acc/index/:name', async (req, res, next) => {
    try {
        let name = req.params.name;
        let result = await PayOutsAccDbOperations.getPayOutsAccByIndexName(name);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

PayOutsAccRouter.get('/aaccBal/name', async (req, res, next) => {
    try {
        let results = await PayOutsAccDbOperations.getPayOutsAccs2();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

PayOutsAccRouter.put('/:id', async (req, res, next) => {
    try {
        let updatedValues = req.body;
        let id = req.params.id;
        let fin_acc_account_map_id = updatedValues.fin_acc_account_map_id;
        let index_acc_name_id = updatedValues.index_acc_name_id;
        let index_acc_name = updatedValues.index_acc_name;
        let dual_trans_acc_name_id = updatedValues.dual_trans_acc_name_id;
        let dual_trans_acc_name = updatedValues.dual_trans_acc_name;
        let datepaid = updatedValues.datepaid;
        let datefor = updatedValues.datefor;
        let description = updatedValues.description;
        let cost_center = updatedValues.cost_center;
        let link = updatedValues.link;
        let currency = updatedValues.currency;
        let rate_to_usd = updatedValues.rate_to_usd;
        let value = updatedValues.value;
        let debit = updatedValues.debit;
        let credit = updatedValues.credit;
        let pmode = updatedValues.pmode;
        let requester = updatedValues.requester;
        let confirmed = updatedValues.confirmed;
        let authorized = updatedValues.authorized;
        let comitted = updatedValues.comitted;
        let txn_reference = updatedValues.txn_reference;
        let flag = updatedValues.flag;
        let comment = updatedValues.comment;

        let result = await PayOutsAccDbOperations.updatePayOutsAcc(
            id, fin_acc_account_map_id, index_acc_name_id, index_acc_name, dual_trans_acc_name_id, dual_trans_acc_name, datepaid, datefor, description, cost_center, link, currency, rate_to_usd, value, debit, credit, pmode, requester, confirmed, authorized, comitted, txn_reference, flag, comment
        );
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

PayOutsAccRouter.delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await PayOutsAccDbOperations.deletePayOutsAcc(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = PayOutsAccRouter;