require ("dotenv").config();
const pool = require("./poolfile");

let crudsObj = {};
crudsObj.postfinAccInvestmentFundDetails = (
  name,
  purpose,
  created_by,
  created_date,
  authorised_by_1,
  authorised_by_2,
  authorised_by_3,
  bank_id
) => {
  return new Promise((resolve, reject) => {
      pool.query(
          `INSERT INTO fin_acc_investment_fund_details (
              name,
              purpose,
              created_by,
              created_date,
              authorised_by_1,
              authorised_by_2,
              authorised_by_3,
              bank_id
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [
              name,
              purpose,
              created_by,
              created_date,
              authorised_by_1,
              authorised_by_2,
              authorised_by_3,
              bank_id
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

crudsObj.getfinAccInvestmentFundDetails = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM fin_acc_investment_fund_details", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};



crudsObj.getfinAccInvestmentFundDetailsJoined = (investment_fund_details_id) => {
  return new Promise((resolve, reject) => {
      const query = `
          SELECT 
              details.*, 
              map.*, 
              banks.* 
          FROM 
              fin_acc_investment_fund_details AS details 
          JOIN 
              fin_acc_account_map AS map ON details.bank_id = map.fin_acc_account_map_id  
          JOIN 
              cooperate_banks AS banks ON map.cooperate_bank_id = banks.hr_bank_id
          WHERE 
              investment_fund_details_id = ?
      `;

      // Correctly pass the parameters array to the query
      pool.query(query, [investment_fund_details_id], (err, results) => {
          if (err) {
              console.error("Error fetching investment fund details:", err); // Added error logging
              return reject(err);
          }
          return resolve(results);
      });
  });
};




crudsObj.getfinAccInvestmentFundDetailsById = (investment_fund_details_id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM fin_acc_investment_fund_details WHERE investment_fund_details_id = ?",
      [investment_fund_details_id], // Correct parameter usage
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};


crudsObj.updateAuthorised1finAccInvestmentFundDetail = (
  investment_fund_details_id,
  user_id
) => {
  // Ensure user_id is provided
  if (!user_id) {
    return Promise.reject({
      status: "400",
      message: "User ID is required",
    });
  }

  console.log("Updating confirmed field for appraisal ID:", investment_fund_details_id, "with user ID:", user_id);

  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE fin_acc_investment_fund_details SET 
            authorised_by_1 = ? 
            WHERE investment_fund_details_id = ?`,
      [
        user_id,  // The user ID to update the committed field
        investment_fund_details_id // The appraisal ID for the WHERE clause
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


crudsObj.updateAuthorised2finAccInvestmentFundDetail = (
  investment_fund_details_id,
  user_id
) => {
  // Ensure user_id is provided
  if (!user_id) {
    return Promise.reject({
      status: "400",
      message: "User ID is required",
    });
  }

  console.log("Updating confirmed field for appraisal ID:", investment_fund_details_id, "with user ID:", user_id);

  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE fin_acc_investment_fund_details SET 
            authorised_by_2 = ? 
            WHERE investment_fund_details_id = ?`,
      [
        user_id,  // The user ID to update the committed field
        investment_fund_details_id // The appraisal ID for the WHERE clause
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


crudsObj.updateAuthorised3finAccInvestmentFundDetail = (
  investment_fund_details_id,
  user_id
) => {
  // Ensure user_id is provided
  if (!user_id) {
    return Promise.reject({
      status: "400",
      message: "User ID is required",
    });
  }

  console.log("Updating confirmed field for appraisal ID:", investment_fund_details_id, "with user ID:", user_id);

  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE fin_acc_investment_fund_details SET 
            authorised_by_3 = ? 
            WHERE investment_fund_details_id = ?`,
      [
        user_id,  // The user ID to update the committed field
        investment_fund_details_id // The appraisal ID for the WHERE clause
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


crudsObj.updatefinAccInvestmentFundDetails = (
  investment_fund_details_id,
  updatedValues
) => {
  const {
    
    name,
    purpose,
    created_by,
    created_date,
    authorised_by_1,
    authorised_by_2,
    authorised_by_3,
    bank_id
  } = updatedValues;

  console.log("Updated values:", updatedValues);

  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE fin_acc_investment_fund_details SET 
            name = ?,
            purpose = ?,
            created_by = ?,
            created_date = ?,
            authorised_by_1 = ?,
            authorised_by_2 = ?,
            authorised_by_3 = ?,
            bank_id = ?
        WHERE  investment_fund_details_id = ?`,
      [
        
        name,
        purpose,
        created_by,
        created_date,
        authorised_by_1,
        authorised_by_2,
        authorised_by_3,
        bank_id ,
        investment_fund_details_id
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

crudsObj.deletefinAccInvestmentFundDetails = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "DELETE FROM fin_acc_investment_fund_details WHERE investment_fund_details_id = ?",
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
