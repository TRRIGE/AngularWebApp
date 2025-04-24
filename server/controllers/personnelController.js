const db = require('../db/oracle');

async function addPersonnel(req, res) {
  const {
    personnelId,
    personnelType,
    personnelName,
    contactNumber,
    email,
    licenseNumber,
    contractorType,
    contractorClass,
  } = req.body;

  try {
    const connection = await db.getConnection();
    const result = await connection.execute(
      `INSERT INTO technical_personnel (
        personnel_id,
        personnel_type,
        personnel_name,
        contact_number,
        email,
        license_number,
        contractor_type,
        contractor_class
      ) VALUES (:personnelId, :personnelType, :personnelName, :contactNumber, :email, :licenseNumber, :contractorType, :contractorClass)`,
      {
        personnelId,
        personnelType,
        personnelName,
        contactNumber,
        email,
        licenseNumber,
        contractorType,
        contractorClass,
      },
      { autoCommit: true }
    );
    res.status(201).json({ message: 'Personnel added successfully' });
    await connection.close();
  } catch (err) {
    console.error('Error adding personnel:', err);
    res.status(500).json({ error: 'Failed to add personnel' });
  }
}

module.exports = {
  addPersonnel,
};
