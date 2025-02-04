const express = require('express');
const SurveyQuestionRouter = express.Router();
const SurveyQuestionsDbOperations = require('../cruds/survey_questions');

SurveyQuestionRouter.post('/', async (req, res, next) => {
    try {
        
        let postedValues = req.body;
        let {
            survey_question_id,
            category,
            subject,
            question,
            response_type,
            status,
            frequency,
            survey_id,
            company_id,
            branch_id,
            answer_range_0_20,
            answer_range_21_40,
            answer_range_41_60,
            answer_range_61_80,
            answer_range_81_100,
        } = postedValues;

        let results = await SurveyQuestionsDbOperations.postSurveyQuestions(
            survey_question_id,
            category,
            subject,
            question,
            response_type,
            status,
            frequency,
            survey_id,
            company_id,
            branch_id,
            answer_range_0_20,
            answer_range_21_40,
            answer_range_41_60,
            answer_range_61_80,
            answer_range_81_100,
        );
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

SurveyQuestionRouter.get('/', async (req, res, next) => {
    try {
        let results = await SurveyQuestionsDbOperations.getSurveyQuestions();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

SurveyQuestionRouter.get('/:id', async (req, res, next) => {
    try {
        let survey_question_id = req.params.id; // Get the ID from the request parameters
        let result = await SurveyQuestionsDbOperations.getSurveyById(survey_question_id); // Call the correct DB operation
        res.json(result); // Return the result as JSON
    } catch (e) {
        console.log(e);
        res.sendStatus(500); // Send a 500 status code on error
    }
});


SurveyQuestionRouter.get('/survey_id/company_id/branch_id/:survey_id/:company_id/:branch_id', async (req, res, next) => {
    try {
        let survey_id = req.params.survey_id; 
        let company_id = req.params.company_id;
        let branch_id = req.params.branch_id;// Get the ID from the request parameters
        let result = await SurveyQuestionsDbOperations.getSurveyQuestionsBySurveyId(survey_id, company_id, branch_id); // Call the correct DB operation
        res.json(result); // Return the result as JSON
    } catch (e) {
        console.log(e);
        res.sendStatus(500); // Send a 500 status code on error
    }
});



SurveyQuestionRouter.get('/company/:company_id/:branch_id/:survey_id/:frequency', async (req, res, next) => {
    try {
        // Read from URL parameters
        const { company_id, branch_id, survey_id, frequency } = req.params;

        // Log the received values for debugging
        console.log({ company_id, branch_id, survey_id, frequency });

        let result = await SurveyQuestionsDbOperations.getSurveyQuestionByCompany(company_id, branch_id, survey_id, frequency);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500); // Send a 500 status code on error
    }
});


SurveyQuestionRouter.put('/:id', async (req, res, next) => {
    try {
        let survey_question_id = req.params.id;
        let updatedValues = req.body;

        let results = await SurveyQuestionsDbOperations.updateSurveyQuestion(survey_question_id, updatedValues);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

SurveyQuestionRouter.delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await SurveyQuestionsDbOperations.deleteSurveyQuestion(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = SurveyQuestionRouter;
