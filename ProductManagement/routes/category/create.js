const express = require('express');
const Category = require('../../models/categoryModel');

const router = express.Router();

/**
 * @swagger
 * /category:
 *   post:
 *     summary: Create a new category.
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: The created category.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       500:
 *         description: Internal server error.
 */

router.post('/category', async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).send(category)
  } catch (error) {
    res.status(500).send(error)
  }

});

const createCategoryRouter = router

module.exports = { createCategoryRouter };
