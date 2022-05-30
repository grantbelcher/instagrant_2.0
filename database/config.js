require("dotenv").config();

const config = {
  user: process.env.USER,
  database: process.env.DATABASE,
  port: 5432,
  max: 10,
  idleTimoutMillis: 30000,
};

module.exports = {
  config,
};
