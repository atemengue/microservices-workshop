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

    const { status, data } = await axios.post(`${config.ORDER_SERVICE}/order/product`, req.body);
    if (!data.isCreated || status != "201") {
      return res.status(500).send({ message: "Created Product Failed " });
    }
    await product.save();

    res.status(201).send(product)

  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }

});

const createProductRouter = router

module.exports = { createProductRouter };
