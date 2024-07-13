const Sequelize = require("sequelize");

// SQL Server
const MSSQL_DB_CLIENT = new Sequelize("players", "sa", "Web@Ligo$$$78", {
  host: "20.235.76.232",
  port: "1433",
  dialect: "mssql",
  pool: {
    max: 10,
    min: 0,
    idle: 25000,
    acquire: 25000,
  },
  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: true,
      requestTimeout: 300000,
      useUTC: true,
    },
    timezone: "+05:30",
  },
  logging: false,
  define: {
    timestamps: false,
  },
});

module.exports = MSSQL_DB_CLIENT;
