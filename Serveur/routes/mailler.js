const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
require('dotenv').config();

 function sendmail () {


  let transporter = nodemailer.createTransport({
    host: "mail54.lwspanel.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.userMail, // generated ethereal user
      pass: process.env.passwordMail, // generated ethereal password
    },
    tls : { rejectUnauthorized: false }
  });
  
    let info =  transporter.sendMail({
      from: "assuerplus@terminastor.fr", // sender address
      to: "assuerplus@terminastor.fr", // list of receivers
      subject: "Documents de sinistre" `<${req.body.n_client}>`   ,  // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
      attachments : req.body.Files
    });
  
  
  
  
  
  
  
  
  
    console.log("Message sent: %s", info.messageId);
  
  };
  
  
  
  
    
  
  
  







