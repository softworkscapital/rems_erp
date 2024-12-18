const express = require('express');
const  MemberRouter = express.Router();
const  MembersDbOperations = require('../cruds/members');

MemberRouter.put('/members/:membership_id/approve', async (req, res) => {
    const membership_id = req.params.membership_id;  // Get membership ID from the URL
    const { user_id } = req.body; // Get user ID from the request body

    try {
        const result = await MembersDbOperations.updateMemberApprovalStatus(membership_id, user_id);
        res.status(result.status).json(result);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
});


module.exports = MemberRouter;