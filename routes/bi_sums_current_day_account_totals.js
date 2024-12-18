const express = require('express');
const  CurrentDailyAccountTotalsRouter = express.Router();
const  CurrentAccountTotalsDbOperations = require('../cruds/bi_sums_current_day_account_totals');

CurrentDailyAccountTotalsRouter.post('/', async (req, res, next) => {
    try {
        let postedValues = req.body;
        let {
            bi_sum_current_day_account_total_id,
account_name,
account_id,
bi_sum_day1_sub_account_1,
bi_sum_day1_sub_account_2,
bi_sum_day1_sub_account_3,
bi_sum_day1_sub_account_4,
bi_sum_day1_sub_account_5,
bi_sum_day2_sub_account_1,
bi_sum_day2_sub_account_2,
bi_sum_day2_sub_account_3,
bi_sum_day2_sub_account_4,
bi_sum_day2_sub_account_5,
bi_sum_day3_sub_account_1,
bi_sum_day3_sub_account_2,
bi_sum_day3_sub_account_3,
bi_sum_day3_sub_account_4,
bi_sum_day3_sub_account_5,
bi_sum_day4_sub_account_1,
bi_sum_day4_sub_account_2,
bi_sum_day4_sub_account_3,
bi_sum_day4_sub_account_4,
bi_sum_day4_sub_account_5,
bi_sum_day5_sub_account_1,
bi_sum_day5_sub_account_2,
bi_sum_day5_sub_account_3,
bi_sum_day5_sub_account_4,
bi_sum_day5_sub_account_5,
bi_sum_day6_sub_account_1,
bi_sum_day6_sub_account_2,
bi_sum_day6_sub_account_3,
bi_sum_day6_sub_account_4,
bi_sum_day6_sub_account_5,
bi_sum_day7_sub_account_1,
bi_sum_day7_sub_account_2,
bi_sum_day7_sub_account_3,
bi_sum_day7_sub_account_4,
bi_sum_day7_sub_account_5,
bi_sum_day8_sub_account_1,
bi_sum_day8_sub_account_2,
bi_sum_day8_sub_account_3,
bi_sum_day8_sub_account_4,
bi_sum_day8_sub_account_5,
bi_sum_day9_sub_account_1,
bi_sum_day9_sub_account_2,
bi_sum_day9_sub_account_3,
bi_sum_day9_sub_account_4,
bi_sum_day9_sub_account_5,
bi_sum_day10_sub_account_1,
bi_sum_day10_sub_account_2,
bi_sum_day10_sub_account_3,
bi_sum_day10_sub_account_4,
bi_sum_day10_sub_account_5,
bi_sum_day11_sub_account_1,
bi_sum_day11_sub_account_2,
bi_sum_day11_sub_account_3,
bi_sum_day11_sub_account_4,
bi_sum_day11_sub_account_5,
bi_sum_day12_sub_account_1,
bi_sum_day12_sub_account_2,
bi_sum_day12_sub_account_3,
bi_sum_day12_sub_account_4,
bi_sum_day12_sub_account_5,
bi_sum_day13_sub_account_1,
bi_sum_day13_sub_account_2,
bi_sum_day13_sub_account_3,
bi_sum_day13_sub_account_4,
bi_sum_day13_sub_account_5,
bi_sum_day14_sub_account_1,
bi_sum_day14_sub_account_2,
bi_sum_day14_sub_account_3,
bi_sum_day14_sub_account_4,
bi_sum_day14_sub_account_5,
bi_sum_day15_sub_account_1,
bi_sum_day15_sub_account_2,
bi_sum_day15_sub_account_3,
bi_sum_day15_sub_account_4,
bi_sum_day15_sub_account_5,
bi_sum_day16_sub_account_1,
bi_sum_day16_sub_account_2,
bi_sum_day16_sub_account_3,
bi_sum_day16_sub_account_4,
bi_sum_day16_sub_account_5,
bi_sum_day17_sub_account_1,
bi_sum_day17_sub_account_2,
bi_sum_day17_sub_account_3,
bi_sum_day17_sub_account_4,
bi_sum_day17_sub_account_5,
bi_sum_day18_sub_account_1,
bi_sum_day18_sub_account_2,
bi_sum_day18_sub_account_3,
bi_sum_day18_sub_account_4,
bi_sum_day18_sub_account_5,
bi_sum_day19_sub_account_1,
bi_sum_day19_sub_account_2,
bi_sum_day19_sub_account_3,
bi_sum_day19_sub_account_4,
bi_sum_day19_sub_account_5,
bi_sum_day20_sub_account_1,
bi_sum_day20_sub_account_2,
bi_sum_day20_sub_account_3,
bi_sum_day20_sub_account_4,
bi_sum_day20_sub_account_5,
bi_sum_day21_sub_account_1,
bi_sum_day21_sub_account_2,
bi_sum_day21_sub_account_3,
bi_sum_day21_sub_account_4,
bi_sum_day21_sub_account_5,
bi_sum_day22_sub_account_1,
bi_sum_day22_sub_account_2,
bi_sum_day22_sub_account_3,
bi_sum_day22_sub_account_4,
bi_sum_day22_sub_account_5,
bi_sum_day23_sub_account_1,
bi_sum_day23_sub_account_2,
bi_sum_day23_sub_account_3,
bi_sum_day23_sub_account_4,
bi_sum_day23_sub_account_5,
bi_sum_day24_sub_account_1,
bi_sum_day24_sub_account_2,
bi_sum_day24_sub_account_3,
bi_sum_day24_sub_account_4,
bi_sum_day24_sub_account_5,
bi_sum_day25_sub_account_1,
bi_sum_day25_sub_account_2,
bi_sum_day25_sub_account_3,
bi_sum_day25_sub_account_4,
bi_sum_day25_sub_account_5,
bi_sum_day26_sub_account_1,
bi_sum_day26_sub_account_2,
bi_sum_day26_sub_account_3,
bi_sum_day26_sub_account_4,
bi_sum_day26_sub_account_5,
bi_sum_day27_sub_account_1,
bi_sum_day27_sub_account_2,
bi_sum_day27_sub_account_3,
bi_sum_day27_sub_account_4,
bi_sum_day27_sub_account_5,
bi_sum_day28_sub_account_1,
bi_sum_day28_sub_account_2,
bi_sum_day28_sub_account_3,
bi_sum_day28_sub_account_4,
bi_sum_day28_sub_account_5,
bi_sum_day29_sub_account_1,
bi_sum_day29_sub_account_2,
bi_sum_day29_sub_account_3,
bi_sum_day29_sub_account_4,
bi_sum_day29_sub_account_5,
bi_sum_day30_sub_account_1,
bi_sum_day30_sub_account_2,
bi_sum_day30_sub_account_3,
bi_sum_day30_sub_account_4,
bi_sum_day30_sub_account_5,
bi_sum_day31_sub_account_1,
bi_sum_day31_sub_account_2,
bi_sum_day31_sub_account_3,
bi_sum_day31_sub_account_4,
bi_sum_day31_sub_account_5,
company_id,
account_type
        } = postedValues;

        let results = await CurrentAccountTotalsDbOperations.postCurrentDailyAccountTotal (
            bi_sum_current_day_account_total_id,
account_name,
account_id,
bi_sum_day1_sub_account_1,
bi_sum_day1_sub_account_2,
bi_sum_day1_sub_account_3,
bi_sum_day1_sub_account_4,
bi_sum_day1_sub_account_5,
bi_sum_day2_sub_account_1,
bi_sum_day2_sub_account_2,
bi_sum_day2_sub_account_3,
bi_sum_day2_sub_account_4,
bi_sum_day2_sub_account_5,
bi_sum_day3_sub_account_1,
bi_sum_day3_sub_account_2,
bi_sum_day3_sub_account_3,
bi_sum_day3_sub_account_4,
bi_sum_day3_sub_account_5,
bi_sum_day4_sub_account_1,
bi_sum_day4_sub_account_2,
bi_sum_day4_sub_account_3,
bi_sum_day4_sub_account_4,
bi_sum_day4_sub_account_5,
bi_sum_day5_sub_account_1,
bi_sum_day5_sub_account_2,
bi_sum_day5_sub_account_3,
bi_sum_day5_sub_account_4,
bi_sum_day5_sub_account_5,
bi_sum_day6_sub_account_1,
bi_sum_day6_sub_account_2,
bi_sum_day6_sub_account_3,
bi_sum_day6_sub_account_4,
bi_sum_day6_sub_account_5,
bi_sum_day7_sub_account_1,
bi_sum_day7_sub_account_2,
bi_sum_day7_sub_account_3,
bi_sum_day7_sub_account_4,
bi_sum_day7_sub_account_5,
bi_sum_day8_sub_account_1,
bi_sum_day8_sub_account_2,
bi_sum_day8_sub_account_3,
bi_sum_day8_sub_account_4,
bi_sum_day8_sub_account_5,
bi_sum_day9_sub_account_1,
bi_sum_day9_sub_account_2,
bi_sum_day9_sub_account_3,
bi_sum_day9_sub_account_4,
bi_sum_day9_sub_account_5,
bi_sum_day10_sub_account_1,
bi_sum_day10_sub_account_2,
bi_sum_day10_sub_account_3,
bi_sum_day10_sub_account_4,
bi_sum_day10_sub_account_5,
bi_sum_day11_sub_account_1,
bi_sum_day11_sub_account_2,
bi_sum_day11_sub_account_3,
bi_sum_day11_sub_account_4,
bi_sum_day11_sub_account_5,
bi_sum_day12_sub_account_1,
bi_sum_day12_sub_account_2,
bi_sum_day12_sub_account_3,
bi_sum_day12_sub_account_4,
bi_sum_day12_sub_account_5,
bi_sum_day13_sub_account_1,
bi_sum_day13_sub_account_2,
bi_sum_day13_sub_account_3,
bi_sum_day13_sub_account_4,
bi_sum_day13_sub_account_5,
bi_sum_day14_sub_account_1,
bi_sum_day14_sub_account_2,
bi_sum_day14_sub_account_3,
bi_sum_day14_sub_account_4,
bi_sum_day14_sub_account_5,
bi_sum_day15_sub_account_1,
bi_sum_day15_sub_account_2,
bi_sum_day15_sub_account_3,
bi_sum_day15_sub_account_4,
bi_sum_day15_sub_account_5,
bi_sum_day16_sub_account_1,
bi_sum_day16_sub_account_2,
bi_sum_day16_sub_account_3,
bi_sum_day16_sub_account_4,
bi_sum_day16_sub_account_5,
bi_sum_day17_sub_account_1,
bi_sum_day17_sub_account_2,
bi_sum_day17_sub_account_3,
bi_sum_day17_sub_account_4,
bi_sum_day17_sub_account_5,
bi_sum_day18_sub_account_1,
bi_sum_day18_sub_account_2,
bi_sum_day18_sub_account_3,
bi_sum_day18_sub_account_4,
bi_sum_day18_sub_account_5,
bi_sum_day19_sub_account_1,
bi_sum_day19_sub_account_2,
bi_sum_day19_sub_account_3,
bi_sum_day19_sub_account_4,
bi_sum_day19_sub_account_5,
bi_sum_day20_sub_account_1,
bi_sum_day20_sub_account_2,
bi_sum_day20_sub_account_3,
bi_sum_day20_sub_account_4,
bi_sum_day20_sub_account_5,
bi_sum_day21_sub_account_1,
bi_sum_day21_sub_account_2,
bi_sum_day21_sub_account_3,
bi_sum_day21_sub_account_4,
bi_sum_day21_sub_account_5,
bi_sum_day22_sub_account_1,
bi_sum_day22_sub_account_2,
bi_sum_day22_sub_account_3,
bi_sum_day22_sub_account_4,
bi_sum_day22_sub_account_5,
bi_sum_day23_sub_account_1,
bi_sum_day23_sub_account_2,
bi_sum_day23_sub_account_3,
bi_sum_day23_sub_account_4,
bi_sum_day23_sub_account_5,
bi_sum_day24_sub_account_1,
bi_sum_day24_sub_account_2,
bi_sum_day24_sub_account_3,
bi_sum_day24_sub_account_4,
bi_sum_day24_sub_account_5,
bi_sum_day25_sub_account_1,
bi_sum_day25_sub_account_2,
bi_sum_day25_sub_account_3,
bi_sum_day25_sub_account_4,
bi_sum_day25_sub_account_5,
bi_sum_day26_sub_account_1,
bi_sum_day26_sub_account_2,
bi_sum_day26_sub_account_3,
bi_sum_day26_sub_account_4,
bi_sum_day26_sub_account_5,
bi_sum_day27_sub_account_1,
bi_sum_day27_sub_account_2,
bi_sum_day27_sub_account_3,
bi_sum_day27_sub_account_4,
bi_sum_day27_sub_account_5,
bi_sum_day28_sub_account_1,
bi_sum_day28_sub_account_2,
bi_sum_day28_sub_account_3,
bi_sum_day28_sub_account_4,
bi_sum_day28_sub_account_5,
bi_sum_day29_sub_account_1,
bi_sum_day29_sub_account_2,
bi_sum_day29_sub_account_3,
bi_sum_day29_sub_account_4,
bi_sum_day29_sub_account_5,
bi_sum_day30_sub_account_1,
bi_sum_day30_sub_account_2,
bi_sum_day30_sub_account_3,
bi_sum_day30_sub_account_4,
bi_sum_day30_sub_account_5,
bi_sum_day31_sub_account_1,
bi_sum_day31_sub_account_2,
bi_sum_day31_sub_account_3,
bi_sum_day31_sub_account_4,
bi_sum_day31_sub_account_5,
company_id,
account_type
        );

        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

CurrentDailyAccountTotalsRouter.get('/', async (req, res, next) => {
    try {
        let results = await  CurrentAccountTotalsDbOperations.getCurrentDailyAccountTotals();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

CurrentDailyAccountTotalsRouter.get('/:id', async (req, res, next) => {
    try {
        let bi_sum_current_day_account_total_id = req.params.id;
        let result = await  CurrentAccountTotalsDbOperations.getCurrentDailyAccountTotalById(bi_sum_current_day_account_total_id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

CurrentDailyAccountTotalsRouter.put('/:bi_sum_current_daily_account_total_id', async (req, res) => {
    const bi_sum_current_day_account_total_id = req.params.bi_sum_current_daily_account_total_id;

    // Validate the ID (add your validation logic as needed)
    if (!bi_sum_current_day_account_total_id) {
        return res.status(400).json({
            status: "400",
            message: "Bad Request: Missing account total ID."
        });
    }

    const updatedValues = req.body;

    // Validate the request body (add your validation logic as needed)
    if (!updatedValues || Object.keys(updatedValues).length === 0) {
        return res.status(400).json({
            status: "400",
            message: "Bad Request: No values provided for update."
        });
    }

    try {
        const result = await CurrentAccountTotalsDbOperations.updateCurrentDailyAccountTotal(bi_sum_current_day_account_total_id, updatedValues);
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


CurrentDailyAccountTotalsRouter.delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await  CurrentAccountTotalsDbOperations.deleteCurrentDailyAccountTotal(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = CurrentDailyAccountTotalsRouter;
