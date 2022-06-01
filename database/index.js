const pg = require("pg");
const config = require("./config");

const pool = new pg.Pool(config);

pool.on("connect", () => {
  console.log("connected to the database");
});

// pool.on("remove", () => {
//   console.log("client removed");
//   process.exit(0);
// });

module.exports = pool;
