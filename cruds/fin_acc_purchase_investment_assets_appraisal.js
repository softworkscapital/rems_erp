require ("dotenv").config();
const pool = require("./poolfile");

let crudsObj = {};

crudsObj.postFinAccPurchaseInvestmentAssetsAppraisal = (
  fin_acc_purchase_investment_assets_appraisal_id,
  fin_acc_investment_assets_account_id,
  asset_class,
  type_of_instrument,
  name_of_issuer,
  date_of_issue,
  date_of_purchase,
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
  roi,
  profitability_index,
  payback_period,
  irr,
  npv,
  payback,
  field_discount_rate,
  discounted_cashflow,
  appraisal_recommendations_1,
  appraisal_recommendations_2,
  appraisal_recommendations_3,
  key_notes,
  investment_assessment_report_url_1,
  investment_assessment_report_url_2,
  investment_assessment_report_url_3,
  investment_assessment_report_url_4,
  investment_assessment_report_url_5,
  investment_assessment_report_notes_1,
  investment_assessment_report_notes_2,
  investment_assessment_report_notes_3,
  investment_assessment_report_notes_4,
  investment_assessment_report_notes_5
) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO fin_acc_purchase_investment_assets_appraisal (
       fin_acc_investment_assets_account_id,
  asset_class,
  type_of_instrument,
  name_of_issuer,
  date_of_issue,
  date_of_purchase,
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
  roi,
  profitability_index,
  payback_period,
  irr,
  npv,
  payback,
  field_discount_rate,
  discounted_cashflow,
  appraisal_recommendations_1,
  appraisal_recommendations_2,
  appraisal_recommendations_3,
  key_notes,
  investment_assessment_report_url_1,
  investment_assessment_report_url_2,
  investment_assessment_report_url_3,
  investment_assessment_report_url_4,
  investment_assessment_report_url_5,
  investment_assessment_report_notes_1,
  investment_assessment_report_notes_2,
  investment_assessment_report_notes_3,
  investment_assessment_report_notes_4,
  investment_assessment_report_notes_5
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
         ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
          ?, ?, ?, ?, ?, ?, ?, ?,?,?,
          ?,?)`,
      [
        fin_acc_investment_assets_account_id,
        asset_class,
        type_of_instrument,
        name_of_issuer,
        date_of_issue,
        date_of_purchase,
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
        roi,
        profitability_index,
        payback_period,
        irr,
        npv,
        payback,
        field_discount_rate,
        discounted_cashflow,
        appraisal_recommendations_1,
        appraisal_recommendations_2,
        appraisal_recommendations_3,
        key_notes,
        investment_assessment_report_url_1,
        investment_assessment_report_url_2,
        investment_assessment_report_url_3,
        investment_assessment_report_url_4,
        investment_assessment_report_url_5,
        investment_assessment_report_notes_1,
        investment_assessment_report_notes_2,
        investment_assessment_report_notes_3,
        investment_assessment_report_notes_4,
        investment_assessment_report_notes_5
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

crudsObj.getFinAccPurchaseInvestmentAssetsAppraisals = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM fin_acc_purchase_investment_assets_appraisal", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

crudsObj.getFinAccPurchaseInvestmentAssetsAppraisalById = (fin_acc_purchase_investment_assets_appraisal_id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM fin_acc_purchase_investment_assets_appraisal WHERE fin_acc_purchase_investment_assets_appraisal_id = ?",
      [fin_acc_purchase_investment_assets_appraisal_id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};


crudsObj.updateCommittedAssetAppraisal = (
  fin_acc_purchase_investment_assets_appraisal_id,
  user_id
) => {
  // Ensure user_id is provided
  if (!user_id) {
    return Promise.reject({
      status: "400",
      message: "User ID is required",
    });
  }

  console.log("Updating committed field for appraisal ID:", fin_acc_purchase_investment_assets_appraisal_id, "with user ID:", user_id);

  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE fin_acc_purchase_investment_assets_appraisal SET 
            committed = ? 
            WHERE fin_acc_purchase_investment_assets_appraisal_id = ?`,
      [
        user_id,  // The user ID to update the committed field
        fin_acc_purchase_investment_assets_appraisal_id // The appraisal ID for the WHERE clause
      ],
      (err, result) => {
        if (err) {
          console.error("Error updating committed field:", err);
          return reject({
            status: "500",
            message: "Internal server error",
            error: err,
          });
        }

        console.log("Database update result:", result);

        if (result.affectedRows === 0) {
          return resolve({
            status: "404",
            message: "Asset appraisal not found or no changes made",
          });
        }

        return resolve({
          status: "200",
          message: "Update successful",
          result,
        });
      }
    );
  });
};



