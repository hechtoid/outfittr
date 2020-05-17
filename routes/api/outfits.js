const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Outfit = require('../../models/Outfit');

let masterID = "5ebf0b16b5ce5b0017463aa0" 
router.get('/user/:user_id', (req, res) => {
    Outfit.find({user: { $in: [req.params.user_id, masterID] } })
        .sort({ date: -1 })
        .then(outfits => res.json(outfits))
        .catch(err =>
            res.status(404).json({ nooutfisfound: 'No outfits found for that user' }
        )
    );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const newOutfit = new Outfit({
        top: req.body.top,
        pant: req.body.pant,
        name: req.body.name,
        user: req.user.id
      });
  
      newOutfit.save().then(outfit => res.json(outfit));
    }
  );

  module.exports = router;