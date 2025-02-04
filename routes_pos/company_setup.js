const express = require('express');
const companySetupRouter = express.Router();
const companySetupDbOperations = require('../cruds_pos/company_setup');

// Create a new company setup
companySetupRouter.post('/', async (req, res, next) => {
    try {
        // Extract values from request body
        let postedValues = req.body;
        let name = postedValues.name;
        let address = postedValues.address;
        let registration_number = postedValues.registration_number;
        let industry = postedValues.industry;
        let company_size = postedValues.company_size;
        let trading_name = postedValues.trading_name;
        let phone_number1 = postedValues.phone_number1;
        let phone_number2 = postedValues.phone_number2;
        let email1 = postedValues.email1;
        let email2 = postedValues.email2;
        let mode_transaction_size = postedValues.mode_transaction_size;
        let number_of_transactions_per_day = postedValues.number_of_transactions_per_day;
        let website = postedValues.website;
        let bank_account_id1 = postedValues.bank_account_id1;
        let bank_account_id2 = postedValues.bank_account_id2;
        let bp_number = postedValues.bp_number;
        let vat_number = postedValues.vat_number;
        let base_currency = postedValues.base_currency;
        let vat_tax_rate = postedValues.vat_tax_rate;
        let discount_rate = postedValues.discount_rate;
        let interest_rate = postedValues.interest_rate;
        let physical_address = postedValues.physical_address;
        let portrait_logo = postedValues.portrait_logo;
        let horizontal_logo = postedValues.horizontal_logo;
        let sub_logo = postedValues.sub_logo;
        let footer = postedValues.footer;
        let salutations = postedValues.salutations;
        let letterhead = postedValues.letterhead;

        // Call the database operation to insert and update
        let results = await companySetupDbOperations.postCompanySetup(
            name, address, registration_number, industry,
            company_size, trading_name, phone_number1, phone_number2,
            email1, email2, mode_transaction_size, number_of_transactions_per_day,
            website, bank_account_id1, bank_account_id2, bp_number,
            vat_number, base_currency, vat_tax_rate, discount_rate, interest_rate, physical_address, portrait_logo, horizontal_logo, sub_logo,
            footer, salutations, letterhead
        );

        // Send the response
        res.json(results);
    } catch (e) {
        console.error("Error in POST route:", e);
        res.sendStatus(500);
    }
});

// Get all company setups
companySetupRouter.get('/', async (req, res, next) => {
    try {
        let results = await companySetupDbOperations.getCompanySetups();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Get a company setup by ID
companySetupRouter.get('/:id', async (req, res, next) => {
    try {
        let company_setup_id = req.params.id;
        let result = await companySetupDbOperations.getCompanySetupById(company_setup_id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


companySetupRouter.get('/company_name/:company_id', async (req, res, next) => {
    try {
        const company_id = req.params.company_id;
        const result = await companySetupDbOperations.getCompanyNameByCompanyId(company_id);

        // Check if a company was found
        if (result.length === 0) {
            return res.status(404).json({ message: 'Company not found' });
        }

        // Assuming result[0] contains the company name
        res.json(result[0]); // Return the first result
    } catch (e) {
        console.error(e); // Use console.error for error logging
        res.sendStatus(500);
    }
});


// Update a company setup by ID
companySetupRouter.put('/:id', async (req, res, next) => {
    try {
        let company_setup_id = req.params.id;
        let updatedValues = req.body;
        let company_id = updatedValues.company_id;
        let name = updatedValues.name;
        let address = updatedValues.address;
        let registration_number = updatedValues.registration_number;
        let industry = updatedValues.industry;
        let company_size = updatedValues.company_size;
        let trading_name = updatedValues.trading_name;
        let phone_number1 = updatedValues.phone_number1;
        let phone_number2 = updatedValues.phone_number2;
        let email1 = updatedValues.email1;
        let email2 = updatedValues.email2;
        let mode_transaction_size = updatedValues.mode_transaction_size;
        let number_of_transactions_per_day = updatedValues.number_of_transactions_per_day;
        let website = updatedValues.website;
        let bank_account_id1 = updatedValues.bank_account_id1;
        let bank_account_id2 = updatedValues.bank_account_id2;
        let bp_number = updatedValues.bp_number;
        let vat_number = updatedValues.vat_number;
        let base_currency = updatedValues.base_currency;
        let vat_tax_rate = updatedValues.vat_tax_rate;
        let discount_rate = updatedValues.discount_rate;
        let interest_rate = updatedValues.interest_rate;
        let physical_address = updatedValues.physical_address;
        let portrait_logo = updatedValues.portrait_logo;
        let horizontal_logo = updatedValues.horizontal_logo;
        let sub_logo = updatedValues.sub_logo;
        let footer = updatedValues.footer;
        let salutations = updatedValues.salutations;
        let letterhead = updatedValues.letterhead;

        let result = await companySetupDbOperations.updateCompanySetup(
            company_setup_id, company_id, name, address, registration_number, industry,
            company_size, trading_name, phone_number1, phone_number2,
            email1, email2, mode_transaction_size, number_of_transactions_per_day,
            website, bank_account_id1, bank_account_id2, bp_number,
            vat_number,base_currency, vat_tax_rate, discount_rate, interest_rate, physical_address, portrait_logo, horizontal_logo, sub_logo,
            footer, salutations, letterhead
        );
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// Delete a company setup by ID
companySetupRouter.delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await companySetupDbOperations.deleteCompanySetup(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = companySetupRouter;