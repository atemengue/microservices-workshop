const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - price
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the product.
 *         name:
 *           type: string
 *           description: The name of the product.
 *         description:
 *           type: string
 *           description: The simple description of the product.
 *         price:
 *           type: number
 *           description: The price of the product.
 *       example:
 *         id: 66a50c15ccb82f368e1c4ac2
 *         name: "MacBook Air"
 *         description: "Lightweight laptop with a 13.3-inch Retina display, M1 chip, and up to 18 hours of battery life"
 *         price: 650000
 */

const produtSchema = new mongoose.Schema({
  name: {
    type: String
  },
  description: String,
  price: Number,
}, {
  timestamps: true
});

module.exports = mongoose.model("products", produtSchema);