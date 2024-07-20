const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
  categoryId: {
    type: Number,
    required: true,
    unique: true
  },
  name: String,
  description: String,
}, {
  timestamps: true
});

module.exports = mongoose.model("categoryModel", categorySchema);