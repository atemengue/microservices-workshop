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
 *         - stock
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
 *         stock:
 *           type: number
 *           description: The stock of th product.
 *       example:
 *         name: Tomate
 *         description: La tomate est une espèce de plantes herbacées du genre Solanum de la famille des Solanacées, originaire du Mexique
 *         price: 500
 *         stock: 200
 */

const produtSchema = new mongoose.Schema({
  name: {
    type: String
  },
  description: String,
  price: Number,
  stock: Number,
}, {
  timestamps: true
});

module.exports = mongoose.model("products", produtSchema);