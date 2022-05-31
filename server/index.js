const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

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

app.post("/user", (req, res) => {
  console.log(req.body, "look here");
  res.send("recieved");
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
