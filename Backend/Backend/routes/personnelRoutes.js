const express = require('express');
const router = express.Router();
const personnelController = require('../controllers/personnelController');

router.post('/personnel', personnelController.addPersonnel);

module.exports = router;
