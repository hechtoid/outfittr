const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OutfitSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  top: {
    type: {},
    required: true
  },
  pant: {
    type: {},
    required: true
  },
  name: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Outfit = mongoose.model('outfit', OutfitSchema);