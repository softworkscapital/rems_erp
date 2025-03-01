const express = require('express');
const shiftRouter = express.Router();
const shiftDbOperations = require('../cruds_pos/shift');

// Route to create a new shift
shiftRouter.post('/', async (req, res, next) => {
    try {
        let postedValues = req.body;
        let company_id = postedValues.company_id;
        let branch_id = postedValues.branch_id;
        let operator_id = postedValues.operator_id;
        let date_time_open = postedValues.date_time_open;
        let date_time_close = postedValues.date_time_close;
        let shift_comment = postedValues.shift_comment;
        let syncid = postedValues.syncid;

        let results = await shiftDbOperations.postShift(company_id, branch_id, operator_id, date_time_open, date_time_close, shift_comment, syncid);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Route to get all shifts
shiftRouter.get('/', async (req, res, next) => {
    try {
        let results = await shiftDbOperations.getShift();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Route to get a shift by ID
shiftRouter.get('/:id', async (req, res, next) => {
    try {
        let shift_id = req.params.id;
        let result = await shiftDbOperations.getShiftById(shift_id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// New route to get shift details by user_id, company_id, and branch_id
shiftRouter.get('/shiftdetails/:user_id/:company_id/:branch_id', async (req, res, next) => {
    try {
        let user_id = req.params.user_id;
        let company_id = req.params.company_id;
        let branch_id = req.params.branch_id;
        let results = await shiftDbOperations.getShiftsByUserAndBranch(user_id, company_id, branch_id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Route to update a shift by ID
shiftRouter.put('/:id', async (req, res, next) => {
    try {
        let shift_id = req.params.id;
        let postedValues = req.body;
        let company_id = postedValues.company_id;
        let branch_id = postedValues.branch_id;
        let operator_id = postedValues.operator_id;
        let date_time_open = postedValues.date_time_open;
        let date_time_close = postedValues.date_time_close;
        let shift_comment = postedValues.shift_comment;
        let syncid = postedValues.syncid;

        let result = await shiftDbOperations.updateShift(
            shift_id,
            company_id,
            branch_id,
            operator_id,
            date_time_open,
            date_time_close,
            shift_comment,
            syncid
        );
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Route to delete a shift by ID
shiftRouter.delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await shiftDbOperations.deleteShift(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = shiftRouter;