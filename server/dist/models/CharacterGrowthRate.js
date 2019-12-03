"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize_1 = require("../Sequelize");
class CharacterGrowthRate extends Sequelize_1.Model {
}
exports.CharacterGrowthRate = CharacterGrowthRate;
CharacterGrowthRate.init({
    value: {
        type: Sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
        field: "Nb_Value",
    },
    idCharacter: {
        type: Sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: "Id_Character",
    },
    idStat: {
        type: Sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: "Id_Stat",
    },
}, {
    timestamps: false,
    tableName: 'Tbl_Character_Growth_Rate',
    sequelize: Sequelize_1.sequelize,
});
//# sourceMappingURL=CharacterGrowthRate.js.map