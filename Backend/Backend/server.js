const http = require('http');
const app = require('./app');
const { initOracle } = require('./db/oracle');
const port = process.env.PORT || 3000;

const server = http.createServer(app);


server.listen(port,async () => {
    await initOracle();
    console.log(`Server is running on port ${port}`);
});