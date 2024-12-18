require('dotenv').config();
const pool = require('./poolfile');

let crudsObj = {};

crudsObj.postAccountLinking = (debitAccMapId, creditAccMapId, debitTransactionId, creditTransactionId, value, linkedOn, linkedBy, fin_acc_account_map_id, index_acc_name_id, index_acc_name, dual_trans_acc_name_id, dual_trans_acc_name, datepaid, datefor, description, cost_center, link, currency, rate_to_usd, debit, credit, pmode, requester, confirmed, authorized, comitted, txn_reference, flag, comment, creditBalance, debitBalance) => {
    return new Promise((resolve, reject) => { 
        pool.query('INSERT INTO  fin_acc_account_linking(debit_fin_acc_account_map_id, credit_fin_acc_account_map_id, debit_transaction_id, credit_transaction_id, value, linked_on, linked_by ) VALUES (?,?,?,?,?,?,?)', [debitAccMapId, creditAccMapId, debitTransactionId, creditTransactionId, value, linkedOn, linkedBy], (err, result) => {
            if (err) {
                return reject(err);
            }
            pool.query('INSERT INTO fin_acc_admin_expenses_accounts(fin_acc_account_map_id, index_acc_name_id, index_acc_name, dual_trans_acc_name_id, dual_trans_acc_name, datepaid, datefor, description, cost_center, link, currency, rate_to_usd, value, debit, credit, pmode, requester, confirmed, authorized, comitted, txn_reference, flag, comment) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [fin_acc_account_map_id, index_acc_name_id, index_acc_name, dual_trans_acc_name_id, dual_trans_acc_name, datepaid, datefor, description, cost_center, link, currency, rate_to_usd, value, debit, credit, pmode, requester, '1', authorized, comitted, txn_reference, flag, comment], (err, result) => {
                if (err) {
                    return reject(err);
                }
                // pool.query('INSERT INTO fin_acc_bank_and_cash_accounts(index_acc_name, index_acc_name_id, dual_trans_acc_name_id, dual_trans_acc_name, fin_acc_account_map_id, link, datepaid, datefor, description, cost_center, debit_cash, credit_cash, debit_bank, credit_bank, pmode, currency, rate_to_usd, rate_on_value, value, requester, confirmed, authorized, comitted, txn_reference, flag, comment, acc_name) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [ 1, index_acc_name_id, dual_trans_acc_name_id, dual_trans_acc_name, fin_acc_account_map_id, link, datepaid, datefor, description, cost_center, '0', value, debitBank, creditBank, paymentMode, accountCurrency, rateToUSD, rateOnValue, accountValue, 'requester', confirmed, authorized, comitted, 'ref', flag, comment, accountName], (err, result) => {
                pool.query('INSERT INTO fin_acc_bank_and_cash_accounts(index_acc_name, index_acc_name_id, dual_trans_acc_name_id, dual_trans_acc_name, fin_acc_account_map_id, link, datepaid, datefor, description, cost_center, debit_cash, credit_cash, debit_bank, credit_bank, pmode, currency, rate_to_usd, rate_on_value, value, requester, confirmed, authorized, comitted, txn_reference, flag, comment, acc_name, balance) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [index_acc_name, index_acc_name_id, dual_trans_acc_name_id, dual_trans_acc_name, fin_acc_account_map_id, link, datepaid, datefor, description, cost_center, '0', value, 0, value, pmode, 'USD', 1, 1, value, requester, confirmed, authorized, comitted, txn_reference, flag, comment, 'accountName', creditBalance], (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    pool.query('UPDATE fin_acc_account_map SET balance = ?  WHERE fin_acc_account_map_id = ?', [debitBalance, fin_acc_account_map_id], (err, result) => {
                        if (err) {
                            return reject(err);
                        }
                        pool.query('UPDATE fin_acc_account_map SET balance = ?  WHERE fin_acc_account_map_id = ?', [creditBalance, index_acc_name_id], (err, result) => {
                            if (err) {
                                return reject(err);
                            }
                            return resolve({ status: '200', message: 'update successful' });
                        });
                    });
                });
            })
        })
    })
};






