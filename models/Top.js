const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TopSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String
  },
  color: {
    type: String
  },
  hot: {
    type: Boolean,
    default: false
  },
  formal: {
    type: Boolean,
    default: false
  },
  wet: {
    type: Boolean,
    default: false
  },
  athleisure: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Top = mongoose.model('top', TopSchema);