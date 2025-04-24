const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadtimelimitMiddleware');
const { addExtension } = require('../controllers/extensionController');

router.post('/project-extension', upload.single('uploadFile'), addExtension);

module.exports = router;
