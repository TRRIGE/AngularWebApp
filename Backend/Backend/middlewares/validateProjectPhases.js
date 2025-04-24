const validateProjectPhases = (req, res, next) => {
    const {
      phaseId,
      phaseSequence,
      phaseDescription,
      mileStone,
      appointment
    } = req.body;
  
    if (!phaseId || !phaseSequence || !phaseDescription || !mileStone || !appointment) {
      return res.status(400).json({ message: "All fields are required." });
    }
  
    next();
  };
  
  module.exports = validateProjectPhases;
  