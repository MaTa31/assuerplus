const express = require('express');
const router = express.Router();
const {Multerupload} = require('../stuff/multer-config')
const multer = require('multer');
const auth = require('../stuff/authtk');




router.post('/sendFiles', auth ,function(req, res) {
  
  Multerupload(req, res, function(err) {

     let files = req.files;

     Object.keys(files).forEach(function (key) {
    
      const paths = (files[key].path) 

      paths.replace(/\//g, "/")
      console.log(paths)
      console.log(typeof(paths))
        
      
      
      module.exports = { paths }


    });

    

    if (err instanceof multer.MulterError) {
      console.log(err);
      return res.status(500).send(err.message)     
      
    } else if(err){

      console.log(err);
      return res.status(500).send(err.message) 

    }
    return res.status(200).send("Fichier chargé avec succès")
;
  });
});

  
  

  




module.exports = router ;
