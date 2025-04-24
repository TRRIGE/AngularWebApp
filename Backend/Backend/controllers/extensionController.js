const { insertExtension } = require('../models/extensionModel');

async function addExtension(req, res) {
  try {
    const { projectId, extensionDate, timeLimit } = req.body;
    const documentPath = req.file ? req.file.path : null;

    const data = {
      projectId,
      extensionDate,
      timeLimit,
      documentPath
    };

    await insertExtension(data);
    res.status(200).json({ message: 'Extension saved successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save extension' });
  }
}

module.exports = { addExtension };
