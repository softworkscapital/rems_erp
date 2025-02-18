require('dotenv').config();
const pool = require('./poolfile');

let crudsObj = {};

crudsObj.postCompanySetup = (
    name, address, registration_number, industry,
    company_size, trading_name, phone_number1, phone_number2,
    email1, email2, mode_transaction_size, number_of_transactions_per_day,
    website, bank_account_id1, bank_account_id2, bp_number,
    vat_number, base_currency,
    vat_tax_rate,
    discount_rate,
    interest_rate, physical_address, portrait_logo, horizontal_logo, sub_logo,
    footer, salutations, letterhead
) => {
    // Set interest_rate to null if it's undefined
    interest_rate = interest_rate !== undefined ? interest_rate : null;

    return new Promise((resolve, reject) => {
        // Step 1: Insert the new company setup record
        pool.query(
            `INSERT INTO company_setup 
            (name, address, registration_number, industry, company_size, trading_name, 
            phone_number1, phone_number2, email1, email2, mode_transaction_size, 
            number_of_transactions_per_day, website, bank_account_id1, bank_account_id2, 
            bp_number, vat_number, base_currency, vat_tax_rate, discount_rate, 
            interest_rate, physical_address, portrait_logo, horizontal_logo, sub_logo, 
            footer, salutations, letterhead) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                name, address, registration_number, industry,
                company_size, trading_name, phone_number1, phone_number2,
                email1, email2, mode_transaction_size, number_of_transactions_per_day,
                website, bank_account_id1, bank_account_id2, bp_number,
                vat_number, base_currency, vat_tax_rate, discount_rate, interest_rate,
                physical_address, portrait_logo, horizontal_logo, sub_logo,
                footer, salutations, letterhead
            ],
            (err, result) => {
                if (err) {
                    console.error("Insert error:", err);
                    return reject(err);
                }

                // Step 2: Capture the last inserted ID
                const companySetupId = result.insertId;

                // Step 3: Update the company_id to match the company_setup_id
                pool.query(
                    `UPDATE company_setup 
                    SET company_id = ? 
                    WHERE company_setup_id = ?`,
                    [companySetupId, companySetupId],
                    (updateErr, updateResult) => {
                        if (updateErr) {
                            console.error("Update error:", updateErr);
                            return reject(updateErr);
                        }
                        return resolve({
                            status: '200',
                            message: 'Company setup created successfully',
                            company_id: companySetupId // Return the updated company_id
                        });
                    }
                );
            }
        );
    });
};

crudsObj.getCompanySetups = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM company_setup', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

crudsObj.getCompanySetupById = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM company_setup WHERE company_setup_id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

crudsObj.getCompanyNameByCompanyId = (companyID) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT name FROM company_setup WHERE company_id = ?', [companyID], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

crudsObj.updateCompanySetup = (
    company_setup_id, company_id, name, address, registration_number, industry,
    company_size, trading_name, phone_number1, phone_number2,
    email1, email2, mode_transaction_size, number_of_transactions_per_day,
    website, bank_account_id1, bank_account_id2, bp_number,
    vat_number, physical_address, portrait_logo, horizontal_logo,
    footer, salutations, letterhead
) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'UPDATE company_setup SET company_id = ?, name = ?, address = ?, registration_number = ?, industry = ?, company_size = ?, trading_name = ?, phone_number1 = ?, phone_number2 = ?, email1 = ?, email2 = ?, mode_transaction_size = ?, number_of_transactions_per_day = ?, website = ?, bank_account_id1 = ?, bank_account_id2 = ?, bp_number = ?, vat_number = ?, physical_address = ?, portrait_logo = ?, horizontal_logo = ?, footer = ?, salutations = ?, letterhead = ? WHERE company_setup_id = ?',
            [
                company_id, name, address, registration_number, industry,
                company_size, trading_name, phone_number1, phone_number2,
                email1, email2, mode_transaction_size, number_of_transactions_per_day,
                website, bank_account_id1, bank_account_id2, bp_number,
                vat_number, physical_address, portrait_logo, horizontal_logo,
                footer, salutations, letterhead, company_setup_id
            ],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve({ status: '200', message: 'Company setup updated successfully' });
            }
        );
    });
};

crudsObj.deleteCompanySetup = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM company_setup WHERE company_setup_id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve({ status: '200', message: 'Company setup deleted successfully' });
        });
    });
};

module.exports = crudsObj;