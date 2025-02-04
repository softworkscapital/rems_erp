"use strict";

var express = require('express');

var SurveyAnswerRouter = express.Router();

var SurveyAnswersDbOperations = require('../cruds/survey_answers'); // In your route file (e.g., survey_answers.js)


SurveyAnswerRouter.post('/', function _callee(req, res, next) {
  var postedValues, survey_answer_id, survey_question_id, answer_id, answer_scaled, answer_scale, answer_text, date_from, date_to, company_id, branch_id, survey_id, results;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          postedValues = req.body;
          survey_answer_id = postedValues.survey_answer_id, survey_question_id = postedValues.survey_question_id, answer_id = postedValues.answer_id, answer_scaled = postedValues.answer_scaled, answer_scale = postedValues.answer_scale, answer_text = postedValues.answer_text, date_from = postedValues.date_from, date_to = postedValues.date_to, company_id = postedValues.company_id, branch_id = postedValues.branch_id, survey_id = postedValues.survey_id;
          console.log(SurveyAnswersDbOperations); // Debugging line

          _context.next = 6;
          return regeneratorRuntime.awrap(SurveyAnswersDbOperations.postSurveyAnswer(survey_answer_id, survey_question_id, answer_id, answer_scaled, answer_scale, answer_text, date_from, date_to, company_id, branch_id, survey_id));

        case 6:
          results = _context.sent;
          res.json(results);
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.sendStatus(500);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
SurveyAnswerRouter.get('/', function _callee2(req, res, next) {
  var results;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(SurveyAnswersDbOperations.getSurveyAnswers());

        case 3:
          results = _context2.sent;
          res.json(results);
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.sendStatus(500);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
SurveyAnswerRouter.get('/:id', function _callee3(req, res, next) {
  var survey_answer_id, result;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          survey_answer_id = req.params.id; // Get the ID from the request parameters

          _context3.next = 4;
          return regeneratorRuntime.awrap(SurveyAnswersDbOperations.getSurveyAnswerById(survey_answer_id));

        case 4:
          result = _context3.sent;
          // Call the DB operation
          res.json(result); // Return the result as JSON

          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          res.sendStatus(500); // Send a 500 status code on error

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
SurveyAnswerRouter.get('/summary/:survey_id/:date_from/:date_to', function _callee4(req, res, next) {
  var survey_id, date_from, date_to, surveyDetails, answerSummary;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          survey_id = req.params.survey_id;
          date_from = req.params.date_from;
          date_to = req.params.date_to; // Correctly get survey_id from URL parameters
          // Log the received values for debugging

          console.log({
            survey_id: survey_id,
            date_from: date_from,
            date_to: date_to
          }); // First, get the survey details (optional)

          _context4.next = 7;
          return regeneratorRuntime.awrap(SurveyAnswersDbOperations.getSurveyById(survey_id));

        case 7:
          surveyDetails = _context4.sent;
          _context4.next = 10;
          return regeneratorRuntime.awrap(SurveyAnswersDbOperations.getSurveyAnswerSummary(survey_id, date_from, date_to));

        case 10:
          answerSummary = _context4.sent;
          res.json({
            survey: surveyDetails,
            answers: answerSummary
          }); // Return both survey details and answers as JSON

          _context4.next = 18;
          break;

        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          res.sendStatus(500); // Send a 500 status code on error

        case 18:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 14]]);
});
SurveyAnswerRouter.put('/:id', function _callee5(req, res, next) {
  var survey_answer_id, updatedValues, results;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          survey_answer_id = req.params.id;
          updatedValues = req.body;
          _context5.next = 5;
          return regeneratorRuntime.awrap(SurveyAnswersDbOperations.updateSurveyAnswer(survey_answer_id, updatedValues));

        case 5:
          results = _context5.sent;
          res.json(results);
          _context5.next = 13;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          res.sendStatus(500);

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
SurveyAnswerRouter["delete"]('/:id', function _callee6(req, res, next) {
  var id, result;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          _context6.next = 4;
          return regeneratorRuntime.awrap(SurveyAnswersDbOperations.deleteSurveyAnswer(id));

        case 4:
          result = _context6.sent;
          res.json(result);
          _context6.next = 12;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);
          res.sendStatus(500);

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
module.exports = SurveyAnswerRouter;