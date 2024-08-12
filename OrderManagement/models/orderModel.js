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
 *         - productId
 *         - quantity
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the product.
 *         orderDate:
 *           type: date
 *           description: The date of the order.
 *         userId:
 *           type: string
 *           description: The id of user ordering the product (reference table)
 *         productId:
 *           type: string
 *           description: The ID of the product (reference table).
 *         quantity:
 *           type: number
 *           description: The quantity of product
 *         status:
 *           type: string
 *           description: order Status(Created | Cancelled | Completed | AwaitingPayement)
 *       example:
 *         orderDate: 2024-07-27T14:43:35.766Z
 *         userId : 02076320-bec7-11eb-9b47-2bd668eb8359
 *         status: Created
 *         productId: 66a509b566b3a9ca96bd801c
 *         quantity: 5
 *         amount: 2000
 */

const orderSchema = new mongoose.Schema({
  orderDate: {
    type: Date,
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId, ref: "users",
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