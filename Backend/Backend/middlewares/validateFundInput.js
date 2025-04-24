module.exports = (req, res, next) => {
    const { projectId, fundId, amountAllocated, fundReceivedDate } = req.body;
  
    if (!projectId || !fundId || !amountAllocated || !fundReceivedDate) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    next();
  };
  
// This middleware checks if the required fields are presaent in the request body.   
// If any field is missing, it sends a 400 Bad Request response with an error message.
// If all fields are present, it calls the next middleware or route handler.    
// This is useful for validating input data before processing it further in the application.
// The middleware is exported as a function that can be used in the route handling process.
// It uses the Express.js framework to handle HTTP requests and responses.

// The middleware checks for the presence of required fields in the request body and sends an error response if any are missing.
// If all required fields are present, it calls the next middleware or route handler in the chain.
// This is a common pattern in Express.js applications to validate input data before processing it further.
