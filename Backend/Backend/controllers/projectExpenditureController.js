const oracledb = require('oracledb');
const dbConfig = require('../db/oracle');

exports.addExpenditure = async (req, res) => {
  const { projectId, paymentDate, amount, amountUnit } = req.body;

  try {
    const connection = await oracledb.getConnection(dbConfig);

    const result = await connection.execute(
      `INSERT INTO Project_Expenditure (project_id, payment_date, amount, amount_unit)
       VALUES (:projectId, TO_DATE(:paymentDate, 'YYYY-MM-DD'), :amount, :amountUnit)`,
      { projectId, paymentDate, amount, amountUnit },
      { autoCommit: true }
    );

    await connection.close();
    res.status(201).json({ message: 'Expenditure record inserted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
};
