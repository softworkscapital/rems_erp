const express = require('express');
const  MonthlyAccountTotalsRouter = express.Router();
const  MonthlyAccountTotalsDbOperations = require('../cruds/bi_sums_monthly_account_totals');

MonthlyAccountTotalsRouter.post('/', async (req, res, next) => {
    try {
        let postedValues = req.body;

        // Log the entire posted values to see what's coming in
        console.log("Posted values:", postedValues);

        let {
            bi_sum_monthly_account_total_id,
            account_name,
            account_id,
            bi_sum_jan_sub_account_1,
            bi_sum_jan_sub_account_2,
            bi_sum_jan_sub_account_3,
            bi_sum_jan_sub_account_4,
            bi_sum_jan_sub_account_5,
            bi_sum_feb_sub_account_1,
            bi_sum_feb_sub_account_2,
            bi_sum_feb_sub_account_3,
            bi_sum_feb_sub_account_4,
            bi_sum_feb_sub_account_5,
            bi_sum_mar_sub_account_1,
            bi_sum_mar_sub_account_2,
            bi_sum_mar_sub_account_3,
            bi_sum_mar_sub_account_4,
            bi_sum_mar_sub_account_5,
            bi_sum_apr_sub_account_1,
            bi_sum_apr_sub_account_2,
            bi_sum_apr_sub_account_3,
            bi_sum_apr_sub_account_4,
            bi_sum_apr_sub_account_5,
            bi_sum_may_sub_account_1,
            bi_sum_may_sub_account_2,
            bi_sum_may_sub_account_3,
            bi_sum_may_sub_account_4,
            bi_sum_may_sub_account_5,
            bi_sum_jun_sub_account_1,
            bi_sum_jun_sub_account_2,
            bi_sum_jun_sub_account_3,
            bi_sum_jun_sub_account_4,
            bi_sum_jun_sub_account_5,
            bi_sum_jul_sub_account_1,
            bi_sum_jul_sub_account_2,
            bi_sum_jul_sub_account_3,
            bi_sum_jul_sub_account_4,
            bi_sum_jul_sub_account_5,
            bi_sum_aug_sub_account_1,
            bi_sum_aug_sub_account_2,
            bi_sum_aug_sub_account_3,
            bi_sum_aug_sub_account_4,
            bi_sum_aug_sub_account_5,
            bi_sum_sep_sub_account_1,
            bi_sum_sep_sub_account_2,
            bi_sum_sep_sub_account_3,
            bi_sum_sep_sub_account_4,
            bi_sum_sep_sub_account_5,
            bi_sum_oct_sub_account_1,
            bi_sum_oct_sub_account_2,
            bi_sum_oct_sub_account_3,
            bi_sum_oct_sub_account_4,
            bi_sum_oct_sub_account_5,
            bi_sum_nov_sub_account_1,
            bi_sum_nov_sub_account_2,
            bi_sum_nov_sub_account_3,
            bi_sum_nov_sub_account_4,
            bi_sum_nov_sub_account_5,
            bi_sum_dec_sub_account_1,
            bi_sum_dec_sub_account_2,
            bi_sum_dec_sub_account_3,
            bi_sum_dec_sub_account_4,
            bi_sum_dec_sub_account_5,
            company_id,
            account_type
        } = postedValues;

        // Log the structured values that will be sent to the database
        console.log("Values to be posted to the database:", {
            bi_sum_monthly_account_total_id,
            account_name,
            account_id,
            bi_sum_jan_sub_account_1,
            bi_sum_jan_sub_account_2,
            bi_sum_jan_sub_account_3,
            bi_sum_jan_sub_account_4,
            bi_sum_jan_sub_account_5,
            bi_sum_feb_sub_account_1,
            bi_sum_feb_sub_account_2,
            bi_sum_feb_sub_account_3,
            bi_sum_feb_sub_account_4,
            bi_sum_feb_sub_account_5,
            bi_sum_mar_sub_account_1,
            bi_sum_mar_sub_account_2,
            bi_sum_mar_sub_account_3,
            bi_sum_mar_sub_account_4,
            bi_sum_mar_sub_account_5,
            bi_sum_apr_sub_account_1,
            bi_sum_apr_sub_account_2,
            bi_sum_apr_sub_account_3,
            bi_sum_apr_sub_account_4,
            bi_sum_apr_sub_account_5,
            bi_sum_may_sub_account_1,
            bi_sum_may_sub_account_2,
            bi_sum_may_sub_account_3,
            bi_sum_may_sub_account_4,
            bi_sum_may_sub_account_5,
            bi_sum_jun_sub_account_1,
            bi_sum_jun_sub_account_2,
            bi_sum_jun_sub_account_3,
            bi_sum_jun_sub_account_4,
            bi_sum_jun_sub_account_5,
            bi_sum_jul_sub_account_1,
            bi_sum_jul_sub_account_2,
            bi_sum_jul_sub_account_3,
            bi_sum_jul_sub_account_4,
            bi_sum_jul_sub_account_5,
            bi_sum_aug_sub_account_1,
            bi_sum_aug_sub_account_2,
            bi_sum_aug_sub_account_3,
            bi_sum_aug_sub_account_4,
            bi_sum_aug_sub_account_5,
            bi_sum_sep_sub_account_1,
            bi_sum_sep_sub_account_2,
            bi_sum_sep_sub_account_3,
            bi_sum_sep_sub_account_4,
            bi_sum_sep_sub_account_5,
            bi_sum_oct_sub_account_1,
            bi_sum_oct_sub_account_2,
            bi_sum_oct_sub_account_3,
            bi_sum_oct_sub_account_4,
            bi_sum_oct_sub_account_5,
            bi_sum_nov_sub_account_1,
            bi_sum_nov_sub_account_2,
            bi_sum_nov_sub_account_3,
            bi_sum_nov_sub_account_4,
            bi_sum_nov_sub_account_5,
            bi_sum_dec_sub_account_1,
            bi_sum_dec_sub_account_2,
            bi_sum_dec_sub_account_3,
            bi_sum_dec_sub_account_4,
            bi_sum_dec_sub_account_5,
            company_id,
            account_type
        });

        let results = await MonthlyAccountTotalsDbOperations.postMonthlyAccountTotal(
            bi_sum_monthly_account_total_id,
            account_name,
            account_id,
            bi_sum_jan_sub_account_1,
            bi_sum_jan_sub_account_2,
            bi_sum_jan_sub_account_3,
            bi_sum_jan_sub_account_4,
            bi_sum_jan_sub_account_5,
            bi_sum_feb_sub_account_1,
            bi_sum_feb_sub_account_2,
            bi_sum_feb_sub_account_3,
            bi_sum_feb_sub_account_4,
            bi_sum_feb_sub_account_5,
            bi_sum_mar_sub_account_1,
            bi_sum_mar_sub_account_2,
            bi_sum_mar_sub_account_3,
            bi_sum_mar_sub_account_4,
            bi_sum_mar_sub_account_5,
            bi_sum_apr_sub_account_1,
            bi_sum_apr_sub_account_2,
            bi_sum_apr_sub_account_3,
            bi_sum_apr_sub_account_4,
            bi_sum_apr_sub_account_5,
            bi_sum_may_sub_account_1,
            bi_sum_may_sub_account_2,
            bi_sum_may_sub_account_3,
            bi_sum_may_sub_account_4,
            bi_sum_may_sub_account_5,
            bi_sum_jun_sub_account_1,
            bi_sum_jun_sub_account_2,
            bi_sum_jun_sub_account_3,
            bi_sum_jun_sub_account_4,
            bi_sum_jun_sub_account_5,
            bi_sum_jul_sub_account_1,
            bi_sum_jul_sub_account_2,
            bi_sum_jul_sub_account_3,
            bi_sum_jul_sub_account_4,
            bi_sum_jul_sub_account_5,
            bi_sum_aug_sub_account_1,
            bi_sum_aug_sub_account_2,
            bi_sum_aug_sub_account_3,
            bi_sum_aug_sub_account_4,
            bi_sum_aug_sub_account_5,
            bi_sum_sep_sub_account_1,
            bi_sum_sep_sub_account_2,
            bi_sum_sep_sub_account_3,
            bi_sum_sep_sub_account_4,
            bi_sum_sep_sub_account_5,
            bi_sum_oct_sub_account_1,
            bi_sum_oct_sub_account_2,
            bi_sum_oct_sub_account_3,
            bi_sum_oct_sub_account_4,
            bi_sum_oct_sub_account_5,
            bi_sum_nov_sub_account_1,
            bi_sum_nov_sub_account_2,
            bi_sum_nov_sub_account_3,
            bi_sum_nov_sub_account_4,
            bi_sum_nov_sub_account_5,
            bi_sum_dec_sub_account_1,
            bi_sum_dec_sub_account_2,
            bi_sum_dec_sub_account_3,
            bi_sum_dec_sub_account_4,
            bi_sum_dec_sub_account_5,
            company_id,
            account_type
        );

        res.json(results); // Return the results of the database operation
    } catch (e) {
        console.log(e);
        res.sendStatus(500); // Send a 500 status code on error
    }
});

MonthlyAccountTotalsRouter.get('/', async (req, res, next) => {
    try {
        let results = await  MonthlyAccountTotalsDbOperations.getMonthlyAccountTotals();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

MonthlyAccountTotalsRouter.get('/:id', async (req, res, next) => {
    try {
        let bi_sum_monthly_account_total_id = req.params.id;
        let result = await  MonthlyAccountTotalsDbOperations.getMonthlyAccountTotalById(bi_sum_monthly_account_total_id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

MonthlyAccountTotalsRouter.put('/:bi_sum_monthly_account_total_id', async (req, res) => {
    const bi_sum_monthly_account_total_id = req.params.bi_sum_monthly_account_total_id; // Ensure this matches the route
    const updatedValues = req.body;

    try {
        const result = await MonthlyAccountTotalsDbOperations.updateMonthlyAccountTotal(bi_sum_monthly_account_total_id, updatedValues);
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


MonthlyAccountTotalsRouter.delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await  MonthlyAccountTotalsDbOperations.deleteMonthlyAccountTotal(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = MonthlyAccountTotalsRouter;
