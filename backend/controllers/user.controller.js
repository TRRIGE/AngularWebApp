const project_master = async (req, res) => {
    const formData = req.body;

    console.log('📦 Received Project Data:', formData);

    // You could later save this to a database here...
    // await db.collection('projects').insertOne(formData);

    res.status(200).json({ message: 'Project data received successfully 🚀' });
}

export { project_master };