const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Top = require('../../models/Top');
// const validateTweetInput = require('../../validation/tweets');

// router.get('/', (req, res) => {
//     Tweet.find()
//         .sort({ date: -1 })
//         .then(tweets => res.json(tweets))
//         .catch(err => res.status(404).json({ notweetsfound: 'No tweets found' }));
// });

router.get('/user/:user_id', (req, res) => {
//	console.log(req);
    Top.find({user: req.params.user_id})
        .sort({ date: -1 })
        .then(tops => res.json(tops))
        .catch(err =>
            res.status(404).json({ notopsfound: 'No Tops found on that user' }
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
      
      // console.log(req)
      
      const newTop = new Top({
        name: req.body.name,
        color: req.body.color,
        hot: req.body.hot,
        formal: req.body.formal,
        wet: req.body.wet,
        athleisure: req.body.athleisure,
        user: req.user.id
      });
  
      newTop.save().then(top => res.json(top));
    }
  );

  module.exports = router;
