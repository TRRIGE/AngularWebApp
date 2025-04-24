const express = require('express');
const router = express.Router();
const controller = require('../controllers/projectPhasesController');
const upload = require('../middlewares/uploadMiddleware');

router.post('/project-phases', upload.single('fileUpload'), controller.addProjectPhase);

module.exports = router;
