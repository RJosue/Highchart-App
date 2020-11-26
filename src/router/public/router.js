const routerPublic = require('express').Router();
const HightChart = require('../../dependencies/highchart');
routerPublic.get('/', async (req, res) => {
    let imagen = await HightChart.Highchart.spiderChart()
    // console.log(imagen);
    res.render('index', imagen);
    // res.render('index');
});

module.exports = routerPublic;