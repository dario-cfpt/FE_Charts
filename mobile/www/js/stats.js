/*
File name : stats.js
Description : Display the stats of a character and/or class with various graphs
 */

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

function createListOfAvailableClasses() {
    const char = feData.characters.find(x => x.id == actualCharId);
    // Get all available classes for the character
    const availableClasses = getAvailableClassesForCharacter(char);

    // Create the select of available classes
    const select = $$("#select-classes");
    const defaultOption = $$("<option value='-1'>None</option>");
    select.append(defaultOption);

    availableClasses.forEach(feClass => {
        const option = $$("<option>");
        option.val(feClass.id);
        option.text(feClass.name);
        select.append(option);
    });

    // select the first element
    select.val(-1);

    select.on("change", (e) => {
        char.idClassSelected = Number($$(e.target).val());
        displayGraphOfGrowthRates();
    });
}

function displayGraphOfGrowthRates() {
    if ($$("#btn-graph-column-chart").hasClass("button-active")) {
        displayColumnChartOfGrowthRates(actualCharId);
    } else {
        displayPolarSpiderOfGrowthRates(actualCharId);
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
