const express = require('express');
const router = express.Router();
const {Multerupload} = require('../stuff/multer-config')
const multer = require('multer');



router.post('/sendFiles', function(req, res) {
  
  Multerupload(req, res, function(err) {
    console.log(req.files);
    if (err instanceof multer.MulterError) {
      console.log(err);
      return res.status(501).send(err.message)     
      
    } else if(err){

      console.log(err);
      return res.status(500).send(err.message) 

    }
    return res.status(200).send("Fichier chargé avec succès")
;
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
