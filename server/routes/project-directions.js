const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadDirectionMiddleware');
const controller = require('../controllers/directionsController');

// POST API to handle form
router.post('/directions', upload.single('fileUpload'), controller.createDirection);

module.exports = router;
