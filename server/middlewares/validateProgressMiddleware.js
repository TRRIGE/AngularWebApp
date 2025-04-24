const validateProgress = (req, res, next) => {
    const { projectId, proposed, ongoing, completed } = req.body;
    if (!projectId || proposed == null || ongoing == null || completed == null) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    next();
  };
  
  module.exports = validateProgress;
  