import oracledb from "oracledb";

const dbConfig = {
  user: 'pis',
  password: 'p',
  connectString: '192.168.1.5:1521/EPAY'
};

async function getConnection() {
  try {
    const connection = await oracledb.getConnection(dbConfig);
    console.log('✅ Oracle DB Connected!');
    return connection;
  } catch (err) {
    console.error('❌ Failed to connect to Oracle DB:', err);
    throw err;
  }
}

module.exports = { getConnection };
