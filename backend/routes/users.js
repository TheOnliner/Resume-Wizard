const { User } = require("../models/user");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post("/", async (req, res) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 10),
    isAdmin: req.body.isAdmin,
  });
  const usernew = await User.findOne({ email: req.body.email });

  if (usernew?.email) return res.status(500).send("Found same mail id");

  if (!user) return res.status(400).send("the user cannot be created!");

  user = await user.save();

  setTimeout(function() {
    res.status(200).send(user);
  }, 300);
});

router.get("/", async (req, res) => {
  const userList = await User.find().select("-passwordHash");

  if (!userList) {
    res.status(500).json({ success: false });
  }
  
  setTimeout(function() {
    res.send(userList);
  }, 1500);
});

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id).select("-passwordHash");

  if (!user) {
    res.status(500).json({ success: false });
  }
  setTimeout(function() {
    res.status(200).send(user);
  }, 800);
  
});

router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      passwordHash: bcrypt.hashSync(req.body.password, 10),
      isAdmin: req.body.isAdmin,
    },
    { new: true }
  );

  if (!user) {
    res.status(500).json({ success: false });
  }
  setTimeout(function() {
    res.status(200).send(user);
  }, 800);
});

router.put("/password/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      passwordHash: bcrypt.hashSync(req.body.password, 10),
    },
    { new: true }
  );

  if (!user) {
    res.status(500).json({ success: false });
  }
  setTimeout(function() {
    res.status(200).send(user);
  }, 800);
});

router.post("/forgotpassword", async (req, res) => {
  let user = new User({
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 10),
  });
  const usernew = await User.findOneAndUpdate({ email: req.body.email },
    {
      passwordHash: bcrypt.hashSync(req.body.password, 10),
    },
    { new: true });

    if (!user) {
      res.status(500).json({ success: false });
    }
    setTimeout(function() {
      res.status(200).send(usernew);
    }, 800);
});


router.delete("/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((user) => {
      if (user) {
        return res
          .status(200)
          .json({ success: true, message: "the user is deleted" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "the user not found" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const secret = process.env.secret;
  if (!user) return res.status(400).send("The user not found");

  if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {

    const token = jwt.sign(
      {
          userId: user.id,
          isAdmin: user.isAdmin
      },
      secret,
      {expiresIn : '1d'}
  )
    res
      .status(200)
      .send({ email: user.email, token: token, isAdmin: user.isAdmin });
  } else {
    return res.status(400).send("password is wrong");
  }
});

module.exports = router;
