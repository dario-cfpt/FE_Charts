"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize_1 = require("../Sequelize");
class Character extends Sequelize_1.Model {
}
exports.Character = Character;
Character.init({
    id: {
        type: Sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        field: "Id_Character",
    },
    firstName: {
        type: Sequelize_1.DataTypes.STRING(32),
        allowNull: true,
        field: "Nm_First",
    },
    lastName: {
        type: Sequelize_1.DataTypes.STRING(32),
        allowNull: true,
        field: "Nm_Last",
    },
    imgFileName: {
        type: Sequelize_1.DataTypes.STRING(64),
        allowNull: true,
        field: "Nm_File_Img",
    },
    idHouse: {
        type: Sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: "Id_House",
    },
    idGender: {
        type: Sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: "Id_Gender",
    },
}, {
    timestamps: false,
    tableName: 'Tbl_Character',
    sequelize: Sequelize_1.sequelize,
});
//# sourceMappingURL=Character.js.map