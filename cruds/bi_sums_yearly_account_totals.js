require("dotenv").config();
const pool = require("./poolfile");

let crudsObj = {};

crudsObj.postYearlyAccountTotal = (
    bi_sum_yearly_account_total_id,
    account_name,
    account_id,
    bi_sum_2021_sub_account_1,
    bi_sum_2021_sub_account_2,
    bi_sum_2021_sub_account_3,
    bi_sum_2021_sub_account_4,
    bi_sum_2021_sub_account_5,
    bi_sum_2022_sub_account_1,
    bi_sum_2022_sub_account_2,
    bi_sum_2022_sub_account_3,
    bi_sum_2022_sub_account_4,
    bi_sum_2022_sub_account_5,
    bi_sum_2023_sub_account_1,
    bi_sum_2023_sub_account_2,
    bi_sum_2023_sub_account_3,
    bi_sum_2023_sub_account_4,
    bi_sum_2023_sub_account_5,
    bi_sum_2024_sub_account_1,
    bi_sum_2024_sub_account_2,
    bi_sum_2024_sub_account_3,
    bi_sum_2024_sub_account_4,
    bi_sum_2024_sub_account_5,
    bi_sum_2025_sub_account_1,
    bi_sum_2025_sub_account_2,
    bi_sum_2025_sub_account_3,
    bi_sum_2025_sub_account_4,
    bi_sum_2025_sub_account_5,
    bi_sum_2026_sub_account_1,
    bi_sum_2026_sub_account_2,
    bi_sum_2026_sub_account_3,
    bi_sum_2026_sub_account_4,
    bi_sum_2026_sub_account_5,
    bi_sum_2027_sub_account_1,
    bi_sum_2027_sub_account_2,
    bi_sum_2027_sub_account_3,
    bi_sum_2027_sub_account_4,
    bi_sum_2027_sub_account_5,
    bi_sum_2028_sub_account_1,
    bi_sum_2028_sub_account_2,
    bi_sum_2028_sub_account_3,
    bi_sum_2028_sub_account_4,
    bi_sum_2028_sub_account_5,
    bi_sum_2029_sub_account_1,
    bi_sum_2029_sub_account_2,
    bi_sum_2029_sub_account_3,
    bi_sum_2029_sub_account_4,
    bi_sum_2029_sub_account_5,
    bi_sum_2030_sub_account_1,
    bi_sum_2030_sub_account_2,
    bi_sum_2030_sub_account_3,
    bi_sum_2030_sub_account_4,
    bi_sum_2030_sub_account_5,
    company_id,
    account_type
) => {
    return new Promise((resolve, reject) => {
        pool.query(
            `INSERT INTO bi_sums_yearly_account_totals (
              
                account_name,
account_id,
bi_sum_2021_sub_account_1,
bi_sum_2021_sub_account_2,
bi_sum_2021_sub_account_3,
bi_sum_2021_sub_account_4,
bi_sum_2021_sub_account_5,
bi_sum_2022_sub_account_1,
bi_sum_2022_sub_account_2,
bi_sum_2022_sub_account_3,
bi_sum_2022_sub_account_4,
bi_sum_2022_sub_account_5,
bi_sum_2023_sub_account_1,
bi_sum_2023_sub_account_2,
bi_sum_2023_sub_account_3,
bi_sum_2023_sub_account_4,
bi_sum_2023_sub_account_5,
bi_sum_2024_sub_account_1,
bi_sum_2024_sub_account_2,
bi_sum_2024_sub_account_3,
bi_sum_2024_sub_account_4,
bi_sum_2024_sub_account_5,
bi_sum_2025_sub_account_1,
bi_sum_2025_sub_account_2,
bi_sum_2025_sub_account_3,
bi_sum_2025_sub_account_4,
bi_sum_2025_sub_account_5,
bi_sum_2026_sub_account_1,
bi_sum_2026_sub_account_2,
bi_sum_2026_sub_account_3,
bi_sum_2026_sub_account_4,
bi_sum_2026_sub_account_5,
bi_sum_2027_sub_account_1,
bi_sum_2027_sub_account_2,
bi_sum_2027_sub_account_3,
bi_sum_2027_sub_account_4,
bi_sum_2027_sub_account_5,
bi_sum_2028_sub_account_1,
bi_sum_2028_sub_account_2,
bi_sum_2028_sub_account_3,
bi_sum_2028_sub_account_4,
bi_sum_2028_sub_account_5,
bi_sum_2029_sub_account_1,
bi_sum_2029_sub_account_2,
bi_sum_2029_sub_account_3,
bi_sum_2029_sub_account_4,
bi_sum_2029_sub_account_5,
bi_sum_2030_sub_account_1,
bi_sum_2030_sub_account_2,
bi_sum_2030_sub_account_3,
bi_sum_2030_sub_account_4,
bi_sum_2030_sub_account_5,
company_id,
account_type
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
              ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
              ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
              ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
              ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
               ?, ?, ?, ?)`,
            [
                
                account_name,
account_id,
bi_sum_2021_sub_account_1,
bi_sum_2021_sub_account_2,
bi_sum_2021_sub_account_3,
bi_sum_2021_sub_account_4,
bi_sum_2021_sub_account_5,
bi_sum_2022_sub_account_1,
bi_sum_2022_sub_account_2,
bi_sum_2022_sub_account_3,
bi_sum_2022_sub_account_4,
bi_sum_2022_sub_account_5,
bi_sum_2023_sub_account_1,
bi_sum_2023_sub_account_2,
bi_sum_2023_sub_account_3,
bi_sum_2023_sub_account_4,
bi_sum_2023_sub_account_5,
bi_sum_2024_sub_account_1,
bi_sum_2024_sub_account_2,
bi_sum_2024_sub_account_3,
bi_sum_2024_sub_account_4,
bi_sum_2024_sub_account_5,
bi_sum_2025_sub_account_1,
bi_sum_2025_sub_account_2,
bi_sum_2025_sub_account_3,
bi_sum_2025_sub_account_4,
bi_sum_2025_sub_account_5,
bi_sum_2026_sub_account_1,
bi_sum_2026_sub_account_2,
bi_sum_2026_sub_account_3,
bi_sum_2026_sub_account_4,
bi_sum_2026_sub_account_5,
bi_sum_2027_sub_account_1,
bi_sum_2027_sub_account_2,
bi_sum_2027_sub_account_3,
bi_sum_2027_sub_account_4,
bi_sum_2027_sub_account_5,
bi_sum_2028_sub_account_1,
bi_sum_2028_sub_account_2,
bi_sum_2028_sub_account_3,
bi_sum_2028_sub_account_4,
bi_sum_2028_sub_account_5,
bi_sum_2029_sub_account_1,
bi_sum_2029_sub_account_2,
bi_sum_2029_sub_account_3,
bi_sum_2029_sub_account_4,
bi_sum_2029_sub_account_5,
bi_sum_2030_sub_account_1,
bi_sum_2030_sub_account_2,
bi_sum_2030_sub_account_3,
bi_sum_2030_sub_account_4,
bi_sum_2030_sub_account_5,
company_id,
account_type
            ],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve({ status: "200", message: "Saving successful", result });
            }
        );
    });
};

