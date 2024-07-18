// const { DataTypes, Sequelize } = require("sequelize");
// const MSSQL_DB_CLIENT = require("../db");

// const Address = MSSQL_DB_CLIENT.define("address", {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     unique: true,
//     allowNull: false,
//   },
//   address: {
//     type: DataTypes.TEXT,
//     allowNull: true,
//   },
//   state: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   city: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   person_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     unique: true,
//     references: {
//       model: "persons",
//       key: "id",
//     },
//   },
// });

// Address.sync();

// module.exports = Address;

//Another way of syncing relationships
const { DataTypes, Sequelize } = require("sequelize");
const MSSQL_DB_CLIENT = require("../db");
const Persons = require("./persons");

const Address = MSSQL_DB_CLIENT.define("address", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

//Person has one to many Relation with Address table
Persons.hasOne(
  Address,
  //   { foreignKey: "person_id" }
  {
    foreignKey: {
      name: "person_id",
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }
); //belongsTo = One to One;hasOne = One to Many
Address.sync();

module.exports = Address;
