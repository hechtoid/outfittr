const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Pant = require('../../models/Pant');

router.get('/user/:user_id', (req, res) => {
    Pant.find({user: { $in: [req.params.user_id, "5ebf0b16b5ce5b0017463aa0"] } })
        .sort({ date: -1 })
        .then(pants => res.json(pants))
        .catch(err =>
            res.status(404).json({ nopantsfound: 'No Pants found on that user' }
        )
    );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
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
