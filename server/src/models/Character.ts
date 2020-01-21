import {sequelize, Model, DataTypes} from "../Sequelize";

class Character extends Model {
    public id!: number;
    public firstName: string;
    public lastName: string;
    public imgFileName: string;
    public idHouse!: number;
    public idGender!: number;
}

Character.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        field: "Id_Character",
    },
    firstName: {
        type: DataTypes.STRING(32),
        allowNull: true,
        field: "Nm_First",
    },
    lastName: {
        type: DataTypes.STRING(32),
        allowNull: true,
        field: "Nm_Last",
    },
    imgFileName: {
        type: DataTypes.STRING(64),
        allowNull: true,
        field: "Nm_File_Img",
    },
    idHouse: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: "Id_House",
    },
    idGender: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: "Id_Gender",
    },
}, {
    timestamps: false,
    tableName: 'Tbl_Character',
    sequelize: sequelize,
});

export {Character}