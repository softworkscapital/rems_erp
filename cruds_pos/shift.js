require('dotenv').config();
const pool = require('./poolfile');

let crudsObj = {};

crudsObj.postShift = (company_id, branch_id, operator_id, date_time_open, date_time_close, shift_comment, syncid) => {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO shift(company_id, branch_id, operator_id, date_time_open, date_time_close, shift_comment, syncid) VALUES (?,?,?,?,?,?,?)',
            [company_id, branch_id, operator_id, date_time_open, date_time_close, shift_comment, syncid],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve({ status: '200', message: 'saving successful', insertedId: result.insertId });
            });
    });
};

crudsObj.getShift = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM shift', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

crudsObj.getShiftById = (shift_id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM shift WHERE shift_id = ?', [shift_id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

// New method to get shift details by user_id, company_id, and branch_id
crudsObj.getShiftsByUserAndBranch = (user_id, company_id, branch_id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM shift WHERE operator_id = ? AND company_id = ? AND branch_id = ?',
            [user_id, company_id, branch_id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
    });
};

crudsObj.updateShift = (id, company_id, branch_id, operator_id, date_time_open, date_time_close, shift_comment, syncid) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'UPDATE shift SET company_id = ?, branch_id = ?, operator_id = ?, date_time_open = ?, date_time_close = ?, shift_comment = ?, syncid = ? WHERE shift_id = ?',
            [company_id, branch_id, operator_id, date_time_open, date_time_close, shift_comment, syncid, id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve({ status: '200', message: 'update successful' });
            }
        );
    });
};

crudsObj.deleteShift = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM shift WHERE shift_id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = crudsObj;