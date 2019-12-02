"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.Model = sequelize_1.Model;
exports.DataTypes = sequelize_1.DataTypes;
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
});
exports.sequelize = sequelize;
//# sourceMappingURL=Sequelize.js.map