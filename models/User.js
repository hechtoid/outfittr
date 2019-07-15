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
        type: Boolean
      }
    }


  })

module.exports = User = mongoose.model('users', UserSchema);
