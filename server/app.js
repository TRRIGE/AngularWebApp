const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const projectmaster= require('./routes/project-master');
const projectperspective= require('./routes/project-perspective');
const projectphases= require('./routes/project-phases');
const projectfunding= require('./routes/project-funds');
const projectinfo = require('./routes/project-info');
const projectcorrespondence= require('./routes/project-correspondence');
const projectDireaction= require('./routes/project-directions');
const projectexpenditure= require('./routes/project-expenditure');
const timelimitextension= require('./routes/time-limit-extension');
const progressRoutes = require('./routes/progressRoutes');
const personnelRoutes = require('./routes/personnelRoutes');
const errorHandler = require('./middlewares/TechnicalErrorHandler');
const authRoutes = require('./routes/authRoutes');
const projectPhasesRoutes = require('./routes/projectPhasesRoutes');





app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));



app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/master', projectmaster);
app.use('/directions', projectDireaction);
app.use('/corresponding', projectcorrespondence);
app.use('/expenditure', projectexpenditure);
app.use('/funds', projectfunding);
app.use('/perspective', projectperspective);
app.use('/phases', projectphases);
app.use('/info', projectinfo);
app.use('/timelimit', timelimitextension);
app.use('/progress', progressRoutes);
app.use('/personnel', personnelRoutes);
app.use(errorHandler);  
app.use('/api/auth', authRoutes);
app.use('/api', projectPhasesRoutes);






module.exports = app;