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
const semver = require('semver');
const express = require("express");
const bodyParser = require("body-parser");
const status = require("http-status");
const { Catalogue, Character, CharacterGrowthRate, ClassGrowthRate, FE_Class, Gender, House, Stat, RestrictedCharacterClass } = require("./mapping");
const app = express();
const port = process.env.NODE_PORT || 3000;
const argImport = "importing";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    // Allow client to receive the data
    // from : https://enable-cors.org/server_expressjs.html
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
class FE_Charts {
    static logError(err) {
        // TODO: Log to file and manage the error
        console.log(err);
    }
    static getAllCharacters() {
        return __awaiter(this, void 0, void 0, function* () {
            let characters = null;
            yield Character.findAll().then(results => {
                characters = results;
            }).catch(err => FE_Charts.logError(err));
            return characters;
        });
    }
    static getAllCharactersGrowthRates() {
        return __awaiter(this, void 0, void 0, function* () {
            let charactersGrowRates = null;
            yield CharacterGrowthRate.findAll({
                attributes: ["value", "idCharacter", "idStat"]
            }).then(results => {
                charactersGrowRates = results;
            }).catch(err => FE_Charts.logError(err));
            return charactersGrowRates;
        });
    }
    static getAllClassesGrowthRates() {
        return __awaiter(this, void 0, void 0, function* () {
            let classesGrowRates = null;
            yield ClassGrowthRate.findAll({
                attributes: ["value", "idClass", "idStat"]
            }).then(results => {
                classesGrowRates = results;
            }).catch(err => FE_Charts.logError(err));
            return classesGrowRates;
        });
    }
    static getAllClasses() {
        return __awaiter(this, void 0, void 0, function* () {
            let classes = null;
            yield FE_Class.findAll().then(results => {
                classes = results;
            }).catch(err => FE_Charts.logError(err));
            return classes;
        });
    }
    static getAllGenders() {
        return __awaiter(this, void 0, void 0, function* () {
            let genders = null;
            yield Gender.findAll({
                order: [
                    ["id", "ASC"]
                ]
            }).then(results => {
                genders = results;
            }).catch(err => FE_Charts.logError(err));
            return genders;
        });
    }
    static getAllHouses() {
        return __awaiter(this, void 0, void 0, function* () {
            let houses = null;
            yield House.findAll({
                order: [
                    ["Id_House", "ASC"]
                ]
            }).then(results => {
                houses = results;
            }).catch(err => FE_Charts.logError(err));
            return houses;
        });
    }
    static getAllRestrictedClasses() {
        return __awaiter(this, void 0, void 0, function* () {
            let restrictedClasses = null;
            yield RestrictedCharacterClass.findAll({
                attributes: ["idClass", "idCharacter"]
            }).then(results => {
                restrictedClasses = results;
            }).catch(err => FE_Charts.logError(err));
            return restrictedClasses;
        });
    }
    static getAllStats() {
        return __awaiter(this, void 0, void 0, function* () {
            let stats = null;
            yield Stat.findAll().then(results => {
                stats = results;
            }).catch(err => FE_Charts.logError(err));
            return stats;
        });
    }
    static getCatalogueLastVersion() {
        return __awaiter(this, void 0, void 0, function* () {
            let version = null;
            yield Catalogue.findAll({
                attributes: ["version", ["Dttm_Last_Update", "lastUpdate"]],
                limit: 1,
                order: [["Dttm_Last_Update", "DESC"]],
            }).then(results => {
                version = results[0].version;
            }).catch(err => FE_Charts.logError(err));
            return version;
        });
    }
    static getAllData() {
        return __awaiter(this, void 0, void 0, function* () {
            const version = yield this.getCatalogueLastVersion();
            const characters = yield FE_Charts.getAllCharacters();
            const characterGrowthRates = yield FE_Charts.getAllCharactersGrowthRates();
            const classesGrowthRates = yield FE_Charts.getAllClassesGrowthRates();
            const classes = yield FE_Charts.getAllClasses();
            const genders = yield FE_Charts.getAllGenders();
            const houses = yield FE_Charts.getAllHouses();
            const restrictedClasses = yield FE_Charts.getAllRestrictedClasses();
            const stats = yield FE_Charts.getAllStats();
            return {
                version: version,
                characters: characters,
                charGrowthRates: characterGrowthRates,
                classGrowthRates: classesGrowthRates,
                classes: classes,
                genders: genders,
                houses: houses,
                restrictedClasses: restrictedClasses,
                stats: stats,
            };
        });
    }
}
exports.FE_Charts = FE_Charts;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/version', (req, res) => {
    FE_Charts.getCatalogueLastVersion().then(version => {
        res.status(status.OK).send(version);
    });
});
app.get('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield FE_Charts.getAllData();
    res.status(status.OK).send(data);
}));
app.post('/update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientVersion = req.body.version;
    if (clientVersion) {
        FE_Charts.getCatalogueLastVersion().then((version) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                if (semver.gt(version, clientVersion)) {
                    const data = yield FE_Charts.getAllData();
                    res.status(status.OK).send(data);
                }
                else {
                    res.status(status.OK).send({}); // Catalogue up-to-date
                }
            }
            catch (e) {
                res.status(status.INTERNAL_SERVER_ERROR).send(e.message);
            }
        }));
    }
    else {
        res.status(status.BAD_REQUEST).send("'version' parameter undefined");
    }
}));
// Don't start the server if we're importing some data
if (process.argv.find(x => x == argImport) == undefined) {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`);
    });
}
//# sourceMappingURL=index.js.map