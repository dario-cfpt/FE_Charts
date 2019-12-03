import {sequelize, Model, DataTypes} from "../Sequelize";

class RestrictedCharacterClass extends Model {
    public idClass!: number;
    public idCharacter!: number;
}

RestrictedCharacterClass.init({
    idClass: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: "Id_Class",
    },
    idCharacter: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: "Id_Character",
    },
}, {
    timestamps: false,
    tableName: 'Tbl_Character_Class',
    sequelize: sequelize,
});

export {RestrictedCharacterClass};