const express = require("express");
const bcrypt = require("bcrypt");
const { userModel } = require("../Models/user.model");
const registerRouter = express.Router();

registerRouter.post("/register", async (req, res) => {
  const {name, email, gender, password } = req.body;
  try {
    bcrypt.hash(password, 2, async (err, hash) => {
      const user = new userModel({name, gender, email, password: hash });
      await user.save();
      res.send("User has been Registered");
    });
  } catch (err) {
    res.send(err);
  }
});

module.exports = {
  registerRouter,
};
