const express = require('express');
const router = express.Router();
const expenditureController = require('../controllers/projectExpenditureController');
const validate = require('../middlewares/validateProjectExpenditure');

router.post('/api/expenditure', validate, expenditureController.addExpenditure);

module.exports = router;
