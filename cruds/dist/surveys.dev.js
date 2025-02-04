"use strict";

require('dotenv').config();

var pool = require('./poolfile');

var crudsObj = {}; // In your database operations file

crudsObj.postSurvey = function (survey_id, survey_name, survey_description, company_id, branch_id) {
  return new Promise(function (resolve, reject) {
    pool.query("INSERT INTO surveys (\n                survey_name,\n    survey_description,\n    company_id,\n    branch_id\t\n            ) VALUES (?, ?, ?, ?)", [survey_name, survey_description, company_id, branch_id], function (err, result) {
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

crudsObj.getSurveys = function () {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM surveys', function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

crudsObj.getSurveyById = function (survey_id) {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM surveys WHERE survey_id = ?', [survey_id], function (err, results) {
      if (err) {
        return reject(err); // Handle any errors
      }

      return resolve(results); // Return the results
    });
  });
};

crudsObj.updateSurvey = function (survey_id, updatedValues) {
  var survey_name = updatedValues.survey_name,
      survey_description = updatedValues.survey_description,
      company_id = updatedValues.company_id,
      branch_id = updatedValues.branch_id;
  return new Promise(function (resolve, reject) {
    pool.query("UPDATE surveys SET \n                 survey_name =?,\n    survey_description =?,\n    company_id =?,\n    branch_id =?\n            WHERE survey_id = ?", // No comma here
    [survey_name, survey_description, company_id, branch_id, survey_id // Pass the ID as the last parameter
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

crudsObj.deleteSurvey = function (id) {
  return new Promise(function (resolve, reject) {
    pool.query('DELETE FROM surveys WHERE survey_id = ?', [id], function (err, results) {
      if (err) {
        return reject(err);
      }

      return resolve(results);
    });
  });
};

module.exports = crudsObj;