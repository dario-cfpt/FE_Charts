import {sequelize, Model, DataTypes} from "../Sequelize";

class Stat extends Model {
    public id!: number;
    public name!: string;
    public shortName!: string;
}

const nameField = "Nm_Stat";
const shortNameField = "Nm_Short";

Stat.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        field: "Id_Stat",
    },
    name: {
        type: DataTypes.STRING(16),
        allowNull: false,
        field: nameField,
    },
    shortName: {
        type: DataTypes.STRING(3),
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
    sequelize: sequelize,
});

export {Stat}