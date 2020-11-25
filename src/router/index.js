const express = require('express');
const routerMain = express.Router();

const publicRouter = require('./public/router');

routerMain.use('/', publicRouter);

module.exports = routerMain;