require("dotenv").config();
const pool = require("./poolfile");

let crudsObj = {};

crudsObj.postFinAccInvestmentAssetsAccount = (
  fin_acc_investment_assets_account_id, // This should be included if it's not auto-incremented
  fin_acc_purchase_investment_assets_appraisal_id,
  asset_class,
  type_of_instrument,
  name_of_issuer,
  date_of_issue,
  date_of_purchase,
  fin_acc_account_map_id,
  index_acc_name_id,
  index_acc_name,
  dual_trans_acc_name_id,
  dual_trans_acc_name,
  maturity_date,
  purchase_price,
  face_value_of_investment,
  market_value,
  intrinsic_value,
  future_value_10yrs,
  interest_received,
  dividend_received,
  investment_location,
  sub_account_1,
  sub_account_2,
  sub_account_3,
  sub_account_4,
  sub_account_5,
  datepaid,
  datefor,
  description,
  timerec,
  deposit,
  folio,
  company_id,
  branch_id,
  sync_status,
  sync_date_time,
  sales_shift_id,
  operator,
  cost_center,
  link,
  currency,
  rate_to_usd,
  value,
  debit,
  credit,
  balance,
  total_balance,
  pmode,
  requester,
  confirmed,
  authorized,
  committed,
  txn_reference,
  flag,
  comment,
  fin_acc_investment_fund_details_id
) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO fin_acc_investment_assets_account (
          fin_acc_purchase_investment_assets_appraisal_id,
          asset_class,
          type_of_instrument,
          name_of_issuer,
          date_of_issue,
          date_of_purchase,
          fin_acc_account_map_id,
  index_acc_name_id,
  index_acc_name,
  dual_trans_acc_name_id,
  dual_trans_acc_name,
          maturity_date,
          purchase_price,
          face_value_of_investment,
          market_value,
          intrinsic_value,
          future_value_10yrs,
          interest_received,
          dividend_received,
          investment_location,
          sub_account_1,
          sub_account_2,
          sub_account_3,
          sub_account_4,
          sub_account_5,
          datepaid,
          datefor,
          description,
          timerec,
          deposit,
          folio,
          company_id,
          branch_id,
          sync_status,
          sync_date_time,
          sales_shift_id,
          operator,
          cost_center,
          link,
          currency,
          rate_to_usd,
          value,
          debit,
          credit,
          balance,
          total_balance,
          pmode,
          requester,
          confirmed,
          authorized,
          committed,
          txn_reference,
          flag,
          comment,
          fin_acc_investment_fund_details_id
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
       ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
         ?, ?, ?, ?, ?, ?, ?,?,?,?,
         ?,?,?,?,?)`,
      [
        fin_acc_purchase_investment_assets_appraisal_id,
        asset_class,
        type_of_instrument,
        name_of_issuer,
        date_of_issue,
        date_of_purchase,
        fin_acc_account_map_id,
  index_acc_name_id,
  index_acc_name,
  dual_trans_acc_name_id,
  dual_trans_acc_name,
        maturity_date,
        purchase_price,
        face_value_of_investment,
        market_value,
        intrinsic_value,
        future_value_10yrs,
        interest_received,
        dividend_received,
        investment_location,
        sub_account_1,
        sub_account_2,
        sub_account_3,
        sub_account_4,
        sub_account_5,
        datepaid,
        datefor,
        description,
        timerec,
        deposit,
        folio,
        company_id,
        branch_id,
        sync_status,
        sync_date_time,
        sales_shift_id,
        operator,
        cost_center,
        link,
        currency,
        rate_to_usd,
        value,
        debit,
        credit,
        balance,
        total_balance,
        pmode,
        requester,
        confirmed,
        authorized,
        committed,
        txn_reference,
        flag,
        comment,
        fin_acc_investment_fund_details_id 
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

crudsObj.getFinAccInvestmentAssetsAccounts = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM fin_acc_investment_assets_account",
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

crudsObj.getFinAccInvestmentAssetsAccountById = (
  fin_acc_investment_assets_account_id
) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM fin_acc_investment_assets_account WHERE fin_acc_investment_assets_account_id = ?",
      [fin_acc_investment_assets_account_id], // Use the correct parameter here
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};



crudsObj.getFinAccInvestmentAssetsAccountJoinedInvestmentFundById = (
  fin_acc_investment_fund_details_id
) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM fin_acc_account_map AS mapped_acccount JOIN fin_acc_investment_assets_account AS asset ON mapped_acccount.fin_acc_account_map_id =asset.fin_acc_account_map_id JOIN fin_acc_investment_fund_details AS fund ON asset.fin_acc_investment_fund_details_id = fund.investment_fund_details_id JOIN bi_sums_current_day_account_totals AS current ON asset.fin_acc_account_map_id = current.account_id JOIN bi_sums_monthly_account_totals AS months ON asset.fin_acc_account_map_id = months.account_id JOIN bi_sums_yearly_account_totals AS years ON asset.fin_acc_account_map_id = years.account_id WHERE asset.fin_acc_investment_fund_details_id = ?`,
      [fin_acc_investment_fund_details_id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};


