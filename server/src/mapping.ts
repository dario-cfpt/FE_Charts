import {sequelize} from "./Sequelize";
import {Catalogue} from "./models/Catalogue";
import {Character} from "./models/Character";
import {CharacterGrowthRate} from "./models/CharacterGrowthRate";
import {ClassGrowthRate} from "./models/ClassGrowthRate";
import {FE_Class} from "./models/FE_Class";
import {Gender} from "./models/Gender";
import {House} from "./models/House";
import {RestrictedCharacterClass} from "./models/RestrictedCharacterClass";
import {Stat} from "./models/Stat";

// Sequelize associations

House.hasMany(Character, {
    sourceKey: "id",
    foreignKey: "idHouse",
});

Gender.hasMany(Character, {
    sourceKey: "id",
    foreignKey: "idGender",
});

Gender.hasMany(FE_Class, {
    sourceKey: "id",
    foreignKey: "idGender",
});

Character.belongsToMany(FE_Class, {
    foreignKey: {name: "Id_Character"},
    through: RestrictedCharacterClass,
});
FE_Class.belongsToMany(Character, {
    foreignKey: {name: "Id_Class"},
    through: RestrictedCharacterClass,
});

Character.belongsToMany(Stat, {
    foreignKey: {name: "Id_Character"},
    through: CharacterGrowthRate,
});
Stat.belongsToMany(Character, {
    foreignKey: {name: "Id_Stat"},
    through: CharacterGrowthRate,
});

FE_Class.belongsToMany(Stat, {
    foreignKey: {name: "Id_Class"},
    through: ClassGrowthRate,
});
Stat.belongsToMany(FE_Class, {
    foreignKey: {name: "Id_Stat"},
    through: ClassGrowthRate,
});

// Create tables if not exists
sequelize.sync();

export {Catalogue, Character, CharacterGrowthRate, ClassGrowthRate, FE_Class, Gender, House, Stat, RestrictedCharacterClass};