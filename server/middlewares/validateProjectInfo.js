module.exports = (req, res, next) => {
    const { nameOfWork, updatedDate, tenderNo, amount, workOrderDate, time, imageUrl, locationUrl } = req.body;
  
    if (!nameOfWork || !updatedDate || !tenderNo || !amount || !workOrderDate || !time || !imageUrl || !locationUrl) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    next();
  };
  