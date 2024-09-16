// const { DataTypes, Sequelize } = require("sequelize");
// const MSSQL_DB_CLIENT = require("../db");

// const Phone = MSSQL_DB_CLIENT.define(
//   "phones",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//       unique: true,
//       allowNull: false,
//     },
//     // uuid: {
//     //   type: DataTypes.STRING,
//     //   allowNull: false,
//     //   unique: true,
//     // },
//     phone_name: {
//       type: DataTypes.STRING,
//       allowNull: true,
//       // unique: true,
//     },
//     phone_description: {
//       type: DataTypes.TEXT,
//       allowNull: true,
//     },
//     price: {
//       type: DataTypes.TEXT,
//       allowNull: true,
//     },
//     // created_at: {
//     //   type: DataTypes.DATE,
//     //   allowNull: true,
//     //   default: Sequelize.NOW,
//     // },
//     // updated_at: {
//     //   type: DataTypes.DATE,
//     //   allowNull: true,
//     //   default: Sequelize.NOW,
//     // },
//   },
//   // { tableName: "phones", timestamps: false, underscored: true } //to add manual time stamp
//   { timestamps: true, createdAt: "created_at", updatedAt: "updated_at" } //used to add timestamp
// );
// Phone.sync(); //used to create a table
// module.exports = Phone;

const { DataTypes } = require("sequelize");
const MSSQL_DB_CLIENT = require("../db");

const Phone = MSSQL_DB_CLIENT.define(
  "phones",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    phone_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone_description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }
  // { timestamps: true, createdAt: "created_at", updatedAt: "updated_at" } //used to add timestamp
);
Phone.sync();
module.exports = Phone;
