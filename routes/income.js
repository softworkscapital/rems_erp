const express = require('express');
const incomeRouter = express.Router();
const incomeDbOperations = require('../cruds/income');

incomeRouter.post('/', async (req, res, next) => {
    try {
        let postedValues = req.body;

        // Extracting values from the request body
        let fin_acc_revenue_accounts_id = postedValues.fin_acc_revenue_accounts_id;
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
        let pmode = postedValues.pmode;
        let requester = postedValues.requester;
        let confirmed = postedValues.confirmed;
        let authorized = postedValues.authorized;
        let comitted = postedValues.comitted;
        let txn_reference = postedValues.txn_reference;
        let flag = postedValues.flag;
        let comment = postedValues.comment;

        // Call the updated post RevenueAcc function
        let results = await incomeDbOperations.postRevenueAcc(
            fin_acc_revenue_accounts_id,
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
            pmode,
            requester,
            confirmed,
            authorized,
            comitted,
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

incomeRouter.get('/', async (req, res, next) => {
    try {
        let results = await incomeDbOperations.getRevenueAccs();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


incomeRouter.get('/contribution_all_pension_plans__sums_today', async (req, res, next) => {
    try {
        let results = await incomeDbOperations.getContributionAllPensionPlansSumsToday();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

incomeRouter.get('/contribution_all_pension_plans__sums_todate', async (req, res, next) => {
    try {
        let results = await incomeDbOperations.getContributionAllPensionPlansSumsTodate();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});




incomeRouter.get('/get/acc/limit', async (req, res, next) => {
    try {
        let results = await incomeDbOperations.getRevenueHistory();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

incomeRouter.get('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await incomeDbOperations.getRevenueAccById(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


incomeRouter.get('/revenue_contributions_sums_today', async (req, res, next) => {
    try {
        let result = await incomeDbOperations.getRevenueContributionsSumsToday();
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});




incomeRouter.get('/revenue_contributions_sums_date', async (req, res, next) => {
    try {
        const result = await incomeDbOperations.getRevenueContributionsSumsDate();
        res.json(result);
    } catch (e) {
        console.error(e); // Use console.error for error logging
        res.sendStatus(500); // Internal server error
    }
});


incomeRouter.get('/acc/:name', async (req, res, next) => {
    try {
        let name = req.params.name;
        let result = await incomeDbOperations.getRevenueAccByName(name);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

incomeRouter.get('/acc/index/:name', async (req, res, next) => {
    try {
        let name = req.params.name;
        let result = await incomeDbOperations.getRevenueAccByIndexName(name);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

incomeRouter.get('/aaccBal/name', async (req, res, next) => {
    try {
        let results = await incomeDbOperations.getRevenueAccs2();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

incomeRouter.put('/:id', async (req, res, next) => {
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

        let result = await incomeDbOperations.updateRevenueAcc(
            id, fin_acc_account_map_id, index_acc_name_id, index_acc_name, dual_trans_acc_name_id, dual_trans_acc_name, datepaid, datefor, description, cost_center, link, currency, rate_to_usd, value, debit, credit, pmode, requester, confirmed, authorized, comitted, txn_reference, flag, comment
        );
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

incomeRouter.delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await incomeDbOperations.deleteRevenueAcc(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = incomeRouter;