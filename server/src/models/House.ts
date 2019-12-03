import {sequelize, Model, DataTypes} from "../Sequelize";

class House extends Model {
    public id!: number;
    public name!: string;
}

const nameField = "Nm_House";

House.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        field: "Id_House",
    },
    name: {
        type: DataTypes.STRING(64),
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
    tableName: 'Tbl_House',
    sequelize: sequelize,
});

export {House}