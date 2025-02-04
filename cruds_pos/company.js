require('dotenv').config();
const pool = require('./poolfile');

let crudsObj = {};

// In your database operations file
crudsObj.postCompany = (
    
company_id,
company_name	

) => {
    return new Promise((resolve, reject) => {
        pool.query(
            `INSERT INTO company (
    company_name
            ) VALUES (?)`,
            [
                company_name
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

crudsObj.getCompanys = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM company', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

crudsObj.getCompanyById = (company_id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM company WHERE company_id = ?', [company_id], (err, results) => {
            if (err) {
                return reject(err); // Handle any errors
            }
            return resolve(results); // Return the results
        });
    });
};


crudsObj.updateCompany = (company_id, updatedValues) => {
    const {
        company_name	
    } = updatedValues;

    return new Promise((resolve, reject) => {
        pool.query(
            `UPDATE company SET 
                 company_name =?
            WHERE company_id = ?`, // No comma here
            [
                company_name,
                company_id // Pass the ID as the last parameter
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

crudsObj.deleteCompany = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM company WHERE company_id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = crudsObj;
