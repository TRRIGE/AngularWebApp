const { findUserByEmailAndPassword } = require('../models/userModel');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmailAndPassword(email, password);

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successful", email: user.EMAIL });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  loginUser
};
