import {sequelize, Model, DataTypes} from "../Sequelize";

class Gender extends Model {
    public id!: number;
    public name!: string;
}

const nameField = "Nm_Gender";

Gender.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        field: "Id_Gender",
    },
    name: {
        type: DataTypes.STRING(16),
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
    sequelize: sequelize,
});

export {Gender}