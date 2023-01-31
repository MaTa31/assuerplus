const express = require("express");
const router = express.Router();
const multer = require("../stuff/multer-config");
const auth = require("../stuff/authtk");
const sendMail = require("../stuff/mailler");

router.post("/sendFiles", auth, multer, sendMail);

module.exports = router;
