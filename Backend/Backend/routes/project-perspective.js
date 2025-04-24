const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadMiddleware');
const { uploadPerspectives } = require('../controllers/perspectiveController');

// Handle file upload (multiple files)
router.post('/upload', upload.array('projectPerspective[]'), uploadPerspectives);

module.exports = router;
