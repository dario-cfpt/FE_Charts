"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize_1 = require("../Sequelize");
class Gender extends Sequelize_1.Model {
}
exports.Gender = Gender;
const nameField = "Nm_Gender";
Gender.init({
    id: {
        type: Sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        field: "Id_Gender",
    },
    name: {
        type: Sequelize_1.DataTypes.STRING(16),
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
    tableName: 'Tbl_Gender',
    sequelize: Sequelize_1.sequelize,
});
//# sourceMappingURL=Gender.js.map