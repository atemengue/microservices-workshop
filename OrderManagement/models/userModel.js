
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true
  },

}, {
  timestamps: true
});

module.exports = mongoose.model("users", userSchema);