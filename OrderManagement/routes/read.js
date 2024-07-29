const express = require('express');
const Product = require('../models/orderModel');

const router = express.Router();

/**
 * @swagger
 * /product:
 *   post:
 *     summary: Create a new product.
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: The created product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal server error.
 */
router.post('/product', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product)
  } catch (error) {
    res.status(500).send(error)
  }

});

const createProductRouter = router

module.exports = { createProductRouter };
