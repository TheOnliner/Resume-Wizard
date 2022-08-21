const { Userprofile } = require("../models/userprofile");
const express = require("express");
const router = express.Router();


router.post("/form", async (req, res) => {
  let userprofile = new Userprofile({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    mobnumber: req.body.mobnumber,
    address: req.body.address,
    state: req.body.state,
    city: req.body.city,
    pincode:req.body.pincode,
    email: req.body.email,
    education: req.body.education,
    country: req.body.country,
    region: req.body.region,
    experience: req.body.experience,
    details: req.body.details,
    user: req.body.user
  });

  if (!userprofile) return res.status(400).send("the user cannot be created!");

  userprofile = await userprofile.save();

  setTimeout(function() {
    res.status(200).send(userprofile);
  }, 300);
});


router.get("/form/:userid", async (req, res) => {
  const userprofile = await Userprofile.find({user: req.params.userid});

  if(!userprofile) {
    res.status(500).json({success: false})
} 
setTimeout(function() {
  res.status(200).send(userprofile);
}, 400);
})

router.delete("/form/:userid",(req, res) => {
  Userprofile.findOneAndRemove({user: req.params.userid})
    .then((userprofile) => {
      if (userprofile) {
        return res
          .status(200)
          .json({ success: true, message: "the userprofile is deleted" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "the userprofile not found" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});


module.exports = router;