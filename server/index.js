const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const pool = require("../database/index");

const PORT = 1000;
const app = express();
// create application/json parser

// parse application/json
app.use(bodyParser.json());

app.use("/", express.static(path.join(__dirname, "../client/public")));

app.get("/", (req, res) => {
  res.send(`listening on port ${PORT}`);
});

const createUserQuery = ({
  username,
  name,
  email,
  password,
  title,
  location,
  bio,
  photo,
}) => {
  const values = `'${username}', '${name}', '${email}', '${password}', '${title}', '${location}', '${bio}', '${photo}'`;
  return `INSERT INTO users (username, name, email, password, title, location, bio, photo) VALUES (${values});`;
};

app.get("/user", (req, res) => {
  pool.query("select * from users", (err, message) => {
    console.log(err, message, "yooo");
    res.send("response");
  });
});

app.post("/user", (req, res) => {
  const queryString = createUserQuery(req.body);
  console.log("yoooo");
  pool
    .query(queryString)
    .then((response) => {
      console.log(response, "response");
      res.send("yoo");
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
