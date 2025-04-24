const db = require('../db/oracle');

async function insertExtension(data) {
  const connection = await db.connect();
  const result = await connection.execute(
    `INSERT INTO PROJECT_EXTENSIONS (PROJECT_ID, EXTENSION_DATE, TIME_LIMIT, DOCUMENT_PATH)
     VALUES (:projectId, :extensionDate, :timeLimit, :documentPath)`,
    data,
    { autoCommit: true }
  );
  await connection.close();
  return result;
}

module.exports = { insertExtension };
