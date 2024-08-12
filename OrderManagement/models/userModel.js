
const mongoose = require('mongoose');


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the product.
 *         username:
 *           type: date
 *           description: The date of the order.
 *       example:
 *         id: 66a509b5685b3a9ca96bd801c
 *         username: user0
 *         email: user0@gmail.com"
 */

const userSchema = new mongoose.Schema({
  username: {
    type: String,
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