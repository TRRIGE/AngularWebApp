const { saveProgress } = require('../models/progressModel');

const createProgress = async (req, res) => {
  try {
    const { projectId, proposed, ongoing, completed } = req.body;
    const result = await saveProgress({ projectId, proposed, ongoing, completed });
    res.status(201).json({ message: 'Progress saved successfully', result });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

module.exports = { createProgress };
