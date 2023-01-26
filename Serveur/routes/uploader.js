const express = require('express');
const router = express.Router();
const {Multerupload} = require('../stuff/multer-config')


router.post('/sendFiles', Multerupload, function(req, res) {

   
  console.log(req.files);
  
  (req, res, function(err) {
    if (err) {
      console.log(err);
      
      return res.end("Files uploading unsucessfully!");
    } else {

      return res.status(200).json({message : "Files uploading sucess"});

    }

      
    

  });
});

  
  

 /*  if  (req.statusCode == 500) {
    res.status(500).json({ message : "Erreur lors de l'envoie ..." });
  } else {

    const file2 = req.file;
    console.log(file2);    
    exports.file3

  
  } */

  




module.exports = router ;
