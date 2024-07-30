const mongoose = require('mongoose');
const { OrderStatus } = require('../types/orderStatus');

/**
 * @swagger
 * components:
 *   schemas:
 *     OrderItem:
 *       type: object
 *       required:
 *         - orderId
 *         - productId
 *         - quantity
 *         - price
 *         - total
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the product.
 *         orderId:
 *           type: string
 *           description: The auto-generated ID of the product.
 *         quantity:
 *           type: number
 *           description: The ID (number) of the product.
 *         price:
 *           type: string
 *           description: The name of the product.
 *         total:
 *           type: string
 *           description: The simple description of the product.
 */

const orderItemSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Types.ObjectId, ref: "orders",
    required: true,
  },
  productId: {
    type: mongoose.Types.ObjectId, ref: "products",
    required: true
  },
  quantity: Number,
  price: Number,
  total: Number
}, {
  timestamps: true
});

module.exports = mongoose.model("orderItems", orderItemSchema);