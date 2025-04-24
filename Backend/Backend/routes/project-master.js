const express = require('express');
const router = express.Router();
const { createProject } = require('../controllers/masterController');
const validateProject = require('../middlewares/validationMiddleware');
router.post('/project', validateProject, createProject);

module.exports = router;
