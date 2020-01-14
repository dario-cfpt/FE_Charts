const BASE_URL = "http://localhost:3000/";
const PRIMARY_NODE_NAME = "Fire Emblem Three House";
const GRAPH_PIE_CHART_VALUE = "pie-chart";
const GRAPH_SPIDER_WEB_VALUE = "spider-web";
const GRAPH_COLUMN_CHART_VALUE = "column-chart";
let actualCharId;

let feData = JSON.parse(localStorage.getItem("feData"));

function updateData(data) {
    if (Object.keys(data).length > 0) {
        localStorage.setItem("feData", JSON.stringify(data));
        feData = data;
    }
    displayCharacters();
}

if (feData != null) {
    fetch(BASE_URL + "update", {
        method: "POST",
        body: JSON.stringify({version: feData.version}),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                console.log(res);
            }
        })
        .then(data => {
            updateData(data);
        })
        .catch(err => {
            console.log(err);
        });
} else {
    fetch(BASE_URL + "all")
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                console.log(res);
            }
        })
        .then(data => {
            updateData(data);
        })
        .catch(err => {
            console.log(err);
        });
}

function displayCharacters() {
    const housesWithCharacters = [];
    const characters = feData.characters;
    const houses = feData.houses;

    // Format the data for the network graph ([House name, Character first name]
    houses.forEach(house => {
        housesWithCharacters.push([PRIMARY_NODE_NAME, house.name]);
    });
    characters.forEach(char => {
        const house = houses.find(x => x.id === char.idHouse);
        housesWithCharacters.push([house.name, char.firstName]);
    });

    // Create the network graph
    Highcharts.addEvent(
        Highcharts.Series,
        'afterSetOptions',
        function (e) {
            var colors = Highcharts.getOptions().colors,
                i = 0,
                nodes = {};

            if (this instanceof Highcharts.seriesTypes.networkgraph && e.options.id === 'char-tree') {
                e.options.data.forEach(function (link) {

                    if (link[0] === PRIMARY_NODE_NAME) {
                        nodes[PRIMARY_NODE_NAME] = {
                            id: PRIMARY_NODE_NAME,
                            marker: {
                                radius: 20
                            }
                        };
                        nodes[link[1]] = {
                            id: link[1],
                            marker: {
                                radius: 10
                            },
                            color: colors[i++]
                        };
                    } else if (nodes[link[0]] && nodes[link[0]].color) {
                        nodes[link[1]] = {
                            id: link[1],
                            color: nodes[link[0]].color
                        };
                    }
                });

                e.options.nodes = Object.keys(nodes).map(function (id) {
                    return nodes[id];
                });
            }
        }
    );

    Highcharts.chart('container-characters', {
        chart: {
            type: 'networkgraph',
            height: '200%'
        },
        title: {
            text: ''
        },
        plotOptions: {
            networkgraph: {
                keys: ['from', 'to'],
            }
        },
        series: [{
            dataLabels: {
                enabled: true,
                linkFormat: ''
            },
            id: 'char-tree',
            data: housesWithCharacters,
            events: {
                click: function (event) {
                    const charFirstName = event.point.name;
                    const char = characters.find(x => x.firstName == charFirstName);
                    if (char != null) {
                        app.views.main.router.navigate("/stat/" + char.id);
                    }
                }
            }
        }]
    });

}

function createTableOfStats() {
    const stats = feData.stats;
    stats.forEach(stat => {
        const th = $$(`<th>${stat.shortName}</th>`);
        const td = $$(`<td id="stat-${stat.id}"></td>`);
        $$("#table-gr-header").append(th);
        $$("#table-gr-content").append(td);
    });
}

function displayTableOfGrowthRates() {
    const charGrowthRates = feData.charGrowthRates.map(x => (x.idCharacter == actualCharId) ? x : null).filter((x) => x != null);

    charGrowthRates.forEach(gr => {
        $$("#stat-" + gr.idStat).text(gr.value);
    });

    displayGraphOfGrowthRates();
}

function displayGraphOfGrowthRates() {
    const selectedGraph = $$("#select-graph").val();

    switch (selectedGraph) {
        case GRAPH_SPIDER_WEB_VALUE:
            displayPolarSpiderOfGrowthRates(actualCharId);
            break;
        case GRAPH_PIE_CHART_VALUE:
            displayPieChartOfGrowthRates(actualCharId);
            break;
        case GRAPH_COLUMN_CHART_VALUE:
        default:
            displayColumnChartOfGrowthRates(actualCharId);
            // Column chart graph by default
            break;
    }
}

function displayPolarSpiderOfGrowthRates(charId) {
    const charGrowthRates = feData.charGrowthRates.map(x => (x.idCharacter == charId) ? x : null).filter((x) => x != null);
    const statsNames = feData.stats.map(x => x.name);
    const statsValues = charGrowthRates.map(x => x.value);

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
            categories: statsNames,
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
            data: statsValues,
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

function displayPieChartOfGrowthRates(charId) {
    const charGrowthRates = feData.charGrowthRates.map(x => (x.idCharacter == charId) ? x : null).filter((x) => x != null);
    const statsValues = [];

    charGrowthRates.forEach(gr => {
        const nameStat = feData.stats.find(x => x.id == gr.idStat).name;
        const statWithValue = {
            name: nameStat,
            y: gr.value,
        };
        statsValues.push(statWithValue);
    });


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
            data: statsValues,
        }]
    });

}

function displayColumnChartOfGrowthRates(charId) {
    const charFirstName = feData.characters.find(x => x.id == charId).firstName;
    const charGrowthRates = feData.charGrowthRates.map(x => (x.idCharacter == charId) ? x : null).filter((x) => x != null);
    const statsNames = feData.stats.map(x => x.name);
    const statsValues = [];
    const charData = {
        name: charFirstName,
    };

    charGrowthRates.forEach(gr => {
        statsValues.push(gr.value);
    });
    charData.data = statsValues;

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
            categories: statsNames
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
        series: [charData],
    });
}