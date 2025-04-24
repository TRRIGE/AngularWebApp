const oracledb = require('oracledb');
require('dotenv').config();

async function initOracle() {
  try {
    await oracledb.createPool({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECT_STRING,
    });
    console.log("✅ Oracle DB connected");
  } catch (err) {
    console.error("❌ Oracle DB Connection Error:", err);
  }
}

module.exports = {
  initOracle,
  getConnection: () => oracledb.getConnection()
};
