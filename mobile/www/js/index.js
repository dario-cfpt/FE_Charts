/*
File name : index.js
Description : Display the content of the home page
 */

const PRIMARY_NODE_NAME = "Fire Emblem Three House";

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
        credits: {
            enabled: false
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

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    const container = document.getElementById("container-characters");
    container.style.zoom = 1;

    $$("#zoom-in").on("click", () => {
        let zoom = Number(container.style.zoom) + 0.25;
        container.style.zoom = zoom;
        app.range.setValue("#range-zoom", zoom);
    });
    $$("#zoom-out").on("click", () => {
        let zoom = Number(container.style.zoom) - 0.25;
        container.style.zoom = zoom;
        app.range.setValue("#range-zoom", zoom);
    });
}

document.addEventListener("backbutton", onBackKeyDown, false);
function onBackKeyDown() {
    if ($$('.panel').hasClass("panel-active")) {
        app.panel.close(".panel");
    } else if ($$('.modal-in').length > 0) {
        app.smartSelect.close("#select-compare"); // TODO: fix that
    } else if ($$('.back').length > 0) {
        mainView.router.back();
    } else {
        navigator.app.exitApp();
    }
}    