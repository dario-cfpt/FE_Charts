/*
File name : stats.js
Description : Display the stats of a character and/or class with various graphs
 */

const GRAPH_PIE_CHART_VALUE = "pie-chart";
const GRAPH_SPIDER_WEB_VALUE = "spider-web";
const GRAPH_COLUMN_CHART_VALUE = "column-chart";
const GRAPH_CONTAINER_GR_ID = "container-char-gr";
let actualCharId;

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

    displayColumnChart(GRAPH_CONTAINER_GR_ID, statsNames, [charData]); // The data must be an array
}

function displayPolarSpiderOfGrowthRates(charId) {
    const charGrowthRates = feData.charGrowthRates.map(x => (x.idCharacter == charId) ? x : null).filter((x) => x != null);
    const statsNames = feData.stats.map(x => x.name);
    const statsValues = charGrowthRates.map(x => x.value);
    const charData = [{
        name: feData.characters.find(x => x.id == charId).firstName,
        data: statsValues,
    }];

    displayPolarSpider(GRAPH_CONTAINER_GR_ID, statsNames, charData);
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

    displayPieChart(statsValues);
}