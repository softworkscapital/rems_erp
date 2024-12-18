require ("dotenv").config();
const pool = require("./poolfile");

let crudsObj = {};

crudsObj.updateMemberApprovalStatus = (membership_id, user_id) => {
  // Ensure user_id and membership_id are provided
  if (!user_id || !membership_id) {
    return Promise.reject({
      status: "400",
      message: "User ID and Membership ID are required",
    });
  }

  console.log(
    "Updating member approval status for membership ID:",
    membership_id,
    "with user ID:",
    user_id
  );

  return new Promise((resolve, reject) => {
    pool.query(
      `UPDATE members SET 
                waiting_approval_1 = ?, 
                membershipstatus = 'waiting for approval 2' 
             WHERE membership_id = ?`,
      [
        user_id, // The user ID to update the waiting_approval_1 field
        membership_id, // The membership ID for the WHERE clause
      ],
      (err, result) => {
        if (err) {
          console.error("Error updating member approval status:", err);
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
            message: "Member not found or no changes made",
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


module.exports = crudsObj;