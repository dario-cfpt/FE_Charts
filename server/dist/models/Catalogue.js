"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize_1 = require("../Sequelize");
class Catalogue extends Sequelize_1.Model {
}
exports.Catalogue = Catalogue;
const versionField = "No_Version";
Catalogue.init({
    id: {
        type: Sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        field: "Id_Catalogue",
    },
    version: {
        type: Sequelize_1.DataTypes.STRING(16),
        allowNull: false,
        field: versionField
    },
    lastUpdate: {
        type: Sequelize_1.DataTypes.DATE,
        allowNull: false,
        field: "Dttm_Last_Update"
    },
}, {
    indexes: [
        {
            unique: true,
            fields: [versionField],
        },
    ],
    timestamps: false,
    tableName: 'Tbl_Catalogue',
    sequelize: Sequelize_1.sequelize,
});
//# sourceMappingURL=Catalogue.js.map