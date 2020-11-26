const routerPublic = require('express').Router();
// const HightChart = require('../../dependencies/highchart');
routerPublic.get('/', async (req, res) => {
    // res.render('index', await HightChart.Highchart.spiderChart());
    res.render('index');
});

module.exports = routerPublic;