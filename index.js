const express = require('express');
const http =  require('http');
const path = require('path');
const router = require('./src/router/index');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

const publicDirec = path.join(__dirname, './public');
const viewsDirect = path.join(__dirname, './views');

app.set('view engine', 'ejs');
app.set('views', viewsDirect);
app.use(express.static(publicDirec));

app.use('/', router);

server.listen(port, () => {
    console.log("Server Up in " + port);
});