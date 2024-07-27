const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - idCategory
 *         - name
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the category.
 *         idCategory:
 *           type: number
 *           description: The ID (number) of the product.
 *         name:
 *           type: string
 *           description: The name of the category.
 *         description:
 *           type: string
 *           description: The simple description of the category.
 *       example:
 *         idCategory: 1
 *         name: Fruit
 *         description: Le fruit, en botanique, est l'organe végétal contenant une ou plusieurs graines
 */

const categorySchema = new mongoose.Schema({
  idCategory: {
    type: Number,
    required: true,
    unique: true
  },
  name: String,
  description: String,
}, {
  timestamps: true
});

module.exports = mongoose.model("categories", categorySchema);