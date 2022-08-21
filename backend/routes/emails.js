const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');

router.post("/", async (req, res) => {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'theresumewizardteam@gmail.com',
        pass: 'eqablhrqwjkadqsc'
    }
  });
  
  const mailOptions = {
        from: 'theresumewizardteam@gmail.com',
        to: req.body.email,
        subject: `Reset Your Password`,
        html:`The password for your account has been reset. Please use this password to access your account. ${req.body.password}`
      };
  
  transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          res.send('error') 
        } else {
          res.send('Sent Successfully')
        }
      }
        );
});

module.exports = router;