const express = require('express');
const accountLinkingRouter = express.Router();
const accountLinkingDbOperations = require('../cruds/account_linking');

accountLinkingRouter.post('/', async (req, res, next) => {
    try {
        let postedValues = req.body;
        let debitAccMapId = postedValues.debitAccMapId;
        let creditAccMapId = postedValues.creditAccMapId;
        let debitTransactionId = postedValues.debitTransactionId;
        let creditTransactionId = postedValues.creditTransactionId;
        // let value = postedValues.value;
        let linkedOn = postedValues.linkedOn;
        let linkedBy = postedValues.linkedBy;
        // e
        let fin_acc_account_map_id = postedValues.fin_acc_account_map_id;
        let index_acc_name_id = postedValues.index_acc_name_id;
        let index_acc_name = postedValues.index_acc_name;
        let dual_trans_acc_name_id = postedValues.dual_trans_acc_name_id;
        let dual_trans_acc_name = postedValues.dual_trans_acc_name;
        let datepaid = postedValues.datepaid;
        let datefor = postedValues.datefor;
        let description = postedValues.description;
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
        let creditBalance = postedValues.creditBalance;
        let debitBalance = postedValues.debitBalance;

        console.log(postedValues.confirmed)

        let results = await accountLinkingDbOperations.postAccountLinking(
            // debitAccMapId, creditAccMapId, debitTransactionId, creditTransactionId, value, linkedOn, linkedBy
            debitAccMapId, creditAccMapId, debitTransactionId, creditTransactionId, value, linkedOn, linkedBy, fin_acc_account_map_id, index_acc_name_id, index_acc_name, dual_trans_acc_name_id, dual_trans_acc_name, datepaid, datefor, description, cost_center, link, currency, rate_to_usd, debit, credit, pmode, requester, confirmed, authorized, comitted, txn_reference, flag, comment, creditBalance, debitBalance
        );
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})
accountLinkingRouter.post('/postdirect', async (req, res, next) => {
    try {
        let postedValues = req.body;
        let debitAccMapId = postedValues.debitAccMapId;
        let creditAccMapId = postedValues.creditAccMapId;
        let debitTransactionId = postedValues.debitTransactionId;
        let creditTransactionId = postedValues.creditTransactionId;
        // let value = postedValues.value;
        let linkedOn = postedValues.linkedOn;
        let linkedBy = postedValues.linkedBy;
        // e
        let fin_acc_account_map_id = postedValues.fin_acc_account_map_id;
        let index_acc_name_id = postedValues.index_acc_name_id;
        let index_acc_name = postedValues.index_acc_name;
        let dual_trans_acc_name_id = postedValues.dual_trans_acc_name_id;
        let dual_trans_acc_name = postedValues.dual_trans_acc_name;
        let datepaid = postedValues.datepaid;
        let datefor = postedValues.datefor;
        let description = postedValues.description;
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
        let creditBalance = postedValues.creditBalance;
        let debitBalance = postedValues.debitBalance;

        console.log(postedValues.confirmed)

        let results = await accountLinkingDbOperations.postAccountLinking2(
            // debitAccMapId, creditAccMapId, debitTransactionId, creditTransactionId, value, linkedOn, linkedBy
            debitAccMapId, creditAccMapId, debitTransactionId, creditTransactionId, value, linkedOn, linkedBy, fin_acc_account_map_id, index_acc_name_id, index_acc_name, dual_trans_acc_name_id, dual_trans_acc_name, datepaid, datefor, description, cost_center, link, currency, rate_to_usd, debit, credit, pmode, requester, confirmed, authorized, comitted, txn_reference, flag, comment, creditBalance, debitBalance
        );
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

accountLinkingRouter.post('/post/income', async (req, res, next) => {
    try {
        let postedValues = req.body;
        
        // Extracting values from the request body
        let debitAccMapId = postedValues.debitAccMapId;
        let creditAccMapId = postedValues.creditAccMapId;
        let debitTransactionId = postedValues.debitTransactionId;
        let creditTransactionId = postedValues.creditTransactionId;
        let linkedOn = postedValues.linkedOn;
        let linkedBy = postedValues.linkedBy;
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
        let comitted = postedValues.comitted;
        let txn_reference = postedValues.txn_reference;
        let flag = postedValues.flag;
        let comment = postedValues.comment;
        let creditBalance = postedValues.creditBalance;
        let debitBalance = postedValues.debitBalance;

        console.log(postedValues.confirmed);

        // Call to database operation
        let results = await accountLinkingDbOperations.postAccountLinking3(
            debitAccMapId,
            creditAccMapId,
            debitTransactionId,
            creditTransactionId,
            linkedOn,
            linkedBy,
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
            comitted,
            txn_reference,
            flag,
            comment,
            creditBalance,
            debitBalance
        );

        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

accountLinkingRouter.get('/', async (req, res, next) => {
    try {
        let results = await accountLinkingDbOperations.getAccountLinkings();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

accountLinkingRouter.get('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await accountLinkingDbOperations.getAccountLinkingById(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

accountLinkingRouter.put('/:id', async (req, res, next) => {
    try {
        let updatedValues = req.body;
        let id = req.params.id;
        let debitAccMapId = updatedValues.debitAccMapId;
        let creditAccMapId = updatedValues.creditAccMapId;
        let debitTransactionId = updatedValues.debitTransactionId;
        let creditTransactionId = updatedValues.creditTransactionId;
        let value = updatedValues.value;
        let linkedOn = updatedValues.linkedOn;
        let linkedBy = updatedValues.linkedBy;

        let result = await accountLinkingDbOperations.updateAccountLinking(
            id, debitAccMapId, creditAccMapId, debitTransactionId, creditTransactionId, value, linkedOn, linkedBy
        );
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

accountLinkingRouter.delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await accountLinkingDbOperations.deleteAccountLinking(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = accountLinkingRouter;