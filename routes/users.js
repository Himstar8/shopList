const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user');

// réation d'un nouvel utilisateur
router.post('/signin', (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(result => {
      console.log('users list', result);
      res.status(200).json({
        message: 'list of the current user in database',
        result: result
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

// Recherche d'un untilisateur en vue d'une authentification
router.post('/signup', (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    email: req.body.email,
    password: req.body.password
  });

  user
    .save()
    .then(resultat => {
      res.status(201).json({
        message: 'User created',
        result: {
          email: req.body.email,
          type: 'POST'
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

// Get Users actually in db
router.get('/', (req, res, next) => {
  User.find()
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json({
        response: result
      });
      res.send('Signin');
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});
module.exports = router;
