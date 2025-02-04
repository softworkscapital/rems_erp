require('dotenv').config();
const pool = require('./poolfile');

let crudsObj = {};

// In your database operations file
crudsObj.postSurveyAnswer = (
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
) => {
    return new Promise((resolve, reject) => {
        pool.query(
            `INSERT INTO survey_answers (
                survey_question_id,
                answer_id,
                answer_scaled,
                answer_scale,
                answer_text,
                date_from,
                date_to,
                company_id,
                branch_id,
                survey_id
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                survey_question_id,
                answer_id,
                answer_scaled,
                answer_scale,
                answer_text,
                date_from,
                date_to,
                company_id,
                branch_id,
                survey_id
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

crudsObj.getSurveyAnswers = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM survey_answers', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

crudsObj.getSurveyAnswerById = (survey_answer_id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM survey_answers WHERE survey_answer_id = ?', [survey_answer_id], (err, results) => {
            if (err) {
                return reject(err); // Handle any errors
            }
            return resolve(results); // Return the results
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



crudsObj.getSurveyAnswerSummary = (survey_id, date_from, date_to) => {
    return new Promise((resolve, reject) => {
        // Step 1: Get all survey_question_ids and questions
        pool.query(
            `SELECT sq.survey_question_id, sq.question 
             FROM survey_questions AS sq 
             WHERE sq.survey_id = ?`,
            [survey_id],
            (err, questionResults) => {
                if (err) {
                    return reject(err); // Handle any errors
                }

                // Prepare promises for each question to get counts
                const summaryPromises = questionResults.map(question => {
                    return new Promise((resolveAV, rejectAV) => {
                        const theQuestionId = question.survey_question_id;

                        pool.query(
                            `SELECT 
                                COUNT(CASE WHEN answer_scaled = '1' THEN 1 END) AS Frequency_A,
                                COUNT(CASE WHEN answer_scaled = '2' THEN 1 END) AS Frequency_B,
                                COUNT(CASE WHEN answer_scaled = '3' THEN 1 END) AS Frequency_C,
                                COUNT(CASE WHEN answer_scaled = '4' THEN 1 END) AS Frequency_D,
                                COUNT(CASE WHEN answer_scaled = '5' THEN 1 END) AS Frequency_E
                             FROM survey_answers AS sa
                             WHERE sa.date_from >= ? AND sa.date_to <= ? 
                             AND sa.survey_question_id = ? 
                             AND sa.survey_id = ?`,
                            [date_from, date_to, theQuestionId, survey_id],
                            (err, answerResults) => {
                                if (err) {
                                    return rejectAV(err); // Handle any errors
                                }

                                const frequencies = answerResults[0];

                                // Calculate highest preferred frequency
                                const highestPreferredFrequency = Math.max(
                                    frequencies.Frequency_A || 0,
                                    frequencies.Frequency_B || 0,
                                    frequencies.Frequency_C || 0,
                                    frequencies.Frequency_D || 0,
                                    frequencies.Frequency_E || 0
                                );

                                // Calculate total participants as the sum of all frequencies
                                const totalParticipants = 
                                    (frequencies.Frequency_A || 0) +
                                    (frequencies.Frequency_B || 0) +
                                    (frequencies.Frequency_C || 0) +
                                    (frequencies.Frequency_D || 0) +
                                    (frequencies.Frequency_E || 0);

                                resolveAV({
                                    survey_question_id: question.survey_question_id,
                                    question: question.question,
                                    Frequencies: frequencies,
                                    Highest_Preferred_Frequency: highestPreferredFrequency,
                                    Preferred_Answer_Range: "easy",
                                    Total_Participants: totalParticipants
                                });
                            }
                        );
                    });
                });

                // Resolve all promises and return the results
                Promise.all(summaryPromises)
                    .then(summaryResults => resolve(summaryResults))
                    .catch(reject); // Handle any errors from the promises
            }
        );
    });
};

// crudsObj.getSurveyAnswerSummary = (survey_id, date_from, date_to) => {
//     return new Promise((resolve, reject) => {
//         // Step 1: Get survey_question_ids, question, and calculate necessary metrics
//         pool.query(
//             `SELECT sq.survey_question_id, 
//                     sq.question,
//                     COUNT(*) AS number_of_participants, 
//                     SUM(sa.answer_scaled) AS total_sum 
//              FROM survey_answers sa
//              JOIN survey_questions sq ON sa.survey_question_id = sq.survey_question_id
//              WHERE sa.survey_id = ? 
//              AND sa.date_from >= ? AND sa.date_to <= ? 
//              GROUP BY sq.survey_question_id, sq.question`,
//             [survey_id, date_from, date_to],
//             (err, answerResults) => {
//                 if (err) {
//                     return reject(err); // Handle any errors
//                 }

//                 // Step 2: Build summary results with additional calculations
//                 const summaryResults = answerResults.map(answer => {
//                     const total_sum = answer.total_sum || 0;
//                     const average_percentage = (total_sum / 5) * 100;

//                     // Determine answer range based on average percentage
//                     // let answer_range;
//                     // if (average_percentage > 0 && average_percentage < 20) {
//                     //     answer_range = "quite easy";
//                     // } else if (average_percentage >= 20 && average_percentage < 40) {
//                     //     answer_range = "easy";
//                     // } else if (average_percentage >= 40 && average_percentage < 60) {
//                     //     answer_range = "moderate";
//                     // } else if (average_percentage >= 60 && average_percentage < 80) {
//                     //     answer_range = "quite complex";
//                     // } else if (average_percentage >= 80 && average_percentage <= 100) {
//                     //     answer_range = "very complex";
//                     // } else {
//                     //     answer_range = "difficult"; // Fallback for any unexpected cases
//                     // }

//                     return {
//                         survey_question_id: answer.survey_question_id,
//                         question: answer.question, // Use the correct field name
//                         number_of_participants: answer.number_of_participants,
//                         total_sum: total_sum,
//                         average_percentage: average_percentage,
//                         // answer_range: answer_range
//                     };
//                 });

//                 return resolve(summaryResults); // Return the summary results
//             }
//         );
//     });
// };



crudsObj.updateSurveyAnswer = (survey_answer_id, updatedValues) => {
    const {
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
    } = updatedValues;

    return new Promise((resolve, reject) => {
        pool.query(
            `UPDATE survey_answers SET 
                survey_question_id = ?,
                answer_id = ?,
                answer_scaled = ?,
                answer_scale = ?,
                answer_text = ?,
                date_from = ?,
                date_to = ?,
                company_id = ?,
                branch_id = ?,
                survey_id =?,
            WHERE survey_answer_id = ?`, // No comma here
            [
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
                survey_answer_id // Pass the ID as the last parameter
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

crudsObj.deleteSurveyAnswer = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM survey_answers WHERE survey_answer_id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = crudsObj;
