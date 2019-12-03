"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize_1 = require("../Sequelize");
class House extends Sequelize_1.Model {
}
exports.House = House;
const nameField = "Nm_House";
House.init({
    id: {
        type: Sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        field: "Id_House",
    },
    name: {
        type: Sequelize_1.DataTypes.STRING(64),
        allowNull: false,
        field: nameField,
    },
}, {
    indexes: [
        {
            unique: true,
            fields: [nameField],
        }
    ],
    timestamps: false,
    tableName: 'Tbl_House',
    sequelize: Sequelize_1.sequelize,
});
//# sourceMappingURL=House.js.map