require('dotenv').config();
const pool = require('./poolfile');

let crudsObj = {};

crudsObj.postSurveyQuestions = (
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
) => {
    return new Promise((resolve, reject) => {
        pool.query(
            `INSERT INTO survey_questions (
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
               answer_range_81_100
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
            [
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
                answer_range_81_100
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

crudsObj.getSurveyQuestions = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM  survey_questions', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};


crudsObj.getSurveyById = (survey_question_id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM survey_questions WHERE survey_question_id = ?', [survey_question_id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

crudsObj.getSurveyQuestionsBySurveyId = (survey_id, company_id, branch_id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT *ccsd FROM survey_questions WHERE survey_id = ? AND company_id =?  AND branch_id =?', [survey_id , company_id, branch_id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};


crudsObj.getSurveyQuestionByCompany = (company_id, branch_id, survey_id, frequency) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'SELECT * FROM survey_questions WHERE company_id = ? AND branch_id = ? AND status = "ON" AND survey_id = ? AND frequency = ?',
            [company_id, branch_id, survey_id, frequency],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            }
        );
    });
};



crudsObj.updateSurveyQuestion = (survey_question_id, updatedValues) => {
    const {
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
    } = updatedValues;

    return new Promise((resolve, reject) => {
        pool.query(
            `UPDATE survey_questions SET 
               category = ?,
               subject = ?,
               question = ?,
               response_type = ?,
               status = ?,
               frequency = ?,
               survey_id = ?,
               company_id = ?,
               branch_id = ?,
               answer_range_0_20 = ?,
               answer_range_21_40 = ?,
               answer_range_41_60 = ?,
               answer_range_61_80 = ?,
               answer_range_81_100 = ?
            WHERE survey_question_id = ?`, // No comma here
            [
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
                survey_question_id // Pass the ID as the last parameter
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

crudsObj.deleteSurveyQuestion = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM survey_questions WHERE survey_question_id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = crudsObj;
