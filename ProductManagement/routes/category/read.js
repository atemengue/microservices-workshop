const express = require('express');
const Category = require('../../models/categoryModel');

const router = express.Router();

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories.
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: A list of categories.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 *       404:
 *         description: categories not found.
 *       500:
 *         description: Internal server error.
 */

router.get('/categories', async (req, res) => {
  const categories = await Category.find({});
  res.send(categories);
});

/**
 * @swagger
 * /category/{id}:
 *   get:
 *     summary: Get a category by ID.
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the category to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The requested category.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: category not found.
 *       500:
 *         description: Internal server error.
 */
router.get('/category/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      res.status(404).send("category not found");
    } else {
      res.send(category);
    }
  } catch (error) {
    res.status(500).send(err);
  }
});


const readCategoryRouter = router

module.exports = { readCategoryRouter };
