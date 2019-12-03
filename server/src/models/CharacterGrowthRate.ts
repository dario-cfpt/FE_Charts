import {sequelize, Model, DataTypes} from "../Sequelize";

class CharacterGrowthRate extends Model {
    public value!: number;
    public idCharacter!: number;
    public idStat!: number;
}

CharacterGrowthRate.init({
    value: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
        field: "Nb_Value",
    },
    idCharacter: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: "Id_Character",
    },
    idStat: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: "Id_Stat",
    },
}, {
    timestamps: false,
    tableName: 'Tbl_Character_Growth_Rate',
    sequelize: sequelize,
});

export {CharacterGrowthRate};