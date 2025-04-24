const express = require('express');
const router = express.Router();
const { createProjectPhase } = require('../controllers/projectPhasesController2');
const validateProjectPhases = require('../middlewares/validateProjectPhases');

router.post('/project-phases', validateProjectPhases, createProjectPhase);

module.exports = router;
