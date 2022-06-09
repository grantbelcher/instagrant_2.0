const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

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
    // check password is longer than 6 characters
    check("password", "password must be 6 or more characters").isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    // check if errors exist
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // see if user exists

    // if user exists => send error

    // encrypt password

    // return json webtoken

    return res.status(200).send(req.body);
  }
);

module.exports = router;
