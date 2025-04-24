const { insertProjectPhase } = require('../models/projectPhasesModel');

const createProjectPhase = async (req, res) => {
  try {
    await insertProjectPhase(req.body);
    res.status(201).json({ message: 'Project Phase submitted successfully' });
  } catch (error) {
    console.error('Error inserting Project Phase:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createProjectPhase
};
