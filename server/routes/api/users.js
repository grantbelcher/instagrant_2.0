const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const pool = require("../../../database/index");
const { createUserQuery } = require("../../../database/queries/users");

// @route     GET api/users
// @desc      Test Route
// @access    Public
router.get("/", (req, res) => res.send("Users route"));

// @route     POST api/users
// @desc      Create new user
// @access    Public
router.post(
  "/",
  [
    // check that username exists
    check("username", "username is required").notEmpty(),
    // check that email exists in req body
    check("email", "email is required").notEmpty(),
    check("username", "name is required").notEmpty(),
    // check password is longer than 6 characters
    check("password", "password must be 6 or more characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    // check if errors exist
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // destructure request body
    const { username, email, password, name, title, location, bio, photo } =
      req.body;

    const userInfo = req.body;

    // see if user exists
    pool
      .query(`SELECT * FROM users WHERE username ='${username}'`)
      .then((result) => {
        // if user exists => send error
        if (result.rows.length) {
          res.status(400).json({ errors: [{ msg: "User already exists" }] });
        }
        console.log(req.body);
        const queryString = createUserQuery(userInfo);
        pool
          .query(queryString)
          .then((result) => {
            return pool.query(
              `SELECT * FROM users WHERE username = '${username}'`
            );
          })
          .then((data) => {
            const { user_id: userId } = data.rows[0];
            jwt.sign(
              { userId },
              process.env.JWT_SECRET,
              {
                expiresIn: "1h",
              },
              (err, token) => {
                if (err) {
                  console.log(err, "ERROR CREATING TOKEN");
                } else {
                  return res.json({ token });
                }
              }
            );
            // return res.json({ token, username, userId });
          })
          .catch((err) => {
            console.log(err, "ERROR ON INSERTION");
          });
      })
      .catch((error) => {
        console.log(error, "server error");
        res.status(500).send("server error");
      });

    // encrypt password

    // return json webtoken

    // return res.status(200).send(req.body);
  }
);

module.exports = router;
