const express = require('express');
const router = express.Router();
const fundController = require('../controllers/projectFundController');
const validateFundInput = require('../middlewares/validateFundInput');

router.post('/project-fund', validateFundInput, fundController.createFund);

module.exports = router;
