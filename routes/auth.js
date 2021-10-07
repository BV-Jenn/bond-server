const express = require("express");

const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { email, firstName, lastName, password } = req.body;

  try {
    const newUser = new User({
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    });

    await newUser.save();

    res.json({
      success: true,
      user: newUser,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
