import {sequelize, Model, DataTypes} from "../Sequelize";

class ClassGrowthRate extends Model {
    public value!: number;
    public idClass!: number;
    public idStat!: number;
}

ClassGrowthRate.init({
    value: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
        field: "Nb_Value",
    },
    idClass: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: "Id_Class",
    },
    idStat: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: "Id_Stat",
    },
}, {
    timestamps: false,
    tableName: 'Tbl_Class_Growth_Rate',
    sequelize: sequelize,
});

export {ClassGrowthRate};