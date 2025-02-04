const express = require('express');
const SurveyAnswerRouter = express.Router();
const SurveyAnswersDbOperations = require('../cruds/survey_answers');

// In your route file (e.g., survey_answers.js)
SurveyAnswerRouter.post('/', async (req, res, next) => {
    try {
        let postedValues = req.body;
        let {
            survey_answer_id,
            survey_question_id,
            answer_id,
            answer_scaled,
            answer_scale,
            answer_text,
            date_from,
            date_to,
            company_id,
            branch_id,
            survey_id,
        } = postedValues;

        console.log(SurveyAnswersDbOperations); // Debugging line

        let results = await SurveyAnswersDbOperations.postSurveyAnswer(
            survey_answer_id,
            survey_question_id,
            answer_id,
            answer_scaled,
            answer_scale,
            answer_text,
            date_from,
            date_to,
            company_id,
            branch_id,
            survey_id,
        );
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

SurveyAnswerRouter.get('/', async (req, res, next) => {
    try {
        let results = await SurveyAnswersDbOperations.getSurveyAnswers();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

SurveyAnswerRouter.get('/:id', async (req, res, next) => {
    try {
        let survey_answer_id = req.params.id; // Get the ID from the request parameters
        let result = await SurveyAnswersDbOperations.getSurveyAnswerById(survey_answer_id); // Call the DB operation
        res.json(result); // Return the result as JSON
    } catch (e) {
        console.log(e);
        res.sendStatus(500); // Send a 500 status code on error
    }
});



SurveyAnswerRouter.get('/summary/:survey_id/:date_from/:date_to', async (req, res, next) => {
    try {
        const survey_id = req.params.survey_id; 
        const date_from = req.params.date_from;
        const date_to = req.params.date_to;// Correctly get survey_id from URL parameters
       

        // Log the received values for debugging
        console.log({ survey_id, date_from, date_to });

        // First, get the survey details (optional)
        const surveyDetails = await SurveyAnswersDbOperations.getSurveyById(survey_id);

        // Then, get the survey answer summary
        const answerSummary = await SurveyAnswersDbOperations.getSurveyAnswerSummary(survey_id, date_from, date_to);
        
        res.json({
            survey: surveyDetails,
            answers: answerSummary
        }); // Return both survey details and answers as JSON
    } catch (e) {
        console.log(e);
        res.sendStatus(500); // Send a 500 status code on error
    }
});


SurveyAnswerRouter.put('/:id', async (req, res, next) => {
    try {
        let survey_answer_id = req.params.id;
        let updatedValues = req.body;

        let results = await SurveyAnswersDbOperations.updateSurveyAnswer(survey_answer_id, updatedValues);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

SurveyAnswerRouter.delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await SurveyAnswersDbOperations.deleteSurveyAnswer(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = SurveyAnswerRouter;
