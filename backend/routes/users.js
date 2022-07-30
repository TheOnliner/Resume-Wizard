const { User } = require("../models/user");
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const secret = process.env.secret;
  if (!user) return res.status(400).send("The user not found");

  if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
    const token = jwt.sign(
      {
        userId: user.id,
        // isAdmin: user.isAdmin,
      },
      secret,
      { expiresIn: "1d" }
    );

    res.status(200).send({ email: user.email, token: token });
  } else {
    return res.status(400).send("password is wrong");
  }
});

module.exports = router;
