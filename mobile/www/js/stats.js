/*
File name : stats.js
Description : Display the stats of a character with various graphs
 */

const GRAPH_CONTAINER_CHAR_GR_ID = "container-char-gr";
const SELECTED_CLASS_COLOR = "#f7a35c";
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

function displayCharGrowthRates() {
    const charGrowthRates = feData.charGrowthRates.map(x => (x.idCharacter == actualCharId) ? x : null).filter(x => x != null);
    displayTableOfGrowthRates(charGrowthRates, displayGraphOfGrowthRatesForChar);
}


function displayTableOfGrowthRates(growthRates, callback) {
    growthRates.forEach(gr => {
        $$("#stat-" + gr.idStat).text(gr.value);
    });
    $$("td:empty").text(0);
    callback();
}

function createListOfAvailableClasses() {
    // Get all available classes for the character
    const char = feData.characters.find(x => x.id == actualCharId);
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
        displayGraphOfGrowthRatesForChar();
        updateTableOfGrowthRates(char);
    });
}

function updateTableOfGrowthRates(char) {
    const charGrowthRates = feData.charGrowthRates.map(x => (x.idCharacter == char.id) ? x : null).filter(x => x != null);

    classGrowthRates = feData.classGrowthRates.map(x => (x.idClass == char.idClassSelected) ? x : null).filter(x => x != null);
    classGrowthRates.forEach(gr => {
        const charGr = charGrowthRates.find(x => x.id == gr.id);
        const bonus = (gr.value > 0) ? " (+" + gr.value + ")": " (" + gr.value + ")";

        $$("#stat-" + gr.idStat).text(charGr.value + bonus);
    });
}

function displayGraphOfGrowthRatesForChar() {
    if ($$("#btn-graph-column-chart").hasClass("button-active")) {
        displayColumnChartOfCharGrowthRates();
    } else {
        displayPolarSpiderOfCharGrowthRates();
    }
}

function displayColumnChartOfCharGrowthRates() {
    const statsNames = feData.stats.map(x => x.name);
    const char = feData.characters.find(x => x.id == actualCharId);
    const charGrowthRates = feData.charGrowthRates.map(x => (x.idCharacter == char.id) ? x : null).filter(x => x != null);

    const charData = {
        name: char.firstName,
        data: [],
    };
    const classData = {
        data: [],
        color: SELECTED_CLASS_COLOR,
    };
    let classGrowthRates = null;

    if (char.idClassSelected != null && char.idClassSelected > 0) {
        // Get the selected class of the character
        classData.name = feData.classes.find(x => x.id == char.idClassSelected).name;
        classGrowthRates = feData.classGrowthRates.map(x => (x.idClass == char.idClassSelected) ? x : null).filter(x => x != null);
    }

    charGrowthRates.forEach(gr => {
        charData.data.push(Number(gr.value));

        if (classGrowthRates != null) {
            // Compute the growth rates of the character with the growth rates of the class
            let classGr = classGrowthRates.find(x => x.idStat == gr.idStat);

            if (!classGr) {
                classGr = 0;
            }

            classData.data.push(Number(classGr.value));
        }
    });

    const series = [charData];
    if (classGrowthRates != null) {
        series.unshift(classData);
    }

    displayColumnChart(GRAPH_CONTAINER_CHAR_GR_ID, statsNames, series);
}

function displayPolarSpiderOfCharGrowthRates() {
    const char = feData.characters.find(x => x.id == actualCharId);
    const statsNames = feData.stats.map(x => x.name);
    const charData = [computeCharacterGrowthRatesWithClass(char)]; // The data must be an array

    displayPolarSpider(GRAPH_CONTAINER_CHAR_GR_ID, statsNames, charData);
}
