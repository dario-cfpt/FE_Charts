import {sequelize, Model, DataTypes} from "../Sequelize";

class Catalogue extends Model {
    public id!: number;
    public version!: string;
    public lastUpdate!: Date;
}

const versionField = "No_Version";

Catalogue.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        field: "Id_Catalogue",
    },
    version: {
        type: DataTypes.STRING(16),
        allowNull: false,
        field: versionField
    },
    lastUpdate: {
        type: DataTypes.DATE,
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
    sequelize: sequelize,
});

export {Catalogue}