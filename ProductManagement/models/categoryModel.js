const mongoose = require('mongoose');
/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the category.
 *         name:
 *           type: string
 *           description: The name of the category.
 *         description:
 *           type: string
 *           description: The simple description of the category.
 *       example:
 *         id: 66a50797f2506fc80a27b574
 *         name: "Mobile Phones"
 *         description: Mobile phones are essential devices for communication, entertainment, and productivity in the modern world. This category includes a wide range of smartphones, feature phones, and accessories from various brands and manufacturers. 
 */

const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
}, {
  timestamps: true
});

module.exports = mongoose.model("categories", categorySchema);