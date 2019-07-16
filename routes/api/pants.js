const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Pant = require('../../models/Pant');
// const validateTweetInput = require('../../validation/tweets');

// router.get('/', (req, res) => {
//     Tweet.find()
//         .sort({ date: -1 })
//         .then(tweets => res.json(tweets))
//         .catch(err => res.status(404).json({ notweetsfound: 'No tweets found' }));
// });

router.get('/pant/user/:user_id', (req, res) => {
    Pant.find({user: req.params.user_id})
        .sort({ date: -1 })
        .then(pants => res.json(pants))
        .catch(err =>
            res.status(404).json({ nopantsfound: 'No Pants found onthat user' }
        )
    );
});

// router.get('/:id', (req, res) => {
//     Tweet.findById(req.params.id)
//         .then(tweet => res.json(tweet))
//         .catch(err =>
//             res.status(404).json({ notweetfound: 'No tweet found with that ID' })
//         );
// });

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      // const { errors, isValid } = validateTweetInput(req.body);
        
      // if (!isValid) {
      //   return res.status(400).json(errors);
      // }
  
      const newPant = new Pant({
        name: req.body.name,
        color: req.body.color,
        hot: req.body.hot,
        formal: req.body.formal,
        wet: req.body.wet,
        athleisure: req.body.athleisure,
        user: req.user.id
      });
  
      newPant.save().then(pant => res.json(pant));
    }
  );

  module.exports = router;