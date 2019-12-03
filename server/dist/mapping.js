"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize_1 = require("./Sequelize");
const Catalogue_1 = require("./models/Catalogue");
exports.Catalogue = Catalogue_1.Catalogue;
const Character_1 = require("./models/Character");
exports.Character = Character_1.Character;
const CharacterGrowthRate_1 = require("./models/CharacterGrowthRate");
exports.CharacterGrowthRate = CharacterGrowthRate_1.CharacterGrowthRate;
const ClassGrowthRate_1 = require("./models/ClassGrowthRate");
exports.ClassGrowthRate = ClassGrowthRate_1.ClassGrowthRate;
const FE_Class_1 = require("./models/FE_Class");
exports.FE_Class = FE_Class_1.FE_Class;
const Gender_1 = require("./models/Gender");
exports.Gender = Gender_1.Gender;
const House_1 = require("./models/House");
exports.House = House_1.House;
const RestrictedCharacterClass_1 = require("./models/RestrictedCharacterClass");
exports.RestrictedCharacterClass = RestrictedCharacterClass_1.RestrictedCharacterClass;
const Stat_1 = require("./models/Stat");
exports.Stat = Stat_1.Stat;
// Sequelize associations
House_1.House.hasMany(Character_1.Character, {
    sourceKey: "id",
    foreignKey: "idHouse",
});
Gender_1.Gender.hasMany(Character_1.Character, {
    sourceKey: "id",
    foreignKey: "idGender",
});
Gender_1.Gender.hasMany(FE_Class_1.FE_Class, {
    sourceKey: "id",
    foreignKey: "idGender",
});
Character_1.Character.belongsToMany(FE_Class_1.FE_Class, {
    foreignKey: { name: "Id_Character" },
    through: RestrictedCharacterClass_1.RestrictedCharacterClass,
});
FE_Class_1.FE_Class.belongsToMany(Character_1.Character, {
    foreignKey: { name: "Id_Class" },
    through: RestrictedCharacterClass_1.RestrictedCharacterClass,
});
Character_1.Character.belongsToMany(Stat_1.Stat, {
    foreignKey: { name: "Id_Character" },
    through: CharacterGrowthRate_1.CharacterGrowthRate,
});
Stat_1.Stat.belongsToMany(Character_1.Character, {
    foreignKey: { name: "Id_Stat" },
    through: CharacterGrowthRate_1.CharacterGrowthRate,
});
FE_Class_1.FE_Class.belongsToMany(Stat_1.Stat, {
    foreignKey: { name: "Id_Class" },
    through: ClassGrowthRate_1.ClassGrowthRate,
});
Stat_1.Stat.belongsToMany(FE_Class_1.FE_Class, {
    foreignKey: { name: "Id_Stat" },
    through: ClassGrowthRate_1.ClassGrowthRate,
});
// Create tables if not exists
Sequelize_1.sequelize.sync();
//# sourceMappingURL=mapping.js.map