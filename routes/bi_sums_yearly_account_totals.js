const express = require('express');
const YearlyAccountTotalsRouter = express.Router();
const YearlyAccountTotalsDbOperations = require('../cruds/bi_sums_yearly_account_totals');

// POST: Create a new yearly account total
YearlyAccountTotalsRouter.post('/', async (req, res, next) => {
    try {
        const {
            bi_sum_yearly_account_total_id,
account_name,
account_id,
bi_sum_2021_sub_account_1,
bi_sum_2021_sub_account_2,
bi_sum_2021_sub_account_3,
bi_sum_2021_sub_account_4,
bi_sum_2021_sub_account_5,
bi_sum_2022_sub_account_1,
bi_sum_2022_sub_account_2,
bi_sum_2022_sub_account_3,
bi_sum_2022_sub_account_4,
bi_sum_2022_sub_account_5,
bi_sum_2023_sub_account_1,
bi_sum_2023_sub_account_2,
bi_sum_2023_sub_account_3,
bi_sum_2023_sub_account_4,
bi_sum_2023_sub_account_5,
bi_sum_2024_sub_account_1,
bi_sum_2024_sub_account_2,
bi_sum_2024_sub_account_3,
bi_sum_2024_sub_account_4,
bi_sum_2024_sub_account_5,
bi_sum_2025_sub_account_1,
bi_sum_2025_sub_account_2,
bi_sum_2025_sub_account_3,
bi_sum_2025_sub_account_4,
bi_sum_2025_sub_account_5,
bi_sum_2026_sub_account_1,
bi_sum_2026_sub_account_2,
bi_sum_2026_sub_account_3,
bi_sum_2026_sub_account_4,
bi_sum_2026_sub_account_5,
bi_sum_2027_sub_account_1,
bi_sum_2027_sub_account_2,
bi_sum_2027_sub_account_3,
bi_sum_2027_sub_account_4,
bi_sum_2027_sub_account_5,
bi_sum_2028_sub_account_1,
bi_sum_2028_sub_account_2,
bi_sum_2028_sub_account_3,
bi_sum_2028_sub_account_4,
bi_sum_2028_sub_account_5,
bi_sum_2029_sub_account_1,
bi_sum_2029_sub_account_2,
bi_sum_2029_sub_account_3,
bi_sum_2029_sub_account_4,
bi_sum_2029_sub_account_5,
bi_sum_2030_sub_account_1,
bi_sum_2030_sub_account_2,
bi_sum_2030_sub_account_3,
bi_sum_2030_sub_account_4,
bi_sum_2030_sub_account_5,
company_id,
account_type
        } = req.body;

        let results = await YearlyAccountTotalsDbOperations.postYearlyAccountTotal(
            bi_sum_yearly_account_total_id,
            account_name,
            account_id,
            bi_sum_2021_sub_account_1,
            bi_sum_2021_sub_account_2,
            bi_sum_2021_sub_account_3,
            bi_sum_2021_sub_account_4,
            bi_sum_2021_sub_account_5,
            bi_sum_2022_sub_account_1,
            bi_sum_2022_sub_account_2,
            bi_sum_2022_sub_account_3,
            bi_sum_2022_sub_account_4,
            bi_sum_2022_sub_account_5,
            bi_sum_2023_sub_account_1,
            bi_sum_2023_sub_account_2,
            bi_sum_2023_sub_account_3,
            bi_sum_2023_sub_account_4,
            bi_sum_2023_sub_account_5,
            bi_sum_2024_sub_account_1,
            bi_sum_2024_sub_account_2,
            bi_sum_2024_sub_account_3,
            bi_sum_2024_sub_account_4,
            bi_sum_2024_sub_account_5,
            bi_sum_2025_sub_account_1,
            bi_sum_2025_sub_account_2,
            bi_sum_2025_sub_account_3,
            bi_sum_2025_sub_account_4,
            bi_sum_2025_sub_account_5,
            bi_sum_2026_sub_account_1,
            bi_sum_2026_sub_account_2,
            bi_sum_2026_sub_account_3,
            bi_sum_2026_sub_account_4,
            bi_sum_2026_sub_account_5,
            bi_sum_2027_sub_account_1,
            bi_sum_2027_sub_account_2,
            bi_sum_2027_sub_account_3,
            bi_sum_2027_sub_account_4,
            bi_sum_2027_sub_account_5,
            bi_sum_2028_sub_account_1,
            bi_sum_2028_sub_account_2,
            bi_sum_2028_sub_account_3,
            bi_sum_2028_sub_account_4,
            bi_sum_2028_sub_account_5,
            bi_sum_2029_sub_account_1,
            bi_sum_2029_sub_account_2,
            bi_sum_2029_sub_account_3,
            bi_sum_2029_sub_account_4,
            bi_sum_2029_sub_account_5,
            bi_sum_2030_sub_account_1,
            bi_sum_2030_sub_account_2,
            bi_sum_2030_sub_account_3,
            bi_sum_2030_sub_account_4,
            bi_sum_2030_sub_account_5,
            company_id,
            account_type
        );

        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// GET: Retrieve all yearly account totals
YearlyAccountTotalsRouter.get('/', async (req, res, next) => {
    try {
        let results = await YearlyAccountTotalsDbOperations.getYearlyAccountTotals();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});



YearlyAccountTotalsRouter.get('/get_joined_yearly_account_map_info', async (req, res, next) => {
    try {
        let results = await YearlyAccountTotalsDbOperations.getYearlyAccountTotalsJoinedByAccMapAccInfo();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});








// GET: Retrieve a yearly account total by ID
YearlyAccountTotalsRouter.get('/:id', async (req, res, next) => {
    try {
        let bi_sum_yearly_account_total_id = req.params.id;
        let result = await YearlyAccountTotalsDbOperations.getYearlyAccountTotalById(bi_sum_yearly_account_total_id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// PUT: Update a yearly account total by ID
YearlyAccountTotalsRouter.put('/:id', async (req, res) => {
    const bi_sum_monthly_account_total_id  = req.params.id; // Corrected to use 'id'
    const updatedValues = req.body;

    try {
        const result = await YearlyAccountTotalsDbOperations.updateYearlyAccountTotal(bi_sum_monthly_account_total_id , updatedValues);
        return res.status(result.status).json(result);
    } catch (error) {
        console.error("Error updating yearly account total:", error);
        return res.status(500).json({
            status: "500",
            message: "Internal Server Error",
            error: error.message,
        });
    }
});

// DELETE: Remove a yearly account total by ID
YearlyAccountTotalsRouter.delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await YearlyAccountTotalsDbOperations.deleteYearlyAccountTotal(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = YearlyAccountTotalsRouter;