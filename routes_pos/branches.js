const express = require('express');
const branchRouter = express.Router();
const branchDbOperations = require('../cruds_pos/branches');

// Create a new branch
branchRouter.post('/', async (req, res) => {
    try {
        const postedValues = req.body;

        let results = await branchDbOperations.postBranch(
            postedValues.branch_name,
            postedValues.branch_location,
            postedValues.branch_location_notes,
            postedValues.branch_city,
            postedValues.latitude,
            postedValues.longitude,
            postedValues.company_id, // Ensure company_id is passed correctly
            postedValues.company_name, // Ensure company_name is passed correctly
            postedValues.enrolled_on,
            postedValues.enrolled_by,
            postedValues.phone,
            postedValues.email,
            postedValues.sync_interval,
            postedValues.branch_reorder_level_kgs,
            postedValues.auto_branch_reorder_status,
            postedValues.inventory_level,
            postedValues.inventory_storage_capacity,
            postedValues.rems_subscription_id,
            postedValues.transactions_volume_limit_kgs,
            postedValues.expiry_date
        );

        // Respond with the results, including the new branch ID
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Get all branches
branchRouter.get('/', async (req, res) => {
    try {
        let results = await branchDbOperations.getBranches();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Get a branch by ID
branchRouter.get('/:id', async (req, res) => {
    try {
        let branch_id = req.params.id;
        let result = await branchDbOperations.getBranchById(branch_id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

branchRouter.get('/company/:company_id', async (req, res, next) => {
    try {
        let company_id = req.params.company_id;
        let result = await branchDbOperations.getBranchesByCompanyId(company_id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


// Get branch name by branch ID
branchRouter.get('/branch_name/:branch_id', async (req, res) => {
    try {
        const branch_id = req.params.branch_id;
        const result = await branchDbOperations.getBranchNameByBranchId(branch_id);

        // Check if a branch was found
        if (result.length === 0) {
            return res.status(404).json({ message: 'Branch not found' });
        }

        // Return the first result
        res.json(result[0]);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
});

// Get branch names by company ID
branchRouter.get('/branch_name/company/:id', async (req, res) => {
    try {
        let company_id = req.params.id;
        let result = await branchDbOperations.getBranchNamesById(company_id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Get branch ID by branch name
branchRouter.get('/branch_id/:branch_name', async (req, res) => {
    try {
        let branch_name = req.params.branch_name;
        let result = await branchDbOperations.getBranchIdByBranchName(branch_name);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Update a branch
branchRouter.put('/:id', async (req, res) => {
    try {
        let branch_id = req.params.id;
        let updatedValues = req.body;

        let result = await branchDbOperations.updateBranch(
            branch_id,
            updatedValues.branch_name,
            updatedValues.branch_location,
            updatedValues.branch_location_notes,
            updatedValues.branch_city,
            updatedValues.latitude,
            updatedValues.longitude,
            updatedValues.company_id,
            updatedValues.company_name,
            updatedValues.enrolled_on,
            updatedValues.enrolled_by,
            updatedValues.phone,
            updatedValues.email,
            updatedValues.sync_interval,
            updatedValues.branch_reorder_level_kgs,
            updatedValues.auto_branch_reorder_status,
            updatedValues.inventory_level,
            updatedValues.inventory_storage_capacity,
            updatedValues.rems_subscription_id,
            updatedValues.transactions_volume_limit_kgs,
            updatedValues.expiry_date
        );

        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

branchRouter.put('/update_inventory/:id', async (req, res, next) => {
    try {
        const branch_id = req.params.id;
        const updatedValues = req.body;
        const inventory_level = updatedValues.inventory_level;

        // Validate input
        if (typeof inventory_level !== 'number') {
            return res.status(400).json({ message: "Invalid inventory level" });
        }

        const result = await branchDbOperations.updateBranchInventory(inventory_level, branch_id);

        // Check if any rows were updated
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Branch not found" });
        }

        res.status(200).json({ status: "200", message: "Update successful" });
    } catch (e) {
        console.error("Error:", e.message);
        res.sendStatus(500);
    }
});


// Delete a branch
branchRouter.delete('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let result = await branchDbOperations.deleteBranch(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = branchRouter;