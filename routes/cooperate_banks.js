const express = require('express');
const  Cooperate_bankRouter = express.Router();
const  Cooperate_banksDbOperations = require('../cruds/cooperate_banks');

Cooperate_bankRouter.post('/', async (req, res, next) => {
    try {
        let postedValues = req.body;
        let {
            hr_bank_id,
            employee_id,
            bank_name,
            acc_name,
            acc_number,
            branch_name,
            branch_code,
            swift_code
            } = postedValues;

            let results = await  Cooperate_banksDbOperations.postCooperatebank(
                hr_bank_id,
                employee_id,
                bank_name,
                acc_name,
                acc_number,
                branch_name,
                branch_code,
                swift_code
        );
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

Cooperate_bankRouter.get('/', async (req, res, next) => {
    try {
        let results = await  Cooperate_banksDbOperations.getCooperatebanks();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

Cooperate_bankRouter.get('/:id', async (req, res, next) => {
    try {
        let hr_bank_id = req.params.id;
        let result = await Cooperate_banksDbOperations.getCooperatebankById(hr_bank_id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//  Cooperate_bankRouter.get('/login/:email', async (req, res, next) => {
//     try {
//         let email = req.params.email;
//         let result = await  Cooperate_banksDbOperations.getMemberByEmail(email);
//         res.json(result);
//     } catch (e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// });

Cooperate_bankRouter.put('/update/:id', async (req, res, next) => {
    try {
        const hr_bank_id = req.params.id;
        const updatedValues = req.body;

        console.log('Updating member with ID:', hr_bank_id);
        console.log('Updated values:', updatedValues);

        // Validate that the member_id is provided
        if (!hr_bank_id) {
            return res.status(400).json({ message: 'Member ID is required.' });
        }

        // Call the updateMember function
        const results = await  Cooperate_banksDbOperations.updateCooperatebank(hr_bank_id, updatedValues);

        // Check if the update was successful
        if (results.result.affectedRows === 0) {
            return res.status(400).json({ message: 'No changes made to the member record.' });
        }

        res.json(results);
    } catch (e) {
        console.error('Error updating member:', e);
        res.status(500).json({ message: 'Internal Server Error', error: e.message });
    }
});


Cooperate_bankRouter.delete('/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let result = await  Cooperate_banksDbOperations.deleteCooperatebank(id);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = Cooperate_bankRouter;
