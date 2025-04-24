const express = require('express');
const router = express.Router();
const controller = require('../controllers/correspondenceController');
const upload = require('../middlewares/upload.middleware');

router.post('/project-correspondence', upload.single('documentUpload'), controller.createCorrespondence);

module.exports = router;
