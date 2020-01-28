/*
File name : comparator.js
Description : Allow the user to compare multiple characters
 */

const GRAPH_CONTAINER_COMPARATOR_ID = "container-comparator";
let smartComparator;
let selectedCharacters = [];

function configureSmartSelectOfCharacters() {
    const characters = feData.characters;
    const houses = feData.houses;

    // Create the options of the select
    houses.forEach(house => {
        const optgroup = "<optgroup id='optgroup-house-" + house.id + "' label='" + house.name + "'>";
        $$("#select-compare").append(optgroup);
    });
    characters.forEach(char => {
        const option = "<option id='" + char.id + "'>" + char.firstName + "</option>";
        $$("#optgroup-house-" + char.idHouse).append(option);
    });

    // Configure the smartselect
    smartComparator = app.smartSelect.create({
        el: '.smart-select',
    });
    smartComparator.open();

    smartComparator.on("close", () => {
        displayComparedCharacters();
    });

    $$("#btn-compare").on("click", () => {
        smartComparator.open();
    });
}

function displayComparedCharacters() {
    const selectedCharactersName = smartComparator.getValue();

    selectedCharacters = [];
    selectedCharactersName.forEach(name => {
        selectedCharacters.push(feData.characters.find(x => x.firstName == name));
    });

    $$("#table-comparator-content").empty();

    selectedCharacters.forEach(char => {
        // Fill the table
        const tr = $$("<tr>");
        const tdName = $$("<td>" + char.firstName + "</td>");
        const tdClass = $$("<td>" + "none" + "</td>");
        tr.append(tdName);
        tr.append(tdClass);
        $$("#table-comparator-content").append(tr);
    });

    displayCurrentGraph();
}

function displayCurrentGraph() {
    if ($$("#btn-graph-column-chart").hasClass("button-active")) {
        compareWithColumnGraph();
    } else {
        compareWithPolarSpider();
    }
}

function compareWithColumnGraph() {
    const statsNames = feData.stats.map(x => x.name);
    const charactersData = [];

    selectedCharacters.forEach(char => {
        // Create the graph
        const statsValues = [];
        const charGrowthRates = feData.charGrowthRates.map(x => (x.idCharacter == char.id) ? x : null).filter((x) => x != null);
        const charData = {
            name: char.firstName,
            stack: char.id,
        };

        charGrowthRates.forEach(gr => {
            statsValues.push(gr.value);
        });
        charData.data = statsValues;

        charactersData.push((charData));
    });

    displayColumnChart(GRAPH_CONTAINER_COMPARATOR_ID, statsNames, charactersData);
}

function compareWithPolarSpider() {
    const charactersData = [];
    const statsNames = feData.stats.map(x => x.name);


    selectedCharacters.forEach(char => {
        const charGrowthRates = feData.charGrowthRates.map(x => (x.idCharacter == char.id) ? x : null).filter((x) => x != null);
        const statsValues = charGrowthRates.map(x => x.value);
        const charData = {
            name: char.firstName,
            data: statsValues,
        };

        charactersData.push(charData);
    });

    displayPolarSpider(GRAPH_CONTAINER_COMPARATOR_ID, statsNames, charactersData);
}

function switchGraph(event) {
    $$(".button-active").removeClass("button-active");
    $$(event.target).addClass("button-active");
    displayCurrentGraph();
}
