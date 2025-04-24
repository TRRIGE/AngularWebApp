const express = require('express');
const router = express.Router();
const { createProgress } = require('../controllers/progressController');
const validateProgress = require('../middlewares/validateProgressMiddleware');

router.post('/api/progress', validateProgress, createProgress);

module.exports = router;
