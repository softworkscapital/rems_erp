const express = require('express');
const companySetupRouter = express.Router();
const companySetupDbOperations = require('../cruds_pos/company_setup');

// Create a new company setup
companySetupRouter.post('/', async (req, res) => {
    try {
        // Extract values from request body
        const postedValues = req.body;

        // Call the database operation to insert and update
        const results = await companySetupDbOperations.postCompanySetup(
            postedValues.name,
            postedValues.address,
            postedValues.registration_number,
            postedValues.industry,
            postedValues.company_size,
            postedValues.trading_name,
            postedValues.phone_number1,
            postedValues.phone_number2,
            postedValues.email1,
            postedValues.email2,
            postedValues.mode_transaction_size,
            postedValues.number_of_transactions_per_day,
            postedValues.website,
            postedValues.bank_account_id1,
            postedValues.bank_account_id2,
            postedValues.bp_number,
            postedValues.vat_number,
            postedValues.base_currency,
            postedValues.vat_tax_rate,
            postedValues.discount_rate,
            postedValues.interest_rate,
            postedValues.physical_address,
            postedValues.portrait_logo,
            postedValues.horizontal_logo,
            postedValues.sub_logo,
            postedValues.footer,
            postedValues.salutations,
            postedValues.letterhead
        );

        // Send the response
        res.status(201).json(results); // Use 201 for resource creation
    } catch (e) {
        console.error("Error in POST route:", e);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Get all company setups
companySetupRouter.get('/', async (req, res) => {
    try {
        const results = await companySetupDbOperations.getCompanySetups();
        res.json(results);
    } catch (e) {
        console.error("Error fetching company setups:", e);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Get a company setup by ID
companySetupRouter.get('/:id', async (req, res) => {
    try {
        const company_setup_id = req.params.id;
        const result = await companySetupDbOperations.getCompanySetupById(company_setup_id);
        
        // Check if a company setup was found
        if (result.length === 0) {
            return res.status(404).json({ message: 'Company setup not found' });
        }

        res.json(result[0]); // Return the first result
    } catch (e) {
        console.error("Error fetching company setup by ID:", e);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Get company name by company ID
companySetupRouter.get('/company_name/:company_id', async (req, res) => {
    try {
        const company_id = req.params.company_id;
        const result = await companySetupDbOperations.getCompanyNameByCompanyId(company_id);

        // Check if a company was found
        if (result.length === 0) {
            return res.status(404).json({ message: 'Company not found' });
        }

        res.json(result[0]); // Return the first result
    } catch (e) {
        console.error("Error fetching company name by ID:", e);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Update a company setup by ID
companySetupRouter.put('/:id', async (req, res) => {
    try {
        const company_setup_id = req.params.id;
        const updatedValues = req.body;

        const result = await companySetupDbOperations.updateCompanySetup(
            company_setup_id,
            updatedValues.company_id,
            updatedValues.name,
            updatedValues.address,
            updatedValues.registration_number,
            updatedValues.industry,
            updatedValues.company_size,
            updatedValues.trading_name,
            updatedValues.phone_number1,
            updatedValues.phone_number2,
            updatedValues.email1,
            updatedValues.email2,
            updatedValues.mode_transaction_size,
            updatedValues.number_of_transactions_per_day,
            updatedValues.website,
            updatedValues.bank_account_id1,
            updatedValues.bank_account_id2,
            updatedValues.bp_number,
            updatedValues.vat_number,
            updatedValues.physical_address,
            updatedValues.portrait_logo,
            updatedValues.horizontal_logo,
            updatedValues.footer,
            updatedValues.salutations,
            updatedValues.letterhead
        );

        res.json(result);
    } catch (e) {
        console.error("Error updating company setup:", e);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Delete a company setup by ID
companySetupRouter.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await companySetupDbOperations.deleteCompanySetup(id);
        res.json(result);
    } catch (e) {
        console.error("Error deleting company setup:", e);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = companySetupRouter;