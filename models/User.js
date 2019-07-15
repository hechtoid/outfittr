const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  handle: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  dob: {
    type: Date,
    default: Date.now
    },
  location: {
    type: String,
    default: 'Earth'
    },
  preferences: {
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
    }
  },
  wardrobe: {
    pant: [],
    top: []
  }
})

module.exports = User = mongoose.model('users', UserSchema);
