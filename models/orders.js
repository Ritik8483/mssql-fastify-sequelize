const { DataTypes, Sequelize } = require("sequelize");
const MSSQL_DB_CLIENT = require("../db");

const Orders = MSSQL_DB_CLIENT.define("orders", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  order_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  customer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
    references: {
      model: "customers",
      key: "id",
    },
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

Orders.sync();
module.exports = Orders;
