"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize_1 = require("../Sequelize");
class ClassGrowthRate extends Sequelize_1.Model {
}
exports.ClassGrowthRate = ClassGrowthRate;
ClassGrowthRate.init({
    value: {
        type: Sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
        field: "Nb_Value",
    },
    idClass: {
        type: Sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: "Id_Class",
    },
    idStat: {
        type: Sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: "Id_Stat",
    },
}, {
    timestamps: false,
    tableName: 'Tbl_Class_Growth_Rate',
    sequelize: Sequelize_1.sequelize,
});
//# sourceMappingURL=ClassGrowthRate.js.map