"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize_1 = require("../Sequelize");
class RestrictedCharacterClass extends Sequelize_1.Model {
}
exports.RestrictedCharacterClass = RestrictedCharacterClass;
RestrictedCharacterClass.init({
    idClass: {
        type: Sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: "Id_Class",
    },
    idCharacter: {
        type: Sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: "Id_Character",
    },
}, {
    timestamps: false,
    tableName: 'Tbl_Character_Class',
    sequelize: Sequelize_1.sequelize,
});
//# sourceMappingURL=RestrictedCharacterClass.js.map