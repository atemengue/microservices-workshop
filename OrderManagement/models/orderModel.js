const mongoose = require('mongoose');
const { OrderStatus } = require('../types/orderStatus');

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       required:
 *         - orderDate
 *         - userId
 *         - status
 *         -productId
 *         - quantity
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the product.
 *         orderDate:
 *           type: date
 *           description: The ID (number) of the product.
 *         userId:
 *           type: string
 *           description: The name of the product.
 *         productId:
 *           type: string
 *           description: The ID of the product (reference table).
 *         quantity:
 *           type: number
 *           description: The ID (number) of the product.
 *         status:
 *           type: string
 *           description: The simple description of the product.
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
  productId: {
    type: mongoose.Types.ObjectId, ref: "products",
    required: true
  },
  quantity: Number,

}, {
  timestamps: true
});

module.exports = mongoose.model("orders", orderSchema);