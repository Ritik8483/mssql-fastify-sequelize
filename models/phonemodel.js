const { DataTypes, Sequelize } = require("sequelize");
const MSSQL_DB_CLIENT = require("../db");

const Phone = MSSQL_DB_CLIENT.define("phones", {
  id: {
    type: DataTypes.INTEGER,
    // autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  // uuid: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  //   unique: true,
  // },
  phone_name: {
    type: DataTypes.STRING,
    allowNull: true,
    // unique: true,
  },
  phone_description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  price: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
    default: Sequelize.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
    default: Sequelize.NOW,
  },
});

module.exports = Phone;
