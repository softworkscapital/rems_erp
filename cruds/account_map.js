require('dotenv').config();
const pool = require('./poolfile');

let crudsObj = {};


crudsObj.postAccountMap = (
    fin_acc_account_map_id,
    fin_acc_account_info_id,
    fin_acc_account_project_id,
    cooperate_bank_id,
    created_on,
    acc_account_name,
    created_by,
    authorized,
    currency,
    group_id,
    prospect_id,
    current_period_sub_account_1,
    current_period_sub_account_2,
    current_period_sub_account_3,
    current_period_sub_account_4,
    current_period_sub_account_5,
    current_period_balance,
    account_balance_todate_sub_account_1,
    account_balance_todate_sub_account_2,
    account_balance_todate_sub_account_3,
    account_balance_todate_sub_account_4,
    account_balance_todate_sub_account_5,
    balance
) => {
    console.log('CRUD: ', fin_acc_account_map_id);

    return new Promise((resolve, reject) => {
        // VALIDATION TO CATCH DUPLICATE ACCOUNT
        pool.query(
            'SELECT * FROM fin_acc_account_map WHERE acc_account_name = ?',
            [acc_account_name],
            (err, results) => {
                if (err) return reject(err);
                // Stop execution if a duplicate account is found
                if (results.length > 0) {
                    return reject(new Error('DUPLICATE ACCOUNT FOUND'));
                }

                // Insert into fin_acc_account_map
                pool.query(
                    `INSERT INTO fin_acc_account_map (
                        fin_acc_account_info_id,
                        fin_acc_account_project_id,
                        cooperate_bank_id,
                        created_on,
                        acc_account_name,
                        created_by,
                        authorized,
                        currency,
                        group_id,
                        prospect_id,
                        current_period_sub_account_1,
                        current_period_sub_account_2,
                        current_period_sub_account_3,
                        current_period_sub_account_4,
                        current_period_sub_account_5,
                        current_period_balance,
                        account_balance_todate_sub_account_1,
                        account_balance_todate_sub_account_2,
                        account_balance_todate_sub_account_3,
                        account_balance_todate_sub_account_4,
                        account_balance_todate_sub_account_5,
                        balance
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                    [
                        fin_acc_account_info_id,
                        fin_acc_account_project_id,
                        cooperate_bank_id,
                        created_on,
                        acc_account_name,
                        created_by,
                        authorized,
                        currency,
                        group_id,
                        prospect_id,
                        current_period_sub_account_1,
                        current_period_sub_account_2,
                        current_period_sub_account_3,
                        current_period_sub_account_4,
                        current_period_sub_account_5,
                        current_period_balance,
                        account_balance_todate_sub_account_1,
                        account_balance_todate_sub_account_2,
                        account_balance_todate_sub_account_3,
                        account_balance_todate_sub_account_4,
                        account_balance_todate_sub_account_5,
                        balance
                    ],
                    (err, result) => {
                        if (err) return reject(err);

                        // Get previously inserted account by name to extract inserted account ID
                        pool.query(
                            'SELECT * FROM fin_acc_account_map WHERE acc_account_name = ?',
                            [acc_account_name],
                            (err, results) => {
                                if (err) return reject(err);
                                if (results.length === 0) return reject(new Error('Account not found'));

                                console.log("results kkk", results);
                                const created_account_id = results[0].fin_acc_account_map_id;

                                // Insert into BI_SUMS_CURRENT_DAYS
                                pool.query(
                                    `INSERT INTO bi_sums_current_day_account_totals (
                                        account_name,
                                        account_id,
                                        company_id
                                    ) VALUES (?, ?, ?)`,
                                    [acc_account_name, created_account_id, 1],
                                    (err) => {
                                        if (err) return reject(err);

                                        // Insert into BI_SUMS_MONTHLY
                                        pool.query(
                                            `INSERT INTO bi_sums_monthly_account_totals (
                                                account_name,
                                                account_id,
                                                company_id
                                            ) VALUES (?, ?, ?)`,
                                            [acc_account_name, created_account_id, 1],
                                            (err) => {
                                                if (err) return reject(err);

                                                // Insert into BI_SUMS_YEARLY
                                                pool.query(
                                                    `INSERT INTO bi_sums_yearly_account_totals (
                                                        account_name,
                                                        account_id,
                                                        company_id
                                                    ) VALUES (?, ?, ?)`,
                                                    [acc_account_name, created_account_id, 1],
                                                    (err) => {
                                                        if (err) return reject(err);
                                                        return resolve({ status: '200', message: 'Saving successful' });
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
            }
        );
    });
};
crudsObj.getAccountMaps = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM fin_acc_account_map ', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
};



crudsObj.getAccountMapById = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM fin_acc_account_map WHERE fin_acc_account_map_id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
};
crudsObj.getAccountMapsInfoById = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM fin_acc_account_map WHERE fin_acc_account_info_id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
};
crudsObj.getAccountMapsInfo = () => {
    return new Promise((resolve, reject) => {
        // pool.query('SELECT fin_acc_account_map.*, fin_acc_account_info.classifier, fin_acc_account_info.fin_acc_account_class, fin_acc_account_info.fin_acc_account_type, fin_acc_account_info.fin_acc_account_folio, fin_acc_account_info.Explanation FROM fin_acc_account_map INNER JOIN fin_acc_account_info ON fin_acc_account_map.fin_acc_account_info_id = fin_acc_account_info.fin_acc_account_info_id', (err, results) => {
        pool.query('SELECT fin_acc_account_map.*, fin_acc_account_info.classifier, fin_acc_account_info.fin_acc_account_class, fin_acc_account_info.fin_acc_account_type, fin_acc_account_info.fin_acc_account_folio, fin_acc_account_info.Explanation FROM fin_acc_account_map INNER JOIN fin_acc_account_info ON fin_acc_account_map.fin_acc_account_info_id = fin_acc_account_info.fin_acc_account_info_id WHERE fin_acc_account_info.fin_acc_account_type = "Cash & Bank"', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
};
crudsObj.getAccountMapsInfoAll = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT fin_acc_account_map.*, fin_acc_account_info.classifier, fin_acc_account_info.fin_acc_account_class, fin_acc_account_info.fin_acc_account_type, fin_acc_account_info.fin_acc_account_folio, fin_acc_account_info.Explanation FROM fin_acc_account_map INNER JOIN fin_acc_account_info ON fin_acc_account_map.fin_acc_account_info_id = fin_acc_account_info.fin_acc_account_info_id', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
};

crudsObj.getAccountMapsInfo2 = (name) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT fin_acc_account_map.*, fin_acc_account_info.classifier, fin_acc_account_info.fin_acc_account_class, fin_acc_account_info.fin_acc_account_type, fin_acc_account_info.fin_acc_account_folio, fin_acc_account_info.Explanation FROM fin_acc_account_map INNER JOIN fin_acc_account_info ON fin_acc_account_map.fin_acc_account_info_id = fin_acc_account_info.fin_acc_account_info_id WHERE fin_acc_account_info.fin_acc_account_class = ?',[name], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
};

crudsObj.getAccountMapsInfo3 = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT fin_acc_account_map.*, fin_acc_account_info.classifier, fin_acc_account_info.fin_acc_account_class, fin_acc_account_info.fin_acc_account_type, fin_acc_account_info.fin_acc_account_folio, fin_acc_account_info.Explanation FROM fin_acc_account_map INNER JOIN fin_acc_account_info ON fin_acc_account_map.fin_acc_account_info_id = fin_acc_account_info.fin_acc_account_info_id WHERE fin_acc_account_info.fin_acc_account_type = "Cash & Bank"', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
};

crudsObj.getAccountMapsInfo4 = (name) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM fin_acc_account_map WHERE acc_account_name = ?', [name],(err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
};

crudsObj.updateAccountMap = (id, accountMapId, accountInfoId, accountProjectId, createdOn, accountName, createdBy, isAuthorized, accountCurrency) => {
    return new Promise((resolve, reject) => {
        pool.query('UPDATE fin_acc_account_map SET fin_acc_account_info_id = ?, fin_acc_account_info_id = ?, fin_acc_account_project_id = ?, created_on = ?, acc_account_name = ?, created_by = ?, authorized = ?, currency = ?  WHERE fin_acc_account_map_id = ?',[accountMapId, accountInfoId, accountProjectId, createdOn, accountName, createdBy, isAuthorized, accountCurrency, id], (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve({ status: '200', message: 'update successful' });
            }
        );
    });
};

crudsObj.deleteAccountMap = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM fin_acc_account_map WHERE fin_acc_account_map_id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
};

module.exports = crudsObj;