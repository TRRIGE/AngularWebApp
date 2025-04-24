const { getConnection } = require('../db/oracle');

exports.uploadPerspectives = async (req, res) => {
  const { projectId } = req.body;
  const files = req.files;

  if (!projectId || !files || files.length === 0) {
    return res.status(400).json({ message: 'Missing required data' });
  }

  try {
    const conn = await getConnection();
    for (const file of files) {
      await conn.execute(
        `INSERT INTO PROJECT_PERSPECTIVES (project_id, file_path) VALUES (:projectId, :filePath)`,
        { projectId, filePath: file.path },
        { autoCommit: true }
      );
    }

    res.status(201).json({ message: 'Files uploaded and saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Database error', error });
  }
};
