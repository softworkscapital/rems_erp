const express = require('express');
const  AccInvestmentFundDetailsRouter = express.Router();
const  AccInvestmentFundDetailsDbOperations = require('../cruds/fin_acc_investment_fund_details');

AccInvestmentFundDetailsRouter.post("/", async (req, res, next) => {
    try {
      let postedValues = req.body;
      let {
        name,
        purpose,
        created_by,
        created_date,
        authorised_by_1,
        authorised_by_2,
        authorised_by_3,
        bank_id,
      } = postedValues;
  
      let results =
        await AccInvestmentFundDetailsDbOperations.postfinAccInvestmentFundDetails(
          name,
          purpose,
          created_by,
          created_date,
          authorised_by_1,
          authorised_by_2,
          authorised_by_3,
          bank_id
        );
  
      res.json(results);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });

AccInvestmentFundDetailsRouter.get('/', async (req, res, next) => {
    try {
        let results = await  AccInvestmentFundDetailsDbOperations.getfinAccInvestmentFundDetails();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

AccInvestmentFundDetailsRouter.get('/joined_details_map_cooperate_bank/:id', async (req, res, next) => {
    try {
        // Extract the ID from the request parameters
        const investmentFundDetailsId = req.params.id;

        // Call the database operation with the extracted ID
        let results = await AccInvestmentFundDetailsDbOperations.getfinAccInvestmentFundDetailsJoined(investmentFundDetailsId);

        // Send the results as a JSON response
        res.json(results);
    } catch (e) {
        console.error("Error fetching joined investment fund details:", e); // Enhanced error logging
        res.sendStatus(500);
    }
});




AccInvestmentFundDetailsRouter.get('/:id', async (req, res, next) => {
    try {
        let investment_fund_details_id = req.params.id;
        let result = await AccInvestmentFundDetailsDbOperations.getfinAccInvestmentFundDetailsById(investment_fund_details_id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


AccInvestmentFundDetailsRouter.put('/authorized_by_1/:id', async (req, res, next) => {
    try {
        let investment_fund_details_id = req.params.id;
        let user_id = req.body.user_id; // Assuming the user ID is sent in the request body

        // Check if user_id is provided
        if (!user_id) {
            return res.status(400).json({ message: "User ID is required" });
        }

        // Call the update function
        let result = await AccInvestmentFundDetailsDbOperations.updateAuthorised1finAccInvestmentFundDetail(investment_fund_details_id, user_id);
        res.json(result);
    } catch (e) {
        console.error("Error in updating committed field:", e);
        res.sendStatus(500);
    }
});

AccInvestmentFundDetailsRouter.put('/authorized_by_2/:id', async (req, res, next) => {
    try {
        let investment_fund_details_id = req.params.id;
        let user_id = req.body.user_id; // Assuming the user ID is sent in the request body

        // Check if user_id is provided
        if (!user_id) {
            return res.status(400).json({ message: "User ID is required" });
        }

        // Call the update function
        let result = await AccInvestmentFundDetailsDbOperations.updateAuthorised2finAccInvestmentFundDetail(investment_fund_details_id, user_id);
        res.json(result);
    } catch (e) {
        console.error("Error in updating committed field:", e);
        res.sendStatus(500);
    }
});

AccInvestmentFundDetailsRouter.put('/authorized_by_3/:id', async (req, res, next) => {
    try {
        let investment_fund_details_id = req.params.id;
        let user_id = req.body.user_id; // Assuming the user ID is sent in the request body

        // Check if user_id is provided
        if (!user_id) {
            return res.status(400).json({ message: "User ID is required" });
        }

        // Call the update function
        let result = await AccInvestmentFundDetailsDbOperations.updateAuthorised3finAccInvestmentFundDetail(investment_fund_details_id, user_id);
        res.json(result);
    } catch (e) {
        console.error("Error in updating committed field:", e);
        res.sendStatus(500);
    }
});


AccInvestmentFundDetailsRouter.put('/:investment_fund_details_id', async (req, res) => {
    const investment_fund_details_id = req.params.investment_fund_details_id; // Ensure this matches the route
    const updatedValues = req.body;

    try {
        const result = await AccInvestmentFundDetailsDbOperations.updatefinAccInvestmentFundDetails(investment_fund_details_id, updatedValues);
        return res.status(result.status).json(result);
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            status: "500",
            message: "Internal Server Error",
            error: error.message,
        });
    }
});


  AccInvestmentFundDetailsRouter.delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await  AccInvestmentFundDetailsDbOperations.deletefinAccInvestmentFundDetails(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = AccInvestmentFundDetailsRouter;
