"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const axios = require('axios').default;
const cheerio = require('cheerio');
const { CharacterGrowthRate } = require("./mapping");
const index_1 = require("./index");
const url = "https://serenesforest.net/three-houses/characters/growth-rates/";
const mainCharName = "Byleth";
const mainCharAlternativeName = "Protagonist";
const nameIndex = 0;
function importCharGrowthRates() {
    return __awaiter(this, void 0, void 0, function* () {
        const characters = yield index_1.FE_Charts.getAllCharacters();
        const stats = yield index_1.FE_Charts.getAllStats();
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
                                }).catch(err => index_1.FE_Charts.logError(err));
                            }
                        }
                        else {
                            console.log(`Unknown character ${name}`);
                        }
                    }
                });
            });
        })
            .catch(err => {
            index_1.FE_Charts.logError(err);
        });
    });
}
importCharGrowthRates();
//# sourceMappingURL=importCharGrowthRates.js.map