require('dotenv').config();
const pool = require('./poolfile');

let crudsObj = {};

crudsObj.postRevenueAcc = (
    fin_acc_revenue_accounts_id,
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
    pmode,
    requester,
    confirmed,
    authorized,
    comitted,
    txn_reference,
    flag,
    comment
) => {
    return new Promise((resolve, reject) => {
        pool.query(
            `INSERT INTO fin_acc_revenue_accounts (
                fin_acc_revenue_accounts_id,
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
                pmode,
                requester,
                confirmed,
                authorized,
                comitted,
                txn_reference,
                flag,
                comment
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?,?,?,?)`,
            [
                fin_acc_revenue_accounts_id,
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
                pmode,
                requester,
                confirmed,
                authorized,
                comitted,
                txn_reference,
                flag,
                comment
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



crudsObj.getRevenueAccs = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM fin_acc_revenue_accounts', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
};




crudsObj.getRevenueHistory = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM fin_acc_revenue_accounts ORDER BY fin_acc_revenue_accounts_id DESC LIMIT 3', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
};

crudsObj.getRevenueAccs2 = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT *, SUM(value) AS total_debit FROM fin_acc_revenue_accounts', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

crudsObj.getRevenueAccById = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM fin_acc_revenue_accounts WHERE product_pension_plan_id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
};


// crudsObj.getR = () => {
//     return new Promise((resolve, reject) => {
//         pool.query('SELECT * FROM pension_products', (err, results) => {
//             if (err) {
//                 return reject(err);
//             }
//             return resolve(results);
//         })
//     })
// };

crudsObj.getContributionAllPensionPlansSumsToday = () => {
    return new Promise((resolve, reject) => {
        // First, get all pension_product_ids from pension_products
        pool.query('SELECT pension_product_id FROM pension_products', (err, pension_products_results) => {
            if (err) {
                return reject(err);
            }

            // Check if there are any results
            if (pension_products_results.length === 0) {
                return resolve([]); // No products found
            }
   
            // Prepare an array to hold promises for the sum queries
            const sumPromises = pension_products_results.map(product => {
                const productId = product.pension_product_id; // Correct field name

                // Create a promise for each sum query
                return new Promise((resolve, reject) => {
                    pool.query(
                        'SELECT SUM(credit) AS plan_total_credit FROM fin_acc_revenue_accounts WHERE product_pension_plan_id = ? AND DATE(datefor) = CURDATE()',
                        [productId],
                        (err, results) => {
                            if (err) {
                                return reject(err);
                            }
                            // Return the result with the product ID
                            resolve({ productId, plan_total_credit: results[0]?.plan_total_credit || 0 });
                        }
                    );
                });
            });

            // Resolve all promises and return the results
            Promise.all(sumPromises)
                .then(sumResults => resolve(sumResults))
                .catch(err => reject(err));
        });
    });
};




crudsObj.getContributionAllPensionPlansSumsTodate = () => {
    return new Promise((resolve, reject) => {
        // First, get all pension_product_ids from pension_products
        pool.query('SELECT pension_product_id FROM pension_products', (err, pension_products_results) => {
            if (err) {
                return reject(err);
            }

            // Check if there are any results
            if (pension_products_results.length === 0) {
                return resolve([]); // No products found
            }
   
            // Prepare an array to hold promises for the sum queries
            const sumPromises = pension_products_results.map(product => {
                const productId = product.pension_product_id; // Correct field name

                // Create a promise for each sum query
                return new Promise((resolve, reject) => {
                    pool.query(
                        'SELECT SUM(credit) AS plan_total_credit FROM fin_acc_revenue_accounts WHERE product_pension_plan_id = ? ',
                        [productId],
                        (err, results) => {
                            if (err) {
                                return reject(err);
                            }
                            // Return the result with the product ID
                            resolve({ productId, plan_total_credit: results[0]?.plan_total_credit || 0 });
                        }
                    );
                });
            });

            // Resolve all promises and return the results
            Promise.all(sumPromises)
                .then(sumResults => resolve(sumResults))
                .catch(err => reject(err));
        });
    });
};




crudsObj.getRevenueAccByName = (name) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM fin_acc_revenue_accounts WHERE fin_acc_revenue_accounts_id = ?', [name], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
};

crudsObj.getRevenueAccByIndexName = (name) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM fin_acc_revenue_accounts WHERE index_acc_name = ?', [name], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
};

crudsObj.updateRevenueAcc = (id, fin_acc_account_map_id, index_acc_name_id, index_acc_name, dual_trans_acc_name_id, dual_trans_acc_name, datepaid, datefor, description, cost_center, link, currency, rate_to_usd, value, debit, credit, pmode, requester, confirmed, authorized, comitted, txn_reference, flag, comment) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'UPDATE fin_acc_revenue_accounts SET fin_acc_account_map_id = ?, index_acc_name_id = ?, index_acc_name = ?, dual_trans_acc_name_id = ?, dual_trans_acc_name = ?, datepaid = ?, datefor = ?, description = ?, cost_center = ?, link = ?, currency = ?, rate_to_usd = ?, value = ?, debit = ?, credit = ?, pmode = ?, requester = ?, confirmed = ?, authorized = ?, comitted = ?, txn_reference = ?, flag = ?, comment = ? WHERE fin_acc_revenue_accounts_id = ?',
            [ fin_acc_account_map_id, index_acc_name_id, index_acc_name, dual_trans_acc_name_id, dual_trans_acc_name, datepaid, datefor, description, cost_center, link, currency, rate_to_usd, value, debit, credit, pmode, requester, confirmed, authorized, comitted, txn_reference, flag, comment, id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve({ status: '200', message: 'update successful' });
            }
        );
    });
};

crudsObj.deleteRevenueAcc = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM fin_acc_revenue_accounts WHERE fin_acc_revenue_accounts_id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
};

module.exports = crudsObj;