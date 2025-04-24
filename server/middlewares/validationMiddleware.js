module.exports = function (req, res, next) {
    const { projectName, projectCost } = req.body;
  
    if (!projectName || !projectCost) {
      return res.status(400).json({ message: "Project name and cost are required." });
    }
  
    // Add more validation as needed
  
    next();
  };
  