crudsObj.postAccountLinking2 = (
    debitAccMapId,
    creditAccMapId,
    debitTransactionId,
    creditTransactionId,
    value,
    linkedOn,
    linkedBy,
    fin_acc_account_map_id,
    index_acc_name_id,
    index_acc_name,
    dual_trans_acc_name_id,
    dual_trans_acc_name,
    datepaid,
    datefor,
    description,
    cost_center,
    link,
    currency,
    rate_to_usd,
    debit,
    credit,
    pmode,
    requester,
    confirmed,
    authorized,
    comitted,
    txn_reference,
    flag,
    comment,
    creditBalance,
    debitBalance
) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'INSERT INTO fin_acc_account_linking(debit_fin_acc_account_map_id, credit_fin_acc_account_map_id, debit_transaction_id, credit_transaction_id, value, linked_on, linked_by) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [debitAccMapId, creditAccMapId, debitTransactionId, creditTransactionId, value, linkedOn, linkedBy],
            (err) => {
                if (err) {
                    return reject(err);
                }
                pool.query(
                    'INSERT INTO fin_acc_direct_expenses_accounts(fin_acc_account_map_id, index_acc_name_id, index_acc_name, dual_trans_acc_name_id, dual_trans_acc_name, datepaid, datefor, description, cost_center, link, currency, rate_to_usd, value, debit, credit, pmode, requester, confirmed, authorized, comitted, txn_reference, flag, comment) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                    [
                        fin_acc_account_map_id,
                        index_acc_name_id,
                        index_acc_name,
                        dual_trans_acc_name_id,
                        dual_trans_acc_name,
                        datepaid,
                        datefor,
                        description,
                        cost_center,
                        link,
                        currency,
                        rate_to_usd,
                        value,
                        debit,
                        credit,
                        pmode,
                        requester,
                        '1',
                        authorized,
                        comitted,
                        txn_reference,
                        flag,
                        comment
                    ],
                    (err) => {
                        if (err) {
                            return reject(err);
                        }
                        pool.query(
                            'INSERT INTO fin_acc_bank_and_cash_accounts(index_acc_name, index_acc_name_id, dual_trans_acc_name_id, dual_trans_acc_name, fin_acc_account_map_id, link, datepaid, datefor, description, cost_center, debit_cash, credit_cash, debit_bank, credit_bank, pmode, currency, rate_to_usd, rate_on_value, value, requester, confirmed, authorized, comitted, txn_reference, flag, comment, acc_name, balance) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                            [
                                index_acc_name,
                                index_acc_name_id,
                                dual_trans_acc_name_id,
                                dual_trans_acc_name,
                                fin_acc_account_map_id,
                                link,
                                datepaid,
                                datefor,
                                description,
                                cost_center,
                                '0',
                                value,
                                0,
                                value,
                                pmode,
                                'USD',
                                1,
                                1,
                                value,
                                requester,
                                confirmed,
                                authorized,
                                comitted,
                                txn_reference,
                                flag,
                                comment,
                                'accountName',
                                creditBalance
                            ],
                            (err) => {
                                if (err) {
                                    return reject(err);
                                }
                                pool.query(
                                    'UPDATE fin_acc_account_map SET balance = ? WHERE fin_acc_account_map_id = ?',
                                    [debitBalance, fin_acc_account_map_id],
                                    (err) => {
                                        if (err) {
                                            return reject(err);
                                        }
                                        pool.query(
                                            'UPDATE fin_acc_account_map SET balance = ? WHERE fin_acc_account_map_id = ?',
                                            [creditBalance, index_acc_name_id],
                                            (err) => {
                                                if (err) {
                                                    return reject(err);
                                                }
                                                return resolve({ status: '200', message: 'update successful' });
                                            }
                                        );
                                    }
                                );
                            }
                        );
                    }
                );
            }
        );
    });
};

