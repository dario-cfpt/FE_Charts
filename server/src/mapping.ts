import {sequelize} from "./Sequelize";

// Create tables if not exists
sequelize.sync();
