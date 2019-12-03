"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize_1 = require("../Sequelize");
class FE_Class extends Sequelize_1.Model {
}
exports.FE_Class = FE_Class;
const nameField = "Nm_Class";
FE_Class.init({
    id: {
        type: Sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        field: "Id_Class",
    },
    name: {
        type: Sequelize_1.DataTypes.STRING(32),
        allowNull: false,
        field: nameField,
    },
    isAvailableForAll: {
        type: Sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        field: "Is_Available_For_All",
    },
    idGender: {
        type: Sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: "Id_Gender",
    },
}, {
    indexes: [
        {
            unique: true,
            fields: [nameField],
        },
    ],
    timestamps: false,
    tableName: 'Tbl_Class',
    sequelize: Sequelize_1.sequelize,
});
//# sourceMappingURL=FE_Class.js.map