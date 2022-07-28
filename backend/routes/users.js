const { User } = require("../models/user");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.post("/", async (req, res) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 10),
  });
  const usernew = await User.findOne({ email: req.body.email });

  if (usernew?.email) return res.status(500).send("Found same mail id");

  if (!user) return res.status(400).send("the user cannot be created!");

  user = await user.save();

  res.send(user);
});

router.get("/", async (req, res) => {
  const userList = await User.find().select("-passwordHash");

  if (!userList) {
    res.status(500).json({ success: false });
  }
  res.send(userList);
});

module.exports = router;
