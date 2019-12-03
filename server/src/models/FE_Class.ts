import {sequelize, Model, DataTypes} from "../Sequelize";

class FE_Class extends Model {
    public id!: number;
    public name!: string;
    public isAvailableForAll!: boolean;
    public idGender!: number;
}

const nameField = "Nm_Class";

FE_Class.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        field: "Id_Class",
    },
    name: {
        type: DataTypes.STRING(32),
        allowNull: false,
        field: nameField,
    },
    isAvailableForAll: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: "Is_Available_For_All",
    },
    idGender: {
        type: DataTypes.INTEGER.UNSIGNED,
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
    sequelize: sequelize,
});

export {FE_Class}