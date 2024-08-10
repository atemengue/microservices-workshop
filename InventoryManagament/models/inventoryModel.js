const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Inventory:
 *       type: object
 *       required:
 *         - productId
 *         - quantity
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the inventory.
 *         productId:
 *          type: string
 *          description: The id of the product.
 *         quantity:
 *          type: number
 *          description: the quantity of the product
 *       example:
 *         id: 66b74725c5a777422cda5c81
 *         quantity: 20
 *         productId: 66b74725c5a777422cda9c81
 */

const InventorySchema = new mongoose.Schema({
  quantity: Number,
  productId: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("inventory", InventorySchema);