const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const User = require("../models/User");
const auth = require("../stuff/authtk");
const { paths } = require("./uploader");
require("dotenv").config();

router.post("/sendMail", auth, (req, res, next) => {
  User.findOne({ _id: req.userId }, (err, user) => {
    if (err) return console.log(err);

    res.status(200);

    try {

      
      let transporter = nodemailer.createTransport({
        host: "mail54.lwspanel.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.userMail, // generated ethereal user
          pass: process.env.passwordMail, // generated ethereal password
        },
        tls: { rejectUnauthorized: false },
      });

      let info = transporter.sendMail({
        from: "assuerplus@terminastor.fr", // sender address
        to: "assuerplus@terminastor.fr", // list of receivers
        subject: "Documents de sinistre du client n° " + user.n_client, // Subject line       
        text: "Bonjour, votre client a subit un accident vous trouverez en piece jointe les documents et photos de l'evenement. Vous pouvez le contacter par mail : " + user.email + " ceci est un mail automatique veuillez ne pas repondre", // plain text body
    
        attachments: 
          {
              path: "upload/968559.png"
          }
      
      });

      console.log("Message sent: %s", info.messageId);
      return res.status(200).json({ message: "Mail envoyé" });
    } catch (error) {
      console.log(error);
    }    
  });
});
module.exports = router;
