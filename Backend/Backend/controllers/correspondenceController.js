const getConnection = require('../db/oracle');
const path = require('path');

exports.createCorrespondence = async (req, res) => {
  try {
    const {
      projectId,
      correspondenceId,
      correspondenceDate,
      subject,
      description
    } = req.body;

    const document = req.file ? req.file.filename : null;

    const conn = await getConnection();
    const result = await conn.execute(
      `INSERT INTO PROJECT_CORRESPONDENCE 
      (project_id, correspondence_id, correspondence_date, subject, description, document_path) 
      VALUES (:projectId, :correspondenceId, TO_DATE(:correspondenceDate, 'YYYY-MM-DD'), :subject, :description, :document_path)`,
      {
        projectId,
        correspondenceId,
        correspondenceDate,
        subject,
        description,
        document_path: document
      },
      { autoCommit: true }
    );

    res.status(200).json({ message: 'Correspondence saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
