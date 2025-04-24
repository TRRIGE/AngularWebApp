const oracledb = require('oracledb');
const dbConfig = require('../db/oracle');

exports.createFund = async (req, res) => {
  const { projectId, fundId, amountAllocated, fundReceivedDate } = req.body;

  try {
    const connection = await oracledb.getConnection(dbConfig);
    await connection.execute(
      `INSERT INTO project_funds (project_id, fund_id, amount_allocated, fund_received_date)
       VALUES (:projectId, :fundId, :amountAllocated, TO_DATE(:fundReceivedDate, 'YYYY-MM-DD'))`,
      { projectId, fundId, amountAllocated, fundReceivedDate },
      { autoCommit: true }
    );

    res.status(201).json({ message: 'Project fund data inserted successfully' });
    await connection.close();
  } catch (err) {
    console.error('Error inserting project fund:', err);
    res.status(500).json({ error: 'Database error' });
  }
};
