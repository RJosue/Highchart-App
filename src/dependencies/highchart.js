const exporter = require('highcharts-export-server');
function Highchart() {
    this.spiderChart = () => {
        try {
            let result = {
                success: false,
                noti: {
                    title: "Ocurrio un error al generar la grafica de araña",
                    icon: "error"
                }
            }
            var exportSettings = {
                type: 'png',
                scale: 3,
                options: {

                    chart: {
                        polar: true,
                        type: 'line',
                        height: '600px'
                    },

                    title: {
                        text: ''
                    },

                    pane: {
                        size: '80%'
                    },

                    plotOptions: {
                        series: {
                            dataLabels: {
                                enabled: true
                            }
                        }
                    },
                    xAxis: {
                        categories: [
                            'Capacidad de Analisis',
                            'Proactividad',
                            'Orientacion hacia los Resultado',
                            'Atencion a los detalles',
                            'Administrando el propio Desempeńo',
                            'Razonamiento Numerico',
                            'Toma de Decisiones',
                            'Planificacion-Organizacion',
                            'Vision Estrategica',
                            'Innovacion',
                            'Orientacion hacia el Cliente',
                            'Confianza y Seguridad',
                            'Superacion',
                            'Autocontrol',
                            'Energia',
                            'Resiliencia',
                            'Interes Interpersonal',
                            'Empatia',
                            'Comunicacion e Influencia',
                            'Trabajo en Equipo',
                            'Potencial para el Liderazgo',
                            'Conformidad',
                            'Ambicion',
                            'Mentalidad'
                        ],
                        labels: {
                            style: {
                                fontSize: '8px'
                            }
                        },
                        tickmarkPlacement: 'on',
                        lineWidth: 0
                    },

                    yAxis: {
                        gridLineInterpolation: 'polygon',
                        lineWidth: 0,
                        min: 0
                    },

                    tooltip: {
                        shared: true,
                        pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
                    },

                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'vertical'
                    },

                    series: [{
                        name: 'Autoevaluación',
                        data: [4, 1, 4, 4.56, 4, 9, 4, 10, 4, 4, 8.7, 4, 1, 4, 4.56, 4, 9, 4, 10, 4, 4, 8.7, 4, 4,],
                        color: '#FE2E64',
                        pointPlacement: 'on'
                    }, {
                        name: 'Promedioeval. otros',
                        data: [5, 4, 2.44, 5, 9.5, 4, 5.32, 4, 5, 5, 10, 5, 4, 2.44, 5, 9.5, 4, 5.32, 4, 5, 5, 10, 6, 7],
                        color: '#0080FF',
                        pointPlacement: 'on'
                    }],
                }
            };
            // console.log(exportSettings);
            exporter.initPool();

            return new Promise((resolve) => {
                exporter.export(exportSettings, function (err, res) {
                    //The export result is now in res.
                    //If the output is not PDF or SVG, it will be base64 encoded (res.data).
                    //If the output is a PDF or SVG, it will contain a filename (res.filename).

                    //Kill the pool when we're done with it, and exit the application

                    exporter.killPool();
                    result.image = `data:image/png;base64,${res.data}`;
                    result.success = true;
                    delete result.noti;
                    resolve(result);
                });
            });

        } catch (ex) {
            return result;
        }
    }
}

module.exports.Highchart = new Highchart();