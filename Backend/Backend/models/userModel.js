const oracledb = require('oracledb');
const dbConfig = require('../db/oracle');

const findUserByEmailAndPassword = async (email, password) => {
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    const result = await connection.execute(
      `SELECT email FROM users WHERE email = :email AND password = :password`,
      [email, password]
    );

    return result.rows.length > 0 ? result.rows[0] : null;
  } catch (err) {
    throw err;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};

module.exports = {
  findUserByEmailAndPassword
};