crudsObj.getYearlyAccountTotals = () => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM bi_sums_yearly_account_totals", (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};



crudsObj.getYearlyAccountTotalsJoinedByAccMapAccInfo = () => {
    return new Promise((resolve, reject) => {
        pool.query(
            `SELECT year.*, map.*, info.* 
            FROM fin_acc_account_map AS map 
            JOIN bi_sums_yearly_account_totals AS year ON year.account_id = map.fin_acc_account_map_id
            JOIN fin_acc_account_info AS info ON map.fin_acc_account_info_id = info.fin_acc_account_info_id 
            `, // Ensure correct field reference
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            }
        );
    });
};







crudsObj.getYearlyAccountTotalById = (bi_sum_yearly_account_total_id) => {
    return new Promise((resolve, reject) => {
        pool.query(
            "SELECT * FROM bi_sums_yearly_account_totals WHERE bi_sum_yearly_account_total_id = ?",
            [bi_sum_yearly_account_total_id],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            }
        );
    });
};
crudsObj.updateYearlyAccountTotal = (bi_sum_yearly_account_total_id , updatedValues) => {
    const {
       
        account_name,
        account_id,
        bi_sum_2021_sub_account_1,
        bi_sum_2021_sub_account_2,
        bi_sum_2021_sub_account_3,
        bi_sum_2021_sub_account_4,
        bi_sum_2021_sub_account_5,
        bi_sum_2022_sub_account_1,
        bi_sum_2022_sub_account_2,
        bi_sum_2022_sub_account_3,
        bi_sum_2022_sub_account_4,
        bi_sum_2022_sub_account_5,
        bi_sum_2023_sub_account_1,
        bi_sum_2023_sub_account_2,
        bi_sum_2023_sub_account_3,
        bi_sum_2023_sub_account_4,
        bi_sum_2023_sub_account_5,
        bi_sum_2024_sub_account_1,
        bi_sum_2024_sub_account_2,
        bi_sum_2024_sub_account_3,
        bi_sum_2024_sub_account_4,
        bi_sum_2024_sub_account_5,
        bi_sum_2025_sub_account_1,
        bi_sum_2025_sub_account_2,
        bi_sum_2025_sub_account_3,
        bi_sum_2025_sub_account_4,
        bi_sum_2025_sub_account_5,
        bi_sum_2026_sub_account_1,
        bi_sum_2026_sub_account_2,
        bi_sum_2026_sub_account_3,
        bi_sum_2026_sub_account_4,
        bi_sum_2026_sub_account_5,
        bi_sum_2027_sub_account_1,
        bi_sum_2027_sub_account_2,
        bi_sum_2027_sub_account_3,
        bi_sum_2027_sub_account_4,
        bi_sum_2027_sub_account_5,
        bi_sum_2028_sub_account_1,
        bi_sum_2028_sub_account_2,
        bi_sum_2028_sub_account_3,
        bi_sum_2028_sub_account_4,
        bi_sum_2028_sub_account_5,
        bi_sum_2029_sub_account_1,
        bi_sum_2029_sub_account_2,
        bi_sum_2029_sub_account_3,
        bi_sum_2029_sub_account_4,
        bi_sum_2029_sub_account_5,
        bi_sum_2030_sub_account_1,
        bi_sum_2030_sub_account_2,
        bi_sum_2030_sub_account_3,
        bi_sum_2030_sub_account_4,
        bi_sum_2030_sub_account_5,
        company_id,
        account_type
    } = updatedValues;

    return new Promise((resolve, reject) => {
        pool.query(
            `UPDATE bi_sums_yearly_account_totals SET 
              
             
account_name=?,
account_id=?,
bi_sum_2021_sub_account_1=?,
bi_sum_2021_sub_account_2=?,
bi_sum_2021_sub_account_3=?,
bi_sum_2021_sub_account_4=?,
bi_sum_2021_sub_account_5=?,
bi_sum_2022_sub_account_1=?,
bi_sum_2022_sub_account_2=?,
bi_sum_2022_sub_account_3=?,
bi_sum_2022_sub_account_4=?,
bi_sum_2022_sub_account_5=?,
bi_sum_2023_sub_account_1=?,
bi_sum_2023_sub_account_2=?,
bi_sum_2023_sub_account_3=?,
bi_sum_2023_sub_account_4=?,
bi_sum_2023_sub_account_5=?,
bi_sum_2024_sub_account_1=?,
bi_sum_2024_sub_account_2=?,
bi_sum_2024_sub_account_3=?,
bi_sum_2024_sub_account_4=?,
bi_sum_2024_sub_account_5=?,
bi_sum_2025_sub_account_1=?,
bi_sum_2025_sub_account_2=?,
bi_sum_2025_sub_account_3=?,
bi_sum_2025_sub_account_4=?,
bi_sum_2025_sub_account_5=?,
bi_sum_2026_sub_account_1=?,
bi_sum_2026_sub_account_2=?,
bi_sum_2026_sub_account_3=?,
bi_sum_2026_sub_account_4=?,
bi_sum_2026_sub_account_5=?,
bi_sum_2027_sub_account_1=?,
bi_sum_2027_sub_account_2=?,
bi_sum_2027_sub_account_3=?,
bi_sum_2027_sub_account_4=?,
bi_sum_2027_sub_account_5=?,
bi_sum_2028_sub_account_1=?,
bi_sum_2028_sub_account_2=?,
bi_sum_2028_sub_account_3=?,
bi_sum_2028_sub_account_4=?,
bi_sum_2028_sub_account_5=?,
bi_sum_2029_sub_account_1=?,
bi_sum_2029_sub_account_2=?,
bi_sum_2029_sub_account_3=?,
bi_sum_2029_sub_account_4=?,
bi_sum_2029_sub_account_5=?,
bi_sum_2030_sub_account_1=?,
bi_sum_2030_sub_account_2=?,
bi_sum_2030_sub_account_3=?,
bi_sum_2030_sub_account_4=?,
bi_sum_2030_sub_account_5=?,
company_id=?,
account_type=?
            WHERE bi_sum_yearly_account_total_id  = ?`,
            [
               
                account_name,
account_id,
bi_sum_2021_sub_account_1,
bi_sum_2021_sub_account_2,
bi_sum_2021_sub_account_3,
bi_sum_2021_sub_account_4,
bi_sum_2021_sub_account_5,
bi_sum_2022_sub_account_1,
bi_sum_2022_sub_account_2,
bi_sum_2022_sub_account_3,
bi_sum_2022_sub_account_4,
bi_sum_2022_sub_account_5,
bi_sum_2023_sub_account_1,
bi_sum_2023_sub_account_2,
bi_sum_2023_sub_account_3,
bi_sum_2023_sub_account_4,
bi_sum_2023_sub_account_5,
bi_sum_2024_sub_account_1,
bi_sum_2024_sub_account_2,
bi_sum_2024_sub_account_3,
bi_sum_2024_sub_account_4,
bi_sum_2024_sub_account_5,
bi_sum_2025_sub_account_1,
bi_sum_2025_sub_account_2,
bi_sum_2025_sub_account_3,
bi_sum_2025_sub_account_4,
bi_sum_2025_sub_account_5,
bi_sum_2026_sub_account_1,
bi_sum_2026_sub_account_2,
bi_sum_2026_sub_account_3,
bi_sum_2026_sub_account_4,
bi_sum_2026_sub_account_5,
bi_sum_2027_sub_account_1,
bi_sum_2027_sub_account_2,
bi_sum_2027_sub_account_3,
bi_sum_2027_sub_account_4,
bi_sum_2027_sub_account_5,
bi_sum_2028_sub_account_1,
bi_sum_2028_sub_account_2,
bi_sum_2028_sub_account_3,
bi_sum_2028_sub_account_4,
bi_sum_2028_sub_account_5,
bi_sum_2029_sub_account_1,
bi_sum_2029_sub_account_2,
bi_sum_2029_sub_account_3,
bi_sum_2029_sub_account_4,
bi_sum_2029_sub_account_5,
bi_sum_2030_sub_account_1,
bi_sum_2030_sub_account_2,
bi_sum_2030_sub_account_3,
bi_sum_2030_sub_account_4,
bi_sum_2030_sub_account_5,
company_id,
account_type,
bi_sum_yearly_account_total_id 
            ],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve({ status: "200", message: "Update successful", result });
            }
        );
    });
};

crudsObj.deleteYearlyAccountTotal = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(
            "DELETE FROM bi_sums_yearly_account_totals WHERE bi_sum_yearly_account_total_id = ?",
            [id],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            }
        );
    });
};

module.exports = crudsObj;