const { DataTypes, Sequelize } = require("sequelize");
const MSSQL_DB_CLIENT = require("../db");

const Courses = MSSQL_DB_CLIENT.define("courses", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  course_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  duration: {
    type: DataTypes.STRING,
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

Courses.sync();
module.exports = Courses;
