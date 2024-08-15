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
 *         - categoryId
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
 *         categoryId:
 *          type: string
 *          description: The id of th category.
 *       example:
 *         id: 66a50c53ccb82f368e1c4ac6
 *         name: Dell XPS 13
 *         description: Compact and powerful laptop with a 13.4-inch InfinityEdge display, Intel Core i7 processor, and 16GB RAM.
 *         price: 650000
 *         stock: 120
 *         categoryId: 66a507a6f2506fc80a27b576
 */

const produtSchema = new mongoose.Schema({
  name: {
    type: String
  },
  description: String,
  imageUrl: String,
  price: Number,
  stock: Number,
  categoryId: {
    type: mongoose.Types.ObjectId, ref: "categories",
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("products", produtSchema);