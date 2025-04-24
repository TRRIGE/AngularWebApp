module.exports = function (req, res, next) {
    const { projectId, paymentDate, amount, amountUnit } = req.body;
    if (!projectId || !paymentDate || !amount || !amountUnit) {
      return res.status(400).json({ error: "All fields are required" });
    }
    next();
  };
  