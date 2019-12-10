require("dotenv").config();
const axios = require('axios').default;
const cheerio = require('cheerio');

const {CharacterGrowthRate} = require("./mapping");
import {FE_Charts} from "./index";

const url:string = "https://serenesforest.net/three-houses/characters/growth-rates/";
const mainCharName:string = "Byleth";
const mainCharAlternativeName:string = "Protagonist";
const nameIndex:number = 0;


async function importCharGrowthRates() {
    const characters = await FE_Charts.getAllCharacters();
    const stats = await FE_Charts.getAllStats();
    axios.get(url)
        .then(res => {
            // We need to remove all line breaks to avoid bad html format
            const html = res.data.replace(/[\n\r]/g, "");
            const $ = cheerio.load(html);

            // parse each tables in the html
            $("tbody").each(function (i, elem) {
                // parse each rows of the table
                elem.children.forEach((row, rowIndex) => {
                    // The first element is the header of the table, so we must skip it
                    if (rowIndex != 0) {
                        let name = $(row.children[nameIndex]).text();
                        if (name == mainCharAlternativeName) {
                            name = mainCharName;
                        }
                        const char = characters.find(x => x.firstName == name);

                        if (char !== undefined) {
                            for (let j = 0; j < stats.length; j++) {
                                const charGrowthRate = new CharacterGrowthRate();
                                charGrowthRate.idCharacter = char.id;
                                charGrowthRate.idStat = stats[j].id;
                                charGrowthRate.value = parseInt($(row.children[j + 1]).text()); // the first col of the table is for the name, so we have to add 1 to the index

                                CharacterGrowthRate.upsert({
                                    Id_Character: charGrowthRate.idCharacter,
                                    Id_Stat: charGrowthRate.idStat,
                                    value: charGrowthRate.value,
                                }).catch(err => FE_Charts.logError(err));
                            }
                        } else {
                            console.log(`Unknown character ${name}`);
                        }
                    }
                });
            });

        })
        .catch(err => {
            FE_Charts.logError(err);
        });
}

importCharGrowthRates();
