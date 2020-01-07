require("dotenv").config();
const axios = require('axios').default;
const cheerio = require('cheerio');
const semver = require('semver');
import * as express from "express";
import * as bodyParser from "body-parser";
import * as status from "http-status";

const {Catalogue, Character, CharacterGrowthRate, ClassGrowthRate, FE_Class, Gender, House, Stat, RestrictedCharacterClass} = require("./mapping");

const app = express();
const port = process.env.NODE_PORT || 3000;
const argImport: string = "importing";

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    // Allow client to receive the data
    // from : https://enable-cors.org/server_expressjs.html
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

abstract class FE_Charts {
    static logError(err) {
        // TODO: Log to file and manage the error
        console.log(err);
    }

    static async getAllCharacters() {
        let characters = null;
        await Character.findAll().then(results => {
            characters = results;
        }).catch(err => FE_Charts.logError(err));
        return characters;
    }

    static async getAllCharactersGrowthRates() {
        let charactersGrowRates = null;
        await CharacterGrowthRate.findAll().then(results => {
            charactersGrowRates = results
        }).catch(err => FE_Charts.logError(err));
        return charactersGrowRates;
    }

    static async getAllClassesGrowthRates() {
        let classesGrowRates = null;
        await ClassGrowthRate.findAll().then(results => {
            classesGrowRates = results
        }).catch(err => FE_Charts.logError(err));
        return classesGrowRates;
    }

    static async getAllClasses() {
        let classes = null;
        await FE_Class.findAll().then(results => {
            classes = results
        }).catch(err => FE_Charts.logError(err));
        return classes;
    }

    static async getAllGenders() {
        let genders = null;
        await Gender.findAll().then(results => {
            genders = results
        }).catch(err => FE_Charts.logError(err));
        return genders;
    }

    static async getAllHouses() {
        let houses = null;
        await House.findAll({
            order: [
                ["Id_House", "ASC"]
            ]
        }).then(results => {
            houses = results
        }).catch(err => FE_Charts.logError(err));
        return houses;
    }

    static async getAllRestrictedClasses() {
        let restrictedClasses = null;
        await RestrictedCharacterClass.findAll().then(results => {
            restrictedClasses = results
        }).catch(err => FE_Charts.logError(err));
        return restrictedClasses;
    }

    static async getAllStats() {
        let stats = null;
        await Stat.findAll().then(results => {
            stats = results
        }).catch(err => FE_Charts.logError(err));
        return stats;
    }

    static async getCatalogueLastVersion() {
        let version = null;
        await Catalogue.findAll({
            attributes: ["version", ["Dttm_Last_Update", "lastUpdate"]],
            limit: 1,
            order: [["Dttm_Last_Update", "DESC"]],
        }).then(results => {
            version = results[0].version;
        }).catch(err => FE_Charts.logError(err));
        return version;
    }

    static async getAllData() {
        const version = await this.getCatalogueLastVersion();
        const characters = await FE_Charts.getAllCharacters();
        const characterGrowthRates = await FE_Charts.getAllCharactersGrowthRates();
        const classesGrowthRates = await FE_Charts.getAllClassesGrowthRates();
        const classes = await FE_Charts.getAllClasses();
        const genders = await FE_Charts.getAllGenders();
        const houses = await FE_Charts.getAllHouses();
        const restrictedClasses = await FE_Charts.getAllRestrictedClasses();
        const stats = await FE_Charts.getAllStats();

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
    }
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/version', (req, res) => {
    FE_Charts.getCatalogueLastVersion().then(version => {
        res.status(status.OK).send(version);
    });
});

app.get('/all', async (req, res) => {
    const data = await FE_Charts.getAllData();
    res.status(status.OK).send(data);
});

app.post('/update', async (req, res) => {
    const clientVersion = req.body.version;

    if (clientVersion) {
        FE_Charts.getCatalogueLastVersion().then(async (version) => {
            try {
                if (semver.gt(version, clientVersion)) {
                    const data = await FE_Charts.getAllData();
                    res.status(status.OK).send(data);
                } else {
                    res.status(status.OK).send({}); // Catalogue up-to-date
                }
            } catch (e) {
                res.status(status.INTERNAL_SERVER_ERROR).send(e.message);
            }
        });
    } else {
        res.status(status.BAD_REQUEST).send("'version' parameter undefined");
    }
});

// Don't start the server if we're importing some data
if (process.argv.find(x => x == argImport) == undefined) {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`);
    });
}

export {FE_Charts}