crudsObj.getFinAccInvestmentAssetsAccountJoinedInvestmentFund = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM fin_acc_account_map AS mapped_acccount JOIN fin_acc_investment_assets_account AS asset ON mapped_acccount.fin_acc_account_map_id =asset.fin_acc_account_map_id JOIN fin_acc_investment_fund_details AS fund ON asset.fin_acc_investment_fund_details_id = fund.investment_fund_details_id JOIN bi_sums_current_day_account_totals AS current ON asset.fin_acc_account_map_id = current.account_id JOIN bi_sums_monthly_account_totals AS months ON asset.fin_acc_account_map_id = months.account_id JOIN bi_sums_yearly_account_totals AS years ON asset.fin_acc_account_map_id = years.account_id `,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};







crudsObj.updateFinAccInvestmentAssetsAccount = (
  fin_acc_investment_assets_account_id,
  updatedValues
) => {
  const {
    fin_acc_purchase_investment_assets_appraisal_id,
    asset_class,
    type_of_instrument,
    name_of_issuer,
    date_of_issue,
    date_of_purchase,
    fin_acc_account_map_id,
    index_acc_name_id,
    index_acc_name,
    dual_trans_acc_name_id,
    dual_trans_acc_name,
    maturity_date,
    purchase_price,
    face_value_of_investment,
    market_value,
    intrinsic_value,
    future_value_10yrs,
    interest_received,
    dividend_received,
    investment_location,
    sub_account_1,
    sub_account_2,
    sub_account_3,
    sub_account_4,
    sub_account_5,
    datepaid,
    datefor,
    description,
    timerec,
    deposit,
    folio,
    company_id,
    branch_id,
    sync_status,
    sync_date_time,
    sales_shift_id,
    operator,
    cost_center,
    link,
    currency,
    rate_to_usd,
    value,
    debit,
    credit,
    balance,
    total_balance,
    pmode,
    requester,
    confirmed,
    authorized,
    committed,
    txn_reference,
    flag,
    comment,
    fin_acc_investment_fund_details_id
  } = updatedValues;

  console.log("Updated values:", updatedValues);

  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE fin_acc_investment_assets_account SET 
            fin_acc_purchase_investment_assets_appraisal_id = ?,
            asset_class = ?,
            type_of_instrument = ?,
            name_of_issuer = ?,
            date_of_issue = ?,
            date_of_purchase = ?,
            fin_acc_account_map_id = ?,
            index_acc_name_id = ?,
            index_acc_name = ?,
            dual_trans_acc_name_id = ?,
            dual_trans_acc_name = ?,
            maturity_date = ?,
            purchase_price = ?,
            face_value_of_investment = ?,
            market_value = ?,
            intrinsic_value = ?,
            future_value_10yrs = ?,
            interest_received = ?,
            dividend_received = ?,
            investment_location = ?,
            sub_account_1 = ?,
            sub_account_2 = ?,
            sub_account_3 = ?,
            sub_account_4 = ?,
            sub_account_5 = ?,
            datepaid = ?,
            datefor = ?,
            description = ?,
            timerec = ?,
            deposit = ?,
            folio = ?,
            company_id = ?,
            branch_id = ?,
            sync_status = ?,
            sync_date_time = ?,
            sales_shift_id = ?,
            operator = ?,
            cost_center = ?,
            link = ?,
            currency = ?,
            rate_to_usd = ?,
            value = ?,
            debit = ?,
            credit = ?,
            balance = ?,
            total_balance = ?,
            pmode = ?,
            requester = ?,
            confirmed = ?,
            authorized = ?,
            committed = ?,
            txn_reference = ?,
            flag = ?,
            comment = ?,
            fin_acc_investment_fund_details_id = ?
      WHERE fin_acc_investment_assets_account_id = ?`,
      [
        fin_acc_purchase_investment_assets_appraisal_id,
        asset_class,
        type_of_instrument,
        name_of_issuer,
        date_of_issue,
        date_of_purchase,
        fin_acc_account_map_id,
        index_acc_name_id,
        index_acc_name,
        dual_trans_acc_name_id,
        dual_trans_acc_name,
        maturity_date,
        purchase_price,
        face_value_of_investment,
        market_value,
        intrinsic_value,
        future_value_10yrs,
        interest_received,
        dividend_received,
        investment_location,
        sub_account_1,
        sub_account_2,
        sub_account_3,
        sub_account_4,
        sub_account_5,
        datepaid,
        datefor,
        description,
        timerec,
        deposit,
        folio,
        company_id,
        branch_id,
        sync_status,
        sync_date_time,
        sales_shift_id,
        operator,
        cost_center,
        link,
        currency,
        rate_to_usd,
        value,
        debit,
        credit,
        balance,
        total_balance,
        pmode,
        requester,
        confirmed,
        authorized,
        committed,
        txn_reference,
        flag,
        comment,
        fin_acc_investment_fund_details_id,
        fin_acc_investment_assets_account_id // last parameter for the WHERE clause
      ],
      (err, result) => {
        if (err) {
          console.error("Error updating member:", err);
          return reject(err);
        }
        if (result.affectedRows === 0) {
          return resolve({
            status: "404",
            message: "Record not found or no changes made",
          });
        }
        return resolve({ status: "200", message: "Update successful", result });
      }
    );
  });
};
crudsObj.deleteFinAccInvestmentAssetsAccount = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "DELETE FROM fin_acc_investment_assets_account WHERE fin_acc_investment_assets_account_id = ?",
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
