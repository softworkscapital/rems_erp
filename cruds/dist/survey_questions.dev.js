"use strict";

require('dotenv').config();

var pool = require('./poolfile');

var crudsObj = {};

crudsObj.postSurveyQuestions = function (survey_question_id, category, subject, question, response_type, status, frequency, survey_id, company_id, branch_id, answer_range_0_20, answer_range_21_40, answer_range_41_60, answer_range_61_80, answer_range_81_100) {
  return new Promise(function (resolve, reject) {
    pool.query("INSERT INTO survey_questions (\n               category,\n               subject,\n               question,\n               response_type,\n               status,\n               frequency,\n               survey_id,\n               company_id,\n               branch_id,\n               answer_range_0_20,\n               answer_range_21_40,\n               answer_range_41_60,\n               answer_range_61_80,\n               answer_range_81_100\n            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [category, subject, question, response_type, status, frequency, survey_id, company_id, branch_id, answer_range_0_20, answer_range_21_40, answer_range_41_60, answer_range_61_80, answer_range_81_100], function (err, result) {
      if (err) {
        return reject(err);
      }

      return resolve({
        status: '200',
        message: 'saving successful'
      });
    });
  });
};

crudsObj.getSurveyQuestions = function () {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM  survey_questions', function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

crudsObj.getSurveyById = function (survey_question_id) {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM survey_questions WHERE survey_question_id = ?', [survey_question_id], function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

crudsObj.getSurveyQuestionsBySurveyId = function (survey_id, company_id, branch_id) {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT *ccsd FROM survey_questions WHERE survey_id = ? AND company_id =?  AND branch_id =?', [survey_id, company_id, branch_id], function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

crudsObj.getSurveyQuestionByCompany = function (company_id, branch_id, survey_id, frequency) {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM survey_questions WHERE company_id = ? AND branch_id = ? AND status = "ON" AND survey_id = ? AND frequency = ?', [company_id, branch_id, survey_id, frequency], function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

crudsObj.updateSurveyQuestion = function (survey_question_id, updatedValues) {
  var category = updatedValues.category,
      subject = updatedValues.subject,
      question = updatedValues.question,
      response_type = updatedValues.response_type,
      status = updatedValues.status,
      frequency = updatedValues.frequency,
      survey_id = updatedValues.survey_id,
      company_id = updatedValues.company_id,
      branch_id = updatedValues.branch_id,
      answer_range_0_20 = updatedValues.answer_range_0_20,
      answer_range_21_40 = updatedValues.answer_range_21_40,
      answer_range_41_60 = updatedValues.answer_range_41_60,
      answer_range_61_80 = updatedValues.answer_range_61_80,
      answer_range_81_100 = updatedValues.answer_range_81_100;
  return new Promise(function (resolve, reject) {
    pool.query("UPDATE survey_questions SET \n               category = ?,\n               subject = ?,\n               question = ?,\n               response_type = ?,\n               status = ?,\n               frequency = ?,\n               survey_id = ?,\n               company_id = ?,\n               branch_id = ?,\n               answer_range_0_20 = ?,\n               answer_range_21_40 = ?,\n               answer_range_41_60 = ?,\n               answer_range_61_80 = ?,\n               answer_range_81_100 = ?\n            WHERE survey_question_id = ?", // No comma here
    [category, subject, question, response_type, status, frequency, survey_id, company_id, branch_id, answer_range_0_20, answer_range_21_40, answer_range_41_60, answer_range_61_80, answer_range_81_100, survey_question_id // Pass the ID as the last parameter
    ], function (err, result) {
      if (err) {
        return reject(err);
      }

      return resolve({
        status: '200',
        message: 'update successful'
      });
    });
  });
};

crudsObj.deleteSurveyQuestion = function (id) {
  return new Promise(function (resolve, reject) {
    pool.query('DELETE FROM survey_questions WHERE survey_question_id = ?', [id], function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

module.exports = crudsObj;