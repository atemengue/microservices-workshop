const express = require('express');
const Product = require('../../models/productModel');

const router = express.Router();

/**
 * @swagger
 * /api/product/{id}:
 *   put:
 *     summary: Update a product by ID.
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The updated product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal server error.
 */

router.put('/api/product/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const product = await Product.findByIdAndUpdate(id, data, {
      new: true
    });
    res.status(204).send(product)
  } catch (error) {
    res.status(500).send()
  }
});

const updateProductRouter = router;

module.exports = { updateProductRouter };
