const oracledb = require('oracledb');
const dbConfig = require('../db/oracle');

const insertProjectPhase = async (phaseData) => {
  const {
    phaseId,
    phaseSequence,
    phaseDescription,
    mileStone,
    appointment
  } = phaseData;

  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    const result = await connection.execute(
      `INSERT INTO project_phases 
      (phase_id, phase_sequence, phase_description, mile_stone, appointment_tech_personnel) 
      VALUES (:1, :2, :3, :4, :5)`,
      [phaseId, phaseSequence, phaseDescription, mileStone, appointment],
      { autoCommit: true }
    );

    return result;
  } catch (err) {
    throw err;
  } finally {
    if (connection) {
      await connection.close();
    }
  }
};

module.exports = {
  insertProjectPhase
};
