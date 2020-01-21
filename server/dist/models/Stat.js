"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize_1 = require("../Sequelize");
class Stat extends Sequelize_1.Model {
}
exports.Stat = Stat;
const nameField = "Nm_Stat";
const shortNameField = "Nm_Short";
Stat.init({
    id: {
        type: Sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        field: "Id_Stat",
    },
    name: {
        type: Sequelize_1.DataTypes.STRING(16),
        allowNull: false,
        field: nameField,
    },
    shortName: {
        type: Sequelize_1.DataTypes.STRING(3),
        allowNull: false,
        field: shortNameField,
    },
}, {
    indexes: [
        {
            unique: true,
            fields: [nameField],
        },
        {
            unique: true,
            fields: [shortNameField],
        }
    ],
    timestamps: false,
    tableName: 'Tbl_Stat',
    sequelize: Sequelize_1.sequelize,
});
//# sourceMappingURL=Stat.js.map