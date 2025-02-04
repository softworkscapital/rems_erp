const express = require('express');
const SurveyRouter = express.Router();
const SurveysDbOperations = require('../cruds/surveys');

// In your route file (e.g., survey_answers.js)
SurveyRouter.post('/', async (req, res, next) => {
    try {
        let postedValues = req.body;
        let {
            survey_id,
    survey_name,
    survey_description,
    company_id,
    branch_id	
        } = postedValues;

        console.log(SurveysDbOperations); // Debugging line

        let results = await SurveysDbOperations.postSurvey(
            survey_id,
    survey_name,
    survey_description,
    company_id,
    branch_id	
        );
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

SurveyRouter.get('/', async (req, res, next) => {
    try {
        let results = await SurveysDbOperations.getSurveys();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

SurveyRouter.get('/:id', async (req, res, next) => {
    try {
        let survey_id = req.params.id; // Get the ID from the request parameters
        let result = await SurveysDbOperations.getSurveyById(survey_id); // Call the DB operation
        res.json(result); // Return the result as JSON
    } catch (e) {
        console.log(e);
        res.sendStatus(500); // Send a 500 status code on error
    }
});



SurveyRouter.put('/:id', async (req, res, next) => {
    try {
        let survey_id = req.params.id;
        let updatedValues = req.body;

        let results = await SurveysDbOperations.updateSurvey(survey_id, updatedValues);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

SurveyRouter.delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await SurveysDbOperations.deleteSurvey(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = SurveyRouter;
