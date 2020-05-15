const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Top = require('../../models/Top');

router.get('/user/:user_id', (req, res) => {
    Top.find({user: { $in: [req.params.user_id, "5ebf0b16b5ce5b0017463aa0"] } })
        .sort({ date: -1 })
        .then(tops => res.json(tops))
        .catch(err =>
            res.status(404).json({ notopsfound: 'No Tops found on that user' }
        )
    );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
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
