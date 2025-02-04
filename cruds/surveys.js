require('dotenv').config();
const pool = require('./poolfile');

let crudsObj = {};

// In your database operations file
crudsObj.postSurvey = (
    survey_id,
    survey_name,
    survey_description,
    company_id,
    branch_id	

) => {
    return new Promise((resolve, reject) => {
        pool.query(
            `INSERT INTO surveys (
                survey_name,
    survey_description,
    company_id,
    branch_id	
            ) VALUES (?, ?, ?, ?)`,
            [
                survey_name,
    survey_description,
    company_id,
    branch_id	
            ],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve({ status: '200', message: 'saving successful' });
            }
        );
    });
};

crudsObj.getSurveys = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM surveys', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

crudsObj.getSurveyById = (survey_id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM surveys WHERE survey_id = ?', [survey_id], (err, results) => {
            if (err) {
                return reject(err); // Handle any errors
            }
            return resolve(results); // Return the results
        });
    });
};


crudsObj.updateSurvey = (survey_id, updatedValues) => {
    const {
        survey_name,
        survey_description,
        company_id,
        branch_id	
    } = updatedValues;

    return new Promise((resolve, reject) => {
        pool.query(
            `UPDATE surveys SET 
                 survey_name =?,
    survey_description =?,
    company_id =?,
    branch_id =?
            WHERE survey_id = ?`, // No comma here
            [
                survey_name,
    survey_description,
    company_id,
    branch_id	,
                survey_id // Pass the ID as the last parameter
            ],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve({ status: '200', message: 'update successful' });
            }
        );
    });
};

crudsObj.deleteSurvey = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM surveys WHERE survey_id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = crudsObj;
