const { getConnection } = require('../db/oracle');
const path = require('path');

exports.addProjectPhase = async (req, res) => {
  const {
    projectId,
    phaseDate,
    phase,
    appointment,
    remark,
    documentSrNo,
    documentName
  } = req.body;

  const filePath = req.file ? req.file.filename : null;

  try {
    const conn = await getConnection();
    const result = await conn.execute(
      `INSERT INTO project_phases
        (project_id, phase_date, phase, appointment, remark, document_sr_no, document_name, file_path)
        VALUES (:projectId, TO_DATE(:phaseDate, 'YYYY-MM-DD'), :phase, :appointment, :remark, :documentSrNo, :documentName, :filePath)`,
      {
        projectId,
        phaseDate,
        phase,
        appointment,
        remark,
        documentSrNo,
        documentName,
        filePath
      },
      { autoCommit: true }
    );

    res.status(200).json({ message: 'Project phase added successfully', result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error inserting into database' });
  }
};