crudsObj.updateAuthorizedAssetAppraisal = (
  fin_acc_purchase_investment_assets_appraisal_id,
  user_id
) => {
  // Ensure user_id is provided
  if (!user_id) {
    return Promise.reject({
      status: "400",
      message: "User ID is required",
    });
  }

  console.log("Updating committed field for appraisal ID:", fin_acc_purchase_investment_assets_appraisal_id, "with user ID:", user_id);

  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE fin_acc_purchase_investment_assets_appraisal SET 
            authorized = ? 
            WHERE fin_acc_purchase_investment_assets_appraisal_id = ?`,
      [
        user_id,  // The user ID to update the committed field
        fin_acc_purchase_investment_assets_appraisal_id // The appraisal ID for the WHERE clause
      ],
      (err, result) => {
        if (err) {
          console.error("Error updating committed field:", err);
          return reject({
            status: "500",
            message: "Internal server error",
            error: err,
          });
        }

        console.log("Database update result:", result);

        if (result.affectedRows === 0) {
          return resolve({
            status: "404",
            message: "Asset appraisal not found or no changes made",
          });
        }

        return resolve({
          status: "200",
          message: "Update successful",
          result,
        });
      }
    );
  });
};




crudsObj.updateConfirmedAssetAppraisal = (
  fin_acc_purchase_investment_assets_appraisal_id,
  user_id
) => {
  // Ensure user_id is provided
  if (!user_id) {
    return Promise.reject({
      status: "400",
      message: "User ID is required",
    });
  }

  console.log("Updating confirmed field for appraisal ID:", fin_acc_purchase_investment_assets_appraisal_id, "with user ID:", user_id);

  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE fin_acc_purchase_investment_assets_appraisal SET 
            confirmed = ? 
            WHERE fin_acc_purchase_investment_assets_appraisal_id = ?`,
      [
        user_id,  // The user ID to update the committed field
        fin_acc_purchase_investment_assets_appraisal_id // The appraisal ID for the WHERE clause
      ],
      (err, result) => {
        if (err) {
          console.error("Error updating committed field:", err);
          return reject({
            status: "500",
            message: "Internal server error",
            error: err,
          });
        }

        console.log("Database update result:", result);

        if (result.affectedRows === 0) {
          return resolve({
            status: "404",
            message: "Asset appraisal not found or no changes made",
          });
        }

        return resolve({
          status: "200",
          message: "Update successful",
          result,
        });
      }
    );
  });
};



crudsObj.updateFinAccPurchaseInvestmentAssetsAppraisal = (
  fin_acc_purchase_investment_assets_appraisal_id,
  updatedValues
) => {
  const {
    fin_acc_investment_assets_account_id,
    asset_class,
    type_of_instrument,
    name_of_issuer,
    date_of_issue,
    date_of_purchase,
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
    roi,
    profitability_index,
    payback_period,
    irr,
    npv,
    payback,
    field_discount_rate,
    discounted_cashflow,
    appraisal_recommendations_1,
    appraisal_recommendations_2,
    appraisal_recommendations_3,
    key_notes,
    investment_assessment_report_url_1,
    investment_assessment_report_url_2,
    investment_assessment_report_url_3,
    investment_assessment_report_url_4,
    investment_assessment_report_url_5,
    investment_assessment_report_notes_1,
    investment_assessment_report_notes_2,
    investment_assessment_report_notes_3,
    investment_assessment_report_notes_4,
    investment_assessment_report_notes_5,
    
    
  } = updatedValues;

  console.log("Updated values:", updatedValues);

  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE fin_acc_purchase_investment_assets_appraisal SET 
            fin_acc_investment_assets_account_id = ?,
            asset_class = ?,
            type_of_instrument = ?,
            name_of_issuer = ?,
            date_of_issue = ?,
            date_of_purchase = ?,
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
            fin_acc_investment_fund_details_id = ?,  
            roi = ?,
            profitability_index = ?,
            payback_period = ?,
            irr = ?,
            npv = ?,
            payback = ?,
            field_discount_rate = ?,
            discounted_cashflow = ?,
            appraisal_recommendations_1 = ?,
            appraisal_recommendations_2 = ?,
            appraisal_recommendations_3 = ?,
            key_notes = ?,
            investment_assessment_report_url_1 = ?,
            investment_assessment_report_url_2  = ?,
            investment_assessment_report_url_3  = ?,
            investment_assessment_report_url_4  = ?,
            investment_assessment_report_url_5  = ?,
            investment_assessment_report_notes_1  = ?,
            investment_assessment_report_notes_2  = ?,
            investment_assessment_report_notes_3 = ?,
            investment_assessment_report_notes_4 = ?,
            investment_assessment_report_notes_5 = ?
                
                WHERE fin_acc_purchase_investment_assets_appraisal_id = ?`,
      [
        fin_acc_investment_assets_account_id,
        asset_class,
        type_of_instrument,
        name_of_issuer,
        date_of_issue,
        date_of_purchase,
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
 
  roi,
  profitability_index,
  payback_period,
  irr,
  npv,
  payback,
  field_discount_rate,
  discounted_cashflow,
  appraisal_recommendations_1,
  appraisal_recommendations_2,
  appraisal_recommendations_3,
  key_notes,
  investment_assessment_report_url_1,
  investment_assessment_report_url_2,
  investment_assessment_report_url_3,
  investment_assessment_report_url_4,
  investment_assessment_report_url_5,
  investment_assessment_report_notes_1,
  investment_assessment_report_notes_2,
  investment_assessment_report_notes_3,
  investment_assessment_report_notes_4,
  investment_assessment_report_notes_5,
  fin_acc_purchase_investment_assets_appraisal_id
      ],
      (err, result) => {
        if (err) {
          console.error("Error updating member:", err);
          return reject(err);
        }
        if (result.affectedRows === 0) {
          return resolve({
            status: "404",
            message: "Customer admin chat not found or no changes made",
          });
        }
        return resolve({ status: "200", message: "Update successful", result });
      }
    );
  });
};

crudsObj.deleteFinAccPurchaseInvestmentAssetsAppraisal = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "DELETE FROM fin_acc_purchase_investment_assets_appraisal WHERE fin_acc_purchase_investment_assets_appraisal_id = ?",
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
