require("dotenv").config();
const pool = require("./poolfile");

let crudsObj = {};

crudsObj.postCooperatebank = (
    hr_bank_id,
    bank_name,
    acc_name,
    acc_number,
    branch_name,
    branch_code,
    swift_code
) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO cooperate_banks (  
      
        bank_name,
        acc_name,
        acc_number,
        branch_name,
        branch_code,
        swift_code	
      ) VALUES (?, ?, ?, ?, ?,?)`,
      [
       
        bank_name,
        acc_name,
        acc_number,
        branch_name,
        branch_code,
        swift_code
      ],
      (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve({ status: "200", message: "saving successful", result });
      }
    );
  });
};

crudsObj.getCooperatebanks = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM cooperate_banks", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

crudsObj.getCooperatebankById = (hr_bank_id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM cooperate_banks WHERE hr_bank_id = ?",
      [hr_bank_id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

// crudsObj.getHr_bankByEmail = (email) => {
//   return new Promise((resolve, reject) => {
//     pool.query(
//       "SELECT * FROM hr_banks WHERE email = ?",
//       [email],
//       (err, results) => {
//         if (err) {
//           return reject(err);
//         }
//         return resolve(results);
//       }
//     );
//   });
// };

crudsObj.updateCooperatebank = (hr_bank_id, updatedValues) => {
  const {
   
    bank_name,
    acc_name,
    acc_number,
    branch_name,
    branch_code,
    swift_code,
  } = updatedValues;

  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE cooperate_banks SET 
                    
                    bank_name =?,
                    acc_name =?,
                    acc_number =?,
                    branch_name =?,
                    branch_code =?,
                    swift_code =?
            WHERE hr_bank_id = ?`,
      [
       
        bank_name,
        acc_name,
        acc_number,
        branch_name,
        branch_code,
        swift_code,
        hr_bank_id, // Make sure hr_employee_record_id is at the end
      ],
      (err, result) => {
        if (err) {
          console.error("Error updating member:", err);
          return reject(err); // Reject with error for further handling
        }
        if (result.affectedRows === 0) {
          return resolve({
            status: "404",
            message: "Hr_employee_record not found or no changes made",
          });
        }
        return resolve({ status: "200", message: "Update successful", result });
      }
    );
  });
};

crudsObj.deleteCooperatebank = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "DELETE FROM cooperate_banks WHERE hr_bank_id = ?",
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
