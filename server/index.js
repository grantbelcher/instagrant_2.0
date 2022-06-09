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

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));

app.get("/user", (req, res) => {
  pool.query("select * from users", (err, message) => {
    console.log(err, message, "yooo");
    res.send("response");
  });
});

app.post("/api/user", (req, res) => {
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
