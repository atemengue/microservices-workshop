const express = require('express');
const Product = require('../../models/productModel');

const router = express.Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products.
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       404:
 *         description: products not found.
 *       500:
 *         description: Internal server error.
 */

router.get('/products', async (req, res) => {
  const products = await Product.find({}).populate('categoryId')
  res.send(products);
});

/**
 * @swagger
 * /product/{id}:
 *   get:
 *     summary: Get a product by ID.
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The requested product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: product not found.
 *       500:
 *         description: Internal server error.
 */
router.get('/api/product/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).send("product not found");
    } else {
      res.send(product);
    }
  } catch (error) {
    res.status(500).send(err);
  }
});


const readProductRouter = router

module.exports = { readProductRouter };
