const { Profile } = require("../models/profile");
const express = require("express");
const router = express.Router();


router.get('/form',async(req,res)=>{
  const formList = await Profile.find();
  if (!formList) {
    res.status(500).json({ success: false });
  }
  res.send(formList);
})

router.post('/form',async(req,res)=>{
  let profile = new Profile({
    education: {
      school : req.body.education.school,
      degree : req.body.education.degree,
      major: req.body.education.major,
      from:req.body.education.from,
      to: req.body.education.to
    },
    experience:{
      title:  req.body.experience.title,
      company: req.body.experience.company,
      description: req.body.experience.description,
      from: req.body.experience.from,
      to:  req.body.experience.to
        },
    skills:{
      skill1:  req.body.skills.skill1,
      skill2: req.body.skills.skill2,
      skill3: req.body.skills.skill3,
      skill4: req.body.skills.skill4,
      language:  req.body.skills.language
        },
    professionalSummary:{
          summary:  req.body.professionalSummary.summary,
        },
    careerObjective:{
          objective:  req.body.careerObjective.objective,
        },
    contact:{
      firstName : req.body.contact.firstName,
      lastName : req.body.contact.lastName,
      address: req.body.contact.address,
      city:req.body.contact.city,
      state: req.body.contact.state,
      email:req.body.contact.email,
      phoneNumber: req.body.contact.phoneNumber,
        }, 
    template:{
      selection:  req.body.template.selection,
      },
      user: req.body.user
  });
  if (!profile) return res.status(400).send("the profile form cannot be created!");
  
  profile = await profile.save();

  res.send(profile);
});

router.delete("/form/userprofile/:userid",(req, res) => {
  Profile.findOneAndRemove({user: req.params.userid})
    .then((profile) => {
      if (profile) {
        return res
          .status(200)
          .json({ success: true, message: "the profile is deleted" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "the profile not found" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, error: err });
    });
});


router.get(`/form/userprofile/:userid`, async (req, res) =>{
  const userProfile = await Profile.find({user: req.params.userid})
  if(!userProfile) {
      res.status(500).json({success: false})
  } 
  setTimeout(function() {
    res.status(200).send(userProfile);
  }, 400);
})

module.exports = router;

