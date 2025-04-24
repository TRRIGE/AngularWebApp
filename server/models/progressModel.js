const connect = require('../db/oracle');

const saveProgress = async (data) => {
  const connection = await connect();
  const result = await connection.execute(
    `INSERT INTO project_progress (project_id, proposed_percent, ongoing_percent, completed_percent)
     VALUES (:projectId, :proposed, :ongoing, :completed)`,
    [data.projectId, data.proposed, data.ongoing, data.completed],
    { autoCommit: true }
  );
  return result;
};

module.exports = { saveProgress };
