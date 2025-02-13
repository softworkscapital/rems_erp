const express = require('express');
const SyncRouter = express.Router();
const syncCrud = require('../cruds_pos/sync'); // Import your syncCrud file

// Middleware to ensure body is parsed as JSON
SyncRouter.use(express.json());

// Route for sale_list_item
SyncRouter.get('/sale_list_item', async (req, res) => {
    try {
        const { lastId, companyId, branchId } = req.query; // Expecting lastId, companyId, and branchId in the query parameters
        let result = await syncCrud.getSaleListItem(lastId, companyId, branchId);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Route for products_definition
SyncRouter.get('/products_definition', async (req, res) => {
    try {
        const { lastId, companyId, branchId } = req.query; // Expecting lastId, companyId, and branchId in the query parameters
        let result = await syncCrud.getProductsDefinition(lastId, companyId, branchId);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Route for payments
SyncRouter.get('/payments', async (req, res) => {
    try {
        const { lastId, companyId, branchId } = req.query; // Expecting lastId, companyId, and branchId in the query parameters
        let result = await syncCrud.getPayments(lastId, companyId, branchId);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Route for inventory_mgt
SyncRouter.get('/inventory_mgt', async (req, res) => {
    try {
        const { lastId, companyId, branchId } = req.query; // Expecting lastId, companyId, and branchId in the query parameters
        let result = await syncCrud.getInventoryManagement(lastId, companyId, branchId);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Route for currency
SyncRouter.get('/currency', async (req, res) => {
    try {
        const { lastId, companyId, branchId } = req.query; // Expecting lastId, companyId, and branchId in the query parameters
        let result = await syncCrud.getCurrency(lastId, companyId, branchId);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Route for shift_balances
SyncRouter.get('/shift_balances', async (req, res) => {
    try {
        const { lastId, companyId, branchId } = req.query; // Expecting lastId, companyId, and branchId in the query parameters
        let result = await syncCrud.getShiftBalances(lastId, companyId, branchId);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Route for company_setup
SyncRouter.get('/company_setup', async (req, res) => {
    try {
        const { lastId, companyId, branchId } = req.query; // Expecting lastId, companyId, and branchId in the query parameters
        let result = await syncCrud.getCompanySetup(lastId, companyId, branchId);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Route for branches
SyncRouter.get('/branches', async (req, res) => {
    try {
        const { lastId, companyId, branchId } = req.query; // Expecting lastId, companyId, and branchId in the query parameters
        let result = await syncCrud.getBranches(lastId, companyId, branchId);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

SyncRouter.get('/users', async (req, res) => {
    try {
        const { lastId, companyId, branchId } = req.query; // Expecting lastId, companyId, and branchId in the query parameters
        let result = await syncCrud.getUsers(lastId, companyId, branchId);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = SyncRouter;