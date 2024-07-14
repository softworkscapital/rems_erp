require('dotenv').config();
const pool = require('./poolfile');

let crudsObj = {};

crudsObj.postAccountLinking = (debitAccMapId, creditAccMapId, debitTransactionId, creditTransactionId, value, linkedOn, linkedBy, fin_acc_account_map_id, index_acc_name_id, index_acc_name, dual_trans_acc_name_id, dual_trans_acc_name, datepaid, datefor, description, cost_center, link, currency, rate_to_usd, debit, credit, pmode, requester, confirmed, authorized, comitted, txn_reference, flag, comment) => {
    return new Promise((resolve, reject) => { // 	
        // fin_acc_account_linking_id
        console.log('DB ACCOUNT', debitAccMapId)
        console.log('DB Confirm', confirmed)
        console.log('Linked by', linkedBy)
        pool.query('INSERT INTO  fin_acc_account_linking(debit_fin_acc_account_map_id, credit_fin_acc_account_map_id, debit_transaction_id, credit_transaction_id, value, linked_on, linked_by ) VALUES (?,?,?,?,?,?,?)', [debitAccMapId, creditAccMapId, debitTransactionId, creditTransactionId, value, linkedOn, linkedBy], (err, result) => {
            if (err) {
                return reject(err);
            }
            pool.query('INSERT INTO fin_acc_admin_expenses_accounts(fin_acc_account_map_id, index_acc_name_id, index_acc_name, dual_trans_acc_name_id, dual_trans_acc_name, datepaid, datefor, description, cost_center, link, currency, rate_to_usd, value, debit, credit, pmode, requester, confirmed, authorized, comitted, txn_reference, flag, comment) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [fin_acc_account_map_id, index_acc_name_id, index_acc_name, dual_trans_acc_name_id, dual_trans_acc_name, datepaid, datefor, description, cost_center, link, currency, rate_to_usd, value, debit, credit, pmode, requester, '1', authorized, comitted, txn_reference, flag, comment], (err, result) => {
                if (err) {
                    return reject(err);
                }
                // pool.query('INSERT INTO fin_acc_bank_and_cash_accounts(index_acc_name, index_acc_name_id, dual_trans_acc_name_id, dual_trans_acc_name, fin_acc_account_map_id, link, datepaid, datefor, description, cost_center, debit_cash, credit_cash, debit_bank, credit_bank, pmode, currency, rate_to_usd, rate_on_value, value, requester, confirmed, authorized, comitted, txn_reference, flag, comment, acc_name) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [ 1, index_acc_name_id, dual_trans_acc_name_id, dual_trans_acc_name, fin_acc_account_map_id, link, datepaid, datefor, description, cost_center, '0', value, debitBank, creditBank, paymentMode, accountCurrency, rateToUSD, rateOnValue, accountValue, 'requester', confirmed, authorized, comitted, 'ref', flag, comment, accountName], (err, result) => {
                pool.query('INSERT INTO fin_acc_bank_and_cash_accounts(index_acc_name, index_acc_name_id, dual_trans_acc_name_id, dual_trans_acc_name, fin_acc_account_map_id, link, datepaid, datefor, description, cost_center, debit_cash, credit_cash, debit_bank, credit_bank, pmode, currency, rate_to_usd, rate_on_value, value, requester, confirmed, authorized, comitted, txn_reference, flag, comment, acc_name) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [ index_acc_name, index_acc_name_id, dual_trans_acc_name_id, dual_trans_acc_name, fin_acc_account_map_id, link, datepaid, datefor, description, cost_center, '0', value, 0, value, pmode, 'USD', 1, 1, value, requester, confirmed, authorized, comitted, txn_reference, flag, comment, 'accountName'], (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve({ statu: '200', message: 'saving successful' });
                })
            })
        })
    })
};

crudsObj.getAccountLinkings = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM  fin_acc_account_linking', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
};

crudsObj.getAccountLinkingById = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM  fin_acc_account_linking WHERE fin_acc_account_linking_id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
};

crudsObj.updateAccountLinking = (id, debitAccMapId, creditAccMapId, debitTransactionId, creditTransactionId, value, linkedOn, linkedBy) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'UPDATE  fin_acc_account_linking SET debit_fin_acc_account_map_id = ?, credit_fin_acc_account_map_id = ?, debit_transaction_id = ?, credit_transaction_id = ?, value = ?, linked_on = ?, linked_by = ? WHERE fin_acc_account_linking_id = ?',
            [debitAccMapId, creditAccMapId, debitTransactionId, creditTransactionId, value, linkedOn, linkedBy, id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve({ status: '200', message: 'update successful' });
            }
        );
    });
};

crudsObj.deleteAccountLinking = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM  fin_acc_account_linking WHERE fin_acc_account_linking_id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
};

module.exports = crudsObj;