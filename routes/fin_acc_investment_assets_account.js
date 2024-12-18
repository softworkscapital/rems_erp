const express = require('express');
const  FinAccInvestmentAssetsAccountRouter = express.Router();
const  FinAccInvestmentAssetsAccountDbOperations = require('../cruds/fin_acc_investments_assets_account');

FinAccInvestmentAssetsAccountRouter.post('/', async (req, res, next) => {
    try {
        let postedValues = req.body;
        let {
            fin_acc_investment_assets_account_id, // This should be included if it's not auto-incremented
  fin_acc_purchase_investment_assets_appraisal_id,
  asset_class,
  type_of_instrument,
  name_of_issuer,
  date_of_issue,
  date_of_purchase,
  fin_acc_account_map_id,
  index_acc_name_id,
  index_acc_name,
  dual_trans_acc_name_id,
  dual_trans_acc_name,
  maturity_date,
  purchase_price,
  face_value_of_investment,
  market_value,
  intrinsic_value,
  future_value_10yrs,
  interest_received,
  dividend_received,
  investment_location,
  sub_account_1,
  sub_account_2,
  sub_account_3,
  sub_account_4,
  sub_account_5,
  datepaid,
  datefor,
  description,
  timerec,
  deposit,
  folio,
  company_id,
  branch_id,
  sync_status,
  sync_date_time,
  sales_shift_id,
  operator,
  cost_center,
  link,
  currency,
  rate_to_usd,
  value,
  debit,
  credit,
  balance,
  total_balance,
  pmode,
  requester,
  confirmed,
  authorized,
  committed,
  txn_reference,
  flag,
  comment,
  fin_acc_investment_fund_details_id
        } = postedValues;

        let results = await FinAccInvestmentAssetsAccountDbOperations.postFinAccInvestmentAssetsAccount(
            fin_acc_investment_assets_account_id, // This should be included if it's not auto-incremented
            fin_acc_purchase_investment_assets_appraisal_id,
            asset_class,
            type_of_instrument,
            name_of_issuer,
            date_of_issue,
            date_of_purchase,
            fin_acc_account_map_id,
            index_acc_name_id,
            index_acc_name,
            dual_trans_acc_name_id,
            dual_trans_acc_name,
            maturity_date,
            purchase_price,
            face_value_of_investment,
            market_value,
            intrinsic_value,
            future_value_10yrs,
            interest_received,
            dividend_received,
            investment_location,
            sub_account_1,
            sub_account_2,
            sub_account_3,
            sub_account_4,
            sub_account_5,
            datepaid,
            datefor,
            description,
            timerec,
            deposit,
            folio,
            company_id,
            branch_id,
            sync_status,
            sync_date_time,
            sales_shift_id,
            operator,
            cost_center,
            link,
            currency,
            rate_to_usd,
            value,
            debit,
            credit,
            balance,
            total_balance,
            pmode,
            requester,
            confirmed,
            authorized,
            committed,
            txn_reference,
            flag,
            comment,
            fin_acc_investment_fund_details_id
        );

        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

FinAccInvestmentAssetsAccountRouter.get('/', async (req, res, next) => {
    try {
        let results = await  FinAccInvestmentAssetsAccountDbOperations.getFinAccInvestmentAssetsAccounts();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


FinAccInvestmentAssetsAccountRouter.get('/:id', async (req, res, next) => {
    try {
        let fin_acc_investment_assets_account_id = req.params.id;
        let result = await  FinAccInvestmentAssetsAccountDbOperations.getFinAccInvestmentAssetsAccountById(fin_acc_investment_assets_account_id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});




FinAccInvestmentAssetsAccountRouter.get('/joined_fund_and_assets_day_month_year/:id', async (req, res, next) => {
    try {
        let fin_acc_investment_fund_details_id = req.params.id;
        let result = await FinAccInvestmentAssetsAccountDbOperations.getFinAccInvestmentAssetsAccountJoinedInvestmentFundById(fin_acc_investment_fund_details_id);
        res.json(result);
    } catch (e) {
        console.error("Error fetching investment assets account:", e);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


FinAccInvestmentAssetsAccountRouter.get('/joined_fund_and_assets_day_month_year', async (req, res, next) => {
    try {
        let result = await FinAccInvestmentAssetsAccountDbOperations.getFinAccInvestmentAssetsAccountJoinedInvestmentFund(fin_acc_investment_fund_details_id);
        res.json(result);
    } catch (e) {
        console.error("Error fetching investment assets account:", e);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//joined_fund_and_assets_day_month_year_all_detailed_investment_assets




FinAccInvestmentAssetsAccountRouter.put('/:fin_acc_investment_assets_account_id', async (req, res) => {
    const fin_acc_investment_assets_account_id = req.params.fin_acc_investment_assets_account_id; // Ensure this matches the route
    const updatedValues = req.body;

    try {
        const result = await FinAccInvestmentAssetsAccountDbOperations.updateFinAccInvestmentAssetsAccount(fin_acc_investment_assets_account_id, updatedValues);
        return res.status(result.status).json(result);
    } catch (error) {
        console.error("Error updating customer admin chat:", error);
        return res.status(500).json({
            status: "500",
            message: "Internal Server Error",
            error: error.message,
        });
    }
});


  FinAccInvestmentAssetsAccountRouter.delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await  FinAccInvestmentAssetsAccountDbOperations.deleteFinAccInvestmentAssetsAccount(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = FinAccInvestmentAssetsAccountRouter;
