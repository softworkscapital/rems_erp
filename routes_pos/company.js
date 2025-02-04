const express = require('express');
const companyRouter = express.Router();
const companysDbOperations = require('../cruds_pos/company');

// In your route file (e.g., survey_answers.js)
companyRouter.post('/', async (req, res, next) => {
    try {
        let postedValues = req.body;
        let {
            company_id,
            company_name	
                
        } = postedValues;

        console.log(companysDbOperations); // Debugging line

        let results = await companysDbOperations.postCompany(
            company_id,
            company_name	
            
        );
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

companyRouter.get('/', async (req, res, next) => {
    try {
        let results = await companysDbOperations.getCompanys();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

companyRouter.get('/:id', async (req, res, next) => {
    try {
        let company_id = req.params.id; // Get the ID from the request parameters
        let result = await companysDbOperations.getCompanyById(company_id); // Call the DB operation
        res.json(result); // Return the result as JSON
    } catch (e) {
        console.log(e);
        res.sendStatus(500); // Send a 500 status code on error
    }
});



companyRouter.put('/:id', async (req, res, next) => {
    try {
        let company_id = req.params.id;
        let updatedValues = req.body;

        let results = await companysDbOperations.updateCompany(company_id, updatedValues);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

companyRouter.delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await companysDbOperations.deleteCompany(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = companyRouter;
