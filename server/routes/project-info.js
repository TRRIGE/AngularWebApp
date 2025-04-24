const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectInfoController');
const validateProject = require('../middlewares/validateProjectInfo');

// POST to create project info
router.post('/project-info', validateProject, projectController.createProjectInfo);

// GET all project info
router.get('/project-info', projectController.getProjectInfo);

module.exports = router;
