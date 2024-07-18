const { DataTypes, Sequelize } = require("sequelize");
const MSSQL_DB_CLIENT = require("../db");

const StudentCourse = MSSQL_DB_CLIENT.define("student_courses", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
    references: {
      model: "students",
      key: "id",
    },
  },
  course_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
    references: {
      model: "courses",
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

StudentCourse.sync();
module.exports = StudentCourse;