crudsObj.postAccountLinking3 = (
    debitAccMapId,
    creditAccMapId,
    value,
    linkedOn,
    linkedBy,
    fin_acc_account_map_id,
    index_acc_name_id,
    index_acc_name,
    dual_trans_acc_name_id,
    dual_trans_acc_name,
    datepaid,
    datefor,
    description,
    cost_center,
    link,
    currency,
    rate_to_usd,
    debit,
    credit,
    pmode,
    requester,
    confirmed,
    authorized,
    comitted,
    txn_reference,
    flag,
    comment,
    creditBalance,
    debitBalance,
    member_contribution_amount,
    company_contribution_amount,
    time_rec,
    interest,
    principal,
    deposit,
    folio,
    balance,
    total_paid_contributions,
    branch_id,
    member_id,
    sync_status,
    sync_date_time,
    sub_account_1,
    sub_account_2,
    sub_account_3,
    sub_account_4,
    sub_account_5,
    sales_shift_id,
    operator,
    product_pension_plan_id,
    months_behind
) => {
    return new Promise((resolve, reject) => {
       let debitTransactionId = 0;
        let creditTransactionId = 0;
        fin_acc_account_map_id = 1;
        pool.query(
            'INSERT INTO fin_acc_account_linking(debit_fin_acc_account_map_id, credit_fin_acc_account_map_id, debit_transaction_id, credit_transaction_id, value, linked_on, linked_by) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [debitAccMapId, creditAccMapId, debitTransactionId, creditTransactionId, value, linkedOn, linkedBy],
            (err) => {
                if (err) {
                    return reject(err);
                }
                pool.query(
                    `INSERT INTO fin_acc_revenue_accounts (
                        fin_acc_account_map_id, 
                        index_acc_name_id, 
                        index_acc_name, 
                        dual_trans_acc_name_id, 
                        dual_trans_acc_name, 
                        datepaid, 
                        datefor, 
                        description, 
                        member_contribution_amount, 
                        company_contribution_amount, 
                        time_rec, 
                        interest, 
                        principal, 
                        deposit, 
                        folio, 
                        balance, 
                        total_paid_contributions, 
                        branch_id, 
                        member_id, 
                        sync_status, 
                        sync_date_time, 
                        sub_account_1, 
                        sub_account_2, 
                        sub_account_3, 
                        sub_account_4, 
                        sub_account_5, 
                        sales_shift_id, 
                        operator, 
                        cost_center, 
                        link, 
                        currency, 
                        rate_to_usd, 
                        value, 
                        debit, 
                        credit, 
                        product_pension_plan_id, 
                        months_behind, 
                        pmode, 
                        requester, 
                        confirmed, 
                        authorized, 
                        comitted, 
                        txn_reference, 
                        flag, 
                        comment
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                    [
                        fin_acc_account_map_id,
                        index_acc_name_id,
                        index_acc_name,
                        dual_trans_acc_name_id,
                        dual_trans_acc_name,
                        datepaid,
                        datefor,
                        description,
                        member_contribution_amount,
                        company_contribution_amount,
                        time_rec,
                        interest,
                        principal,
                        deposit,
                        folio,
                        balance,
                        total_paid_contributions,
                        branch_id,
                        member_id,
                        sync_status,
                        sync_date_time,
                        sub_account_1,
                        sub_account_2,
                        sub_account_3,
                        sub_account_4,
                        sub_account_5,
                        sales_shift_id,
                        operator,
                        cost_center,
                        link,
                        currency,
                        rate_to_usd,
                        value,
                        debit,
                        credit,
                        product_pension_plan_id,
                        months_behind,
                        pmode,
                        requester,
                        confirmed,
                        authorized,
                        comitted,
                        txn_reference,
                        flag,
                        comment
                    ],
                    (err) => {
                        if (err) {
                            return reject(err);
                        }
                        pool.query(
                            'INSERT INTO fin_acc_bank_and_cash_accounts(index_acc_name, index_acc_name_id, dual_trans_acc_name_id, dual_trans_acc_name, fin_acc_account_map_id, link, datepaid, datefor, description, cost_center, debit_cash, credit_cash, debit_bank, credit_bank, pmode, currency, rate_to_usd, rate_on_value, value, requester, confirmed, authorized, comitted, txn_reference, flag, comment, acc_name, balance) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)',
                            [
                                index_acc_name,
                                index_acc_name_id,
                                dual_trans_acc_name_id,
                                dual_trans_acc_name,
                                fin_acc_account_map_id,
                                link,
                                datepaid,
                                datefor,
                                description,
                                cost_center,
                                '0',
                                0,
                                value,
                                0,
                                pmode,
                                'USD',
                                1,
                                1,
                                value,
                                requester,
                                confirmed,
                                authorized,
                                comitted,
                                txn_reference,
                                flag,
                                comment,
                                'accountName',
                                creditBalance
                            ],
                            (err) => {
                                if (err) {
                                    return reject(err);
                                }
                                pool.query(
                                    'UPDATE fin_acc_account_map SET balance = ? WHERE fin_acc_account_map_id = ?',
                                    [debitBalance, fin_acc_account_map_id],
                                    (err) => {
                                        if (err) {
                                            return reject(err);
                                        }

                                        let todays_date = new Date();
                                        let todays_date_day = todays_date.getDate();


// Array of month names
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Get the month index (0-11)
let monthIndex = todays_date.getMonth(); // Current month index

// Get the first three letters of the month name
let todays_date_month = monthNames[monthIndex].substring(0, 3); // First 3 letters


                                        let todays_date_year = todays_date.getFullYear();

                                        let prefix = "bi_sum_";
                                        let postfix = "_balance";
                                        let day_to_update = prefix + "day" + todays_date_day + postfix;
                                        let month_to_update = prefix + todays_date_month + postfix;
                                        let year_to_update = prefix + todays_date_year + postfix;
                                        let valuez=90;


                                        let sql = 'SELECT * FROM bi_sums_current_day_account_totals WHERE account_id = ?';
                                        console.log("fin_acc_account_map_id:", fin_acc_account_map_id);
                                        console.log("SQL", sql);

                                        // Get previous balance day  
                                        pool.query(sql, [fin_acc_account_map_id], (err, results) => {
                                            if (err) return reject(err); 
                                            if (results.length === 0) return reject(new Error('Failed to get bi_sums_day_balance'));
                                            let oldBalanceDay = results[0][day_to_update];
                                            let updatedBalanceDay = oldBalanceDay + valuez; // Assuming you want to add the current value



                                            // Get previous balance month
                                            pool.query('SELECT ' + month_to_update + ' FROM bi_sums_monthly_account_totals WHERE account_id = ?', [fin_acc_account_map_id], (err, results) => {
                                                if (err) return reject(err);
                                                if (results.length === 0) return reject(new Error('Failed to get bi_sums_month_balance'));
                                                let oldBalanceMonth = results[0][month_to_update];
                                                let updatedBalanceMonth = oldBalanceMonth + valuez; // Assuming you want to add the current value

                                                // Get previous balance year
                                                pool.query('SELECT ' + year_to_update + ' FROM bi_sums_yearly_account_totals WHERE account_id = ?', [fin_acc_account_map_id], (err, results) => {
                                                    if (err) return reject(err);
                                                    if (results.length === 0) return reject(new Error('Failed to get bi_sums_year_balance'));
                                                    let oldBalanceYear = results[0][year_to_update];
                                                    let updatedBalanceYear = oldBalanceYear + valuez; // Assuming you want to add the current value

                                                    // Update balances
                                                    pool.query('UPDATE bi_sums_current_day_account_totals SET ' + day_to_update + ' = ? WHERE account_id = ?', [updatedBalanceDay, fin_acc_account_map_id], (err) => {
                                                        if (err) return reject(err);

                                                        pool.query('UPDATE bi_sums_monthly_account_totals SET ' + month_to_update + ' = ? WHERE account_id = ?', [updatedBalanceMonth, fin_acc_account_map_id], (err) => {
                                                            if (err) return reject(err);

                                                            pool.query('UPDATE bi_sums_yearly_account_totals SET ' + year_to_update + ' = ? WHERE account_id = ?', [updatedBalanceYear, fin_acc_account_map_id], (err) => {
                                                                if (err) return reject(err);

                                                                pool.query(
                                                                    'UPDATE fin_acc_account_map SET balance = ? WHERE fin_acc_account_map_id = ?',
                                                                    [creditBalance, index_acc_name_id],
                                                                    (err) => {
                                                                        if (err) return reject(err);
                                                                        return resolve({ status: '200', message: 'Update successful' });
                                                                    }
                                                                );
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    }
                                );
                            }
                        );
                    }
                );
            }
        );
    });
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