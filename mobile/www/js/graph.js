/*
File name : graph.js
Description : Display some graphs according to their settings
 */

function displayColumnChart(categories, data) {
    Highcharts.chart('container-char-gr', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: 'Growth Rates: <b>{point.y}%</b>'
        },
        xAxis: {
            categories: categories,
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    format: '{point.y}%'
                }
            }
        },
        series: data,
    });
}

function displayPolarSpider(categories, data) {
    Highcharts.chart('container-char-gr', {
        chart: {
            polar: true,
            type: 'line'
        },
        title: {
            text: '',
        },
        pane: {
            size: '100%'
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: categories,
            tickmarkPlacement: 'on',
            lineWidth: 0,
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
        },
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}"><b>{point.y}%</b><br/>'
        },
        series: [{
            name: 'Growth Rates',
            data: data,
            pointPlacement: 'on'
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 800
                },
                chartOptions: {
                    pane: {
                        size: '50%'
                    }
                }
            }]
        }
    });
}

function displayPieChart(data) {
    Highcharts.chart('container-char-gr', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}%</b>'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y}%'
                },
            }
        },
        series: [{
            name: 'Growth Rates',
            colorByPoint: true,
            data: data,
        }]
    });
}