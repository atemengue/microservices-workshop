const mongoose = require('mongoose');
const { OrderStatus } = require('../types/orderStatus');

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       required:
 *         - idProduct
 *         - name
 *         - description
 *         - price
 *         - stock
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the product.
 *         idProduct:
 *           type: number
 *           description: The ID (number) of the product.
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
 *         idCategory:
 *          type: string
 *          description: The id of th category.
 *       example:
 *         name: Tomate
 *         description: La tomate est une espèce de plantes herbacées du genre Solanum de la famille des Solanacées, originaire du Mexique
 *         price: 500
 *         stock: 200
 */

const orderSchema = new mongoose.Schema({
  orderDate: {
    type: Date,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  status: {
    type: String,
    require: Object.values(OrderStatus)
  },
}, {
  timestamps: true
});

module.exports = mongoose.model("orders", orderSchema);