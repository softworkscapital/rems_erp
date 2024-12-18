const express = require('express');
const  FinAccPurchaseInvestmentAssetsAppraisalRouter = express.Router();
const  FinAccPurchaseInvestmentAssetsAppraisalDbOperations = require('../cruds/fin_acc_purchase_investment_assets_appraisal');




FinAccPurchaseInvestmentAssetsAppraisalRouter.post('/', async (req, res, next) => {
    try {
        let postedValues = req.body;
        let {
            fin_acc_purchase_investment_assets_appraisal_id,
            fin_acc_investment_assets_account_id,
            asset_class,
            type_of_instrument,
            name_of_issuer,
            date_of_issue,
            date_of_purchase,
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
            fin_acc_investment_fund_details_id,
            roi,
            profitability_index,
            payback_period,
            irr,
            npv,
            payback,
            field_discount_rate,
            discounted_cashflow,
            appraisal_recommendations_1,
            appraisal_recommendations_2,
            appraisal_recommendations_3,
            key_notes,
            investment_assessment_report_url_1,
            investment_assessment_report_url_2,
            investment_assessment_report_url_3,
            investment_assessment_report_url_4,
            investment_assessment_report_url_5,
            investment_assessment_report_notes_1,
            investment_assessment_report_notes_2,
            investment_assessment_report_notes_3,
            investment_assessment_report_notes_4,
            investment_assessment_report_notes_5
        } = postedValues;

        // Log the fin_acc_investment_assets_account_id
        console.log('fin_acc_investment_assets_account_id:', fin_acc_investment_assets_account_id);

        let results = await FinAccPurchaseInvestmentAssetsAppraisalDbOperations.postFinAccPurchaseInvestmentAssetsAppraisal(
            fin_acc_purchase_investment_assets_appraisal_id,
            fin_acc_investment_assets_account_id,
            asset_class,
            type_of_instrument,
            name_of_issuer,
            date_of_issue,
            date_of_purchase,
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
            fin_acc_investment_fund_details_id,
            roi,
            profitability_index,
            payback_period,
            irr,
            npv,
            payback,
            field_discount_rate,
            discounted_cashflow,
            appraisal_recommendations_1,
            appraisal_recommendations_2,
            appraisal_recommendations_3,
            key_notes,
            investment_assessment_report_url_1,
            investment_assessment_report_url_2,
            investment_assessment_report_url_3,
            investment_assessment_report_url_4,
            investment_assessment_report_url_5,
            investment_assessment_report_notes_1,
            investment_assessment_report_notes_2,
            investment_assessment_report_notes_3,
            investment_assessment_report_notes_4,
            investment_assessment_report_notes_5
        );

        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

FinAccPurchaseInvestmentAssetsAppraisalRouter.get('/', async (req, res, next) => {
    try {
        let results = await FinAccPurchaseInvestmentAssetsAppraisalDbOperations.getFinAccPurchaseInvestmentAssetsAppraisals();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

FinAccPurchaseInvestmentAssetsAppraisalRouter.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        let results = await FinAccPurchaseInvestmentAssetsAppraisalDbOperations.getFinAccPurchaseInvestmentAssetsAppraisalById(id);
        if (results.length === 0) {
            return res.status(404).json({ message: 'Appraisal not found' });
        }
        res.json(results[0]);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});



FinAccPurchaseInvestmentAssetsAppraisalRouter.put('/committed/:id', async (req, res, next) => {
    try {
        let fin_acc_purchase_investment_assets_appraisal_id = req.params.id;
        let user_id = req.body.user_id; // Assuming the user ID is sent in the request body

        // Check if user_id is provided
        if (!user_id) {
            return res.status(400).json({ message: "User ID is required" });
        }

        // Call the update function
        let result = await FinAccPurchaseInvestmentAssetsAppraisalDbOperations.updateCommittedAssetAppraisal(fin_acc_purchase_investment_assets_appraisal_id, user_id);
        res.json(result);
    } catch (e) {
        console.error("Error in updating committed field:", e);
        res.sendStatus(500);
    }
});



FinAccPurchaseInvestmentAssetsAppraisalRouter.put('/authorized/:id', async (req, res, next) => {
    try {
        let fin_acc_purchase_investment_assets_appraisal_id = req.params.id;
        let user_id = req.body.user_id; // Assuming the user ID is sent in the request body

        // Check if user_id is provided
        if (!user_id) {
            return res.status(400).json({ message: "User ID is required" });
        }

        // Call the update function
        let result = await FinAccPurchaseInvestmentAssetsAppraisalDbOperations.updateAuthorizedAssetAppraisal(fin_acc_purchase_investment_assets_appraisal_id, user_id);
        res.json(result);
    } catch (e) {
        console.error("Error in updating committed field:", e);
        res.sendStatus(500);
    }
});



FinAccPurchaseInvestmentAssetsAppraisalRouter.put('/confirmed/:id', async (req, res, next) => {
    try {
        let fin_acc_purchase_investment_assets_appraisal_id = req.params.id;
        let user_id = req.body.user_id; // Assuming the user ID is sent in the request body

        // Check if user_id is provided
        if (!user_id) {
            return res.status(400).json({ message: "User ID is required" });
        }

        // Call the update function
        let result = await FinAccPurchaseInvestmentAssetsAppraisalDbOperations.updateConfirmedAssetAppraisal(fin_acc_purchase_investment_assets_appraisal_id, user_id);
        res.json(result);
    } catch (e) {
        console.error("Error in updating committed field:", e);
        res.sendStatus(500);
    }
});






FinAccPurchaseInvestmentAssetsAppraisalRouter.put('/:fin_acc_purchase_investment_assets_appraisal_id', async (req, res) => {
    const fin_acc_purchase_investment_assets_appraisal_id = req.params.fin_acc_purchase_investment_assets_appraisal_id; // Ensure this matches the route
    const updatedValues = req.body;

    try {
        const result = await FinAccPurchaseInvestmentAssetsAppraisalDbOperations.updateFinAccPurchaseInvestmentAssetsAppraisal(fin_acc_purchase_investment_assets_appraisal_id, updatedValues);
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


  FinAccPurchaseInvestmentAssetsAppraisalRouter.delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await  FinAccPurchaseInvestmentAssetsAppraisalDbOperations.deleteFinAccPurchaseInvestmentAssetsAppraisal(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = FinAccPurchaseInvestmentAssetsAppraisalRouter;
