const express = require('express');
const Order = require('../models/orderModel');
const Product = require('../models/productModel');

const router = express.Router();

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Create a new order.
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: The created order.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       500:
 *         description: Internal server error.
 */
router.post('/order', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send(order)
  } catch (error) {
    res.status(500).send(error)
  }

});

// create product order Routes
router.post('/order/product', async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).send({ product, isCreated: true })
  } catch (error) {
    console.log(error)
    res.status(500).send({ error, isCreated: false })
  }
})



const createOrderRouter = router

module.exports = { createOrderRouter };
