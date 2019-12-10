require("dotenv").config();
const axios = require('axios').default;
const cheerio = require('cheerio');

const {ClassGrowthRate} = require("./mapping");
import {FE_Charts} from "./index";

const url:string = "https://serenesforest.net/three-houses/classes/growth-rates/";
const nameIndex:number = 0;


async function importClassGrowthRates() {
    const classes = await FE_Charts.getAllClasses();
    const stats = await FE_Charts.getAllStats();
    axios.get(url)
        .then(res => {
            // We need to remove all line breaks to avoid bad html format
            const html = res.data.replace(/[\n\r]/g, "");
            const $ = cheerio.load(html);

            $("#enemy").remove(); // Remove all contents for enemies
            $("tbody").first().remove(); // Remove the first table who isn't for the growth rates
            $("tbody").last().remove(); // Remove the last table who is for enemies and not playable character

            // parse each tables in the html
            $("tbody").each(function (i, elem) {

                // parse each rows of the table
                elem.children.forEach((row, rowIndex) => {
                    // The first element is the header of the table, so we must skip it
                    if (rowIndex != 0) {
                        const name = $(row.children[nameIndex]).text();
                        const feClass = classes.find(x => x.name == name);

                        if (feClass !== undefined) {
                            for (let j = 0; j < stats.length; j++) {
                                const classGrowthRate = new ClassGrowthRate();
                                classGrowthRate.idClass = feClass.id;
                                classGrowthRate.idStat = stats[j].id;
                                classGrowthRate.value = parseInt($(row.children[j + 1]).text()); // the first col of the table is for the name, so we have to add 1 to the index

                                if (classGrowthRate.value) {
                                    ClassGrowthRate.upsert({
                                        Id_Class: classGrowthRate.idClass,
                                        Id_Stat: classGrowthRate.idStat,
                                        value: classGrowthRate.value,
                                    }).catch(err => FE_Charts.logError(err));
                                }
                            }
                        }
                    }
                });
            });
        })
        .catch(err => {
            FE_Charts.logError(err);
        });
}

importClassGrowthRates();