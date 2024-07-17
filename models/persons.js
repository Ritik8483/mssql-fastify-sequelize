const { DataTypes, Sequelize } = require("sequelize");
const MSSQL_DB_CLIENT = require("../db");

const Persons = MSSQL_DB_CLIENT.define("persons", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  // uuid: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  //   unique: true,
  // },
  first_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone_number: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  //   created_at: {
  //     type: DataTypes.DATE,
  //     allowNull: true,
  //     default: Sequelize.NOW,
  //   },
  //   updated_at: {
  //     type: DataTypes.DATE,
  //     allowNull: true,
  //     default: Sequelize.NOW,
  //   },
});
Persons.sync();
module.exports = Persons;
