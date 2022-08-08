const { Profile } = require("../models/profile");
const express = require("express");
const router = express.Router();

router.post('/form/education',async(req,res)=>{
  let education = new Profile({
    education:[{
      school : req.body.school,
      degree : req.body.degree,
      major: req.body.major,
      from:req.body.from,
      to: req.body.to,
    }] 
  });
  if (!education) return res.status(400).send("the education form cannot be created!");
  education = await education.save();

  res.send(education);
});

router.post('/form/experience',async(req,res)=>{
  let experience = new Profile({
    experience:[{
    title:  req.body.title,
    company: req.body.company,
    description: req.body.description,
    from: req.body.from,
    to:  req.body.to
    }]
  });
  if (!experience) return res.status(400).send("the experience form cannot be created!");
  experience = await experience.save();

  res.send(experience);
});

router.post('/form/skills',async(req,res)=>{
  let skills = new Profile.skills({
    skills:[{
      skill1:  req.body.skill1,
      skill2: req.body.skill2,
      skill3: req.body.description,
      skill4: req.body.from,
      language:  req.body.language
    }]
  });
  if (!skills) return res.status(400).send("the skills form cannot be created!");
  skills = await skills.save();

  res.send(skills);
});

router.post('/form/professionalSummary',async(req,res)=>{
  let professionalSummary = new Profile.professionalSummary({
    professionalSummary:[{
      summary:  req.body.summary,
    }]
  });
  if (!professionalSummary) return res.status(400).send("the professionalSummary form cannot be created!");
  professionalSummary = await professionalSummary.save();

  res.send(professionalSummary);
});

router.post('/form/careerObjective',async(req,res)=>{
  let careerObjective = new Profile.careerObjective({
    careerObjective:[{
      objective:  req.body.objective,
    }]
  });
  if (!careerObjective) return res.status(400).send("the careerObjective form cannot be created!");
  careerObjective = await careerObjective.save();

  res.send(careerObjective);
});

router.post('/form/contact',async(req,res)=>{
  let contact = new Profile.contact({
    contact:[{
      firstname : req.body.firstname,
      lastname : req.body.lastname,
      address: req.body.address,
      city:req.body.city,
      state: req.body.state,
      email:req.body.email,
      phoneNumber: req.body.phoneNumber,
    }]
  });

  if (!contact) return res.status(400).send("the contact form cannot be created!");
  contact = await contact.save();

  res.send(contact);
});

router.post('/form/template',async(req,res)=>{
  let template = new Profile.template({
    template:[{
      selection:  req.body.selection,
    }]
  });
  if (!template) return res.status(400).send("the template form cannot be created!");
  template = await template.save();

  res.send(template);
});

router.get('/form',async(req,res)=>{
  const formList = await Profile.find();
  if (!formList) {
    res.status(500).json({ success: false });
  }
  res.send(formList);
})


module.exports = router;
