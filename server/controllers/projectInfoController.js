const oracledb = require('oracledb');
const dbConfig = require('../db/oracle');

// Insert project info
exports.createProjectInfo = async (req, res) => {
  const { nameOfWork, updatedDate, tenderNo, amount, workOrderDate, time, imageUrl, locationUrl } = req.body;

  try {
    const conn = await oracledb.getConnection(dbConfig);

    await conn.execute(
      `INSERT INTO project_information 
        (name_of_work, updated_date, tender_no, amount, work_order_date, time_period, image_url, location_url)
       VALUES 
        (:nameOfWork, TO_DATE(:updatedDate, 'YYYY-MM-DD'), :tenderNo, :amount, TO_DATE(:workOrderDate, 'YYYY-MM-DD'), :time, :imageUrl, :locationUrl)`,
      { nameOfWork, updatedDate, tenderNo, amount, workOrderDate, time, imageUrl, locationUrl },
      { autoCommit: true }
    );

    res.status(201).json({ message: 'Project info inserted successfully' });
    await conn.close();
  } catch (err) {
    console.error('Insert Error:', err);
    res.status(500).json({ error: 'Database error' });
  }
};

// Get all project info
exports.getProjectInfo = async (req, res) => {
  try {
    const conn = await oracledb.getConnection(dbConfig);
    const result = await conn.execute(`SELECT * FROM project_information`);
    res.status(200).json(result.rows);
    await conn.close();
  } catch (err) {
    console.error('Fetch Error:', err);
    res.status(500).json({ error: 'Could not fetch project information' });
  }
};
