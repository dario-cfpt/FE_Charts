const baseUrl = "http://localhost:3000/";
const primaryNodeName = "Fire Emblem Three House";

let feData = JSON.parse(localStorage.getItem("feData"));

function updateData(data) {
    if (Object.keys(data).length > 0) {
        localStorage.setItem("feData", JSON.stringify(data));
        feData = data;
    }
    displayCharacters();
}

if (feData != null) {
    fetch(baseUrl + "update", {
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
    fetch(baseUrl + "all")
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
        housesWithCharacters.push([primaryNodeName, house.name]);
    });
    characters.forEach(char => {
        const house = houses.find(x => x.id === char.idHouse);
        housesWithCharacters.push([house.name, char.firstName]);
    });

    Highcharts.addEvent(
        Highcharts.Series,
        'afterSetOptions',
        function (e) {
            var colors = Highcharts.getOptions().colors,
                i = 0,
                nodes = {};

            if (this instanceof Highcharts.seriesTypes.networkgraph && e.options.id === 'char-tree') {
                e.options.data.forEach(function (link) {

                    if (link[0] === primaryNodeName) {
                        nodes[primaryNodeName] = {
                            id: primaryNodeName,
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

    Highcharts.chart('container', {
        chart: {
            type: 'networkgraph',
            height: '25%'
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

