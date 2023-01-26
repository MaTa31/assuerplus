const express = require('express');
/* const mongodb = require('mongodb'); */
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const auth = require('../stuff/authtk');




/* METHODE POST */

router.post('/register', (req, res, next) => {
   

    bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const adduser = new User({
        email: req.body.email,
        n_client: req.body.n_client,
        password: hash
      });
      adduser.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
  
});
    
router.post('/login', (req, res, next) => {

  User.findOne({ email: req.body.email })
  .then(user => {
      if (!user) {
          return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
      }
      bcrypt.compare(req.body.password, user.password)
          .then(valid => {
              if (!valid) {
                  return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
              }
              res.status(200).json({
                  userId: user._id,
                  token:  jwt.sign(
                   { userId: user._id },
                   'RANDOM_TOKEN_SECRET',
                   { expiresIn: '24h' })
              });
          })
          .catch(error => res.status(500).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));
});

// RECUPERATION DES INFORMATION UTILISATEUR AVEC VERIFICATION TOKEN //


router.get('/user', auth, (req, res, next) => {  

    User.findOne({ _id: req.userId }, (err, user) => {
      if (err) return console.log(err)
      return res.status(200).json({
        title: 'information utilisateur récupérées',
        user: {
          email: user.email,
          n_client: user.n_client
        }
      })
    })

  })


module.exports = router;