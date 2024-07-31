const express = require('express');
const Product = require('../../models/productModel');
const axios = require('axios');
const config = require('../../config');

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

    // create product product Management Service
    const product = new Product(req.body);

    // create product on Ordervice
    const { status, data } = await axios.post(`${config.ORDER_SERVICE}/order/product`, req.body);
    if (!data.isCreated || status != "201") {
      return res.status(500).send({ message: "Created Product Failed " });
    }

    const inventory = { productId: product.id, quantity: req.body.quantity }

    // create stock of product
    await axios.post(`${config.INVENTORY_SERVICE}/inventory`, inventory);

    await product.save();

    res.status(201).send(product)

  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }

});

const createProductRouter = router

module.exports = { createProductRouter };
