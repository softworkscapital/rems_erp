"use strict";

var express = require('express');

var SurveyQuestionRouter = express.Router();

var SurveyQuestionsDbOperations = require('../cruds/survey_questions');

SurveyQuestionRouter.post('/', function _callee(req, res, next) {
  var postedValues, survey_question_id, category, subject, question, response_type, status, frequency, survey_id, company_id, branch_id, answer_range_0_20, answer_range_21_40, answer_range_41_60, answer_range_61_80, answer_range_81_100, results;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          postedValues = req.body;
          survey_question_id = postedValues.survey_question_id, category = postedValues.category, subject = postedValues.subject, question = postedValues.question, response_type = postedValues.response_type, status = postedValues.status, frequency = postedValues.frequency, survey_id = postedValues.survey_id, company_id = postedValues.company_id, branch_id = postedValues.branch_id, answer_range_0_20 = postedValues.answer_range_0_20, answer_range_21_40 = postedValues.answer_range_21_40, answer_range_41_60 = postedValues.answer_range_41_60, answer_range_61_80 = postedValues.answer_range_61_80, answer_range_81_100 = postedValues.answer_range_81_100;
          _context.next = 5;
          return regeneratorRuntime.awrap(SurveyQuestionsDbOperations.postSurveyQuestions(survey_question_id, category, subject, question, response_type, status, frequency, survey_id, company_id, branch_id, answer_range_0_20, answer_range_21_40, answer_range_41_60, answer_range_61_80, answer_range_81_100));

        case 5:
          results = _context.sent;
          res.json(results);
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.sendStatus(500);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
SurveyQuestionRouter.get('/', function _callee2(req, res, next) {
  var results;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(SurveyQuestionsDbOperations.getSurveyQuestions());

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
SurveyQuestionRouter.get('/:id', function _callee3(req, res, next) {
  var survey_question_id, result;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          survey_question_id = req.params.id; // Get the ID from the request parameters

          _context3.next = 4;
          return regeneratorRuntime.awrap(SurveyQuestionsDbOperations.getSurveyById(survey_question_id));

        case 4:
          result = _context3.sent;
          // Call the correct DB operation
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
SurveyQuestionRouter.get('/survey_id/company_id/branch_id/:survey_id/:company_id/:branch_id', function _callee4(req, res, next) {
  var survey_id, company_id, branch_id, result;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          survey_id = req.params.survey_id;
          company_id = req.params.company_id;
          branch_id = req.params.branch_id; // Get the ID from the request parameters

          _context4.next = 6;
          return regeneratorRuntime.awrap(SurveyQuestionsDbOperations.getSurveyQuestionsBySurveyId(survey_id, company_id, branch_id));

        case 6:
          result = _context4.sent;
          // Call the correct DB operation
          res.json(result); // Return the result as JSON

          _context4.next = 14;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          res.sendStatus(500); // Send a 500 status code on error

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
SurveyQuestionRouter.get('/company/:company_id/:branch_id/:survey_id/:frequency', function _callee5(req, res, next) {
  var _req$params, company_id, branch_id, survey_id, frequency, result;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          // Read from URL parameters
          _req$params = req.params, company_id = _req$params.company_id, branch_id = _req$params.branch_id, survey_id = _req$params.survey_id, frequency = _req$params.frequency; // Log the received values for debugging

          console.log({
            company_id: company_id,
            branch_id: branch_id,
            survey_id: survey_id,
            frequency: frequency
          });
          _context5.next = 5;
          return regeneratorRuntime.awrap(SurveyQuestionsDbOperations.getSurveyQuestionByCompany(company_id, branch_id, survey_id, frequency));

        case 5:
          result = _context5.sent;
          res.json(result);
          _context5.next = 13;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          res.sendStatus(500); // Send a 500 status code on error

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
SurveyQuestionRouter.put('/:id', function _callee6(req, res, next) {
  var survey_question_id, updatedValues, results;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          survey_question_id = req.params.id;
          updatedValues = req.body;
          _context6.next = 5;
          return regeneratorRuntime.awrap(SurveyQuestionsDbOperations.updateSurveyQuestion(survey_question_id, updatedValues));

        case 5:
          results = _context6.sent;
          res.json(results);
          _context6.next = 13;
          break;

        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);
          res.sendStatus(500);

        case 13:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
SurveyQuestionRouter["delete"]('/:id', function _callee7(req, res, next) {
  var id, result;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          id = req.params.id;
          _context7.next = 4;
          return regeneratorRuntime.awrap(SurveyQuestionsDbOperations.deleteSurveyQuestion(id));

        case 4:
          result = _context7.sent;
          res.json(result);
          _context7.next = 12;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          console.log(_context7.t0);
          res.sendStatus(500);

        case 12:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
module.exports = SurveyQuestionRouter;