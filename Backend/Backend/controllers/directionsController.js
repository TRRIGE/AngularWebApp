const connect = require('../db/oracle');
const path = require('path');

exports.createDirection = async (req, res) => {
    const { directionsBy, shortNote, actionDate, actionTaken } = req.body;
    const file = req.file;

    try {
        const connection = await connect();
        const result = await connection.execute(
            `INSERT INTO project_directions 
            (directions_by, short_note, action_date, action_taken, file_path) 
            VALUES (:directionsBy, :shortNote, TO_DATE(:actionDate, 'YYYY-MM-DD'), :actionTaken, :filePath)`,
            {
                directionsBy,
                shortNote,
                actionDate,
                actionTaken,
                filePath: file ? file.filename : null
            },
            { autoCommit: true }
        );
        res.status(201).json({ message: "Project direction added successfully!" });
    } catch (err) {
        console.error("Insert error:", err);
        res.status(500).json({ error: "Database error" });
    }
};
