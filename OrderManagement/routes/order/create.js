const express = require('express');
const Order = require('../../models/orderModel');
const Product = require('../../models/productModel');
const config = require('../../config');
const axios = require('axios')

const router = express.Router();

/**
 * @swagger
 * /api/order:
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

router.post('/api/order', async (req, res) => {
  try {

    // TODO

    // Step1: Check Inventory

    if (responseInventory.data.availableQuantity < quantity) {
      return res.status(400).send({ message: "Insufficient stock" });
    };

    // step2: Create Order
    console.log(req.body);
    const order = new Order({
      productId: productId,
      userId,
      orderDate,
      status,
      quantity
    });
    console.log(order);
    await order.save();

    //step3: Update Inventory


    res.status(201).send(order);

  } catch (error) {
    console.log(error.message)
    res.status(500).send({
      message: error.message

    })
  }

});

// create product order Routes
router.post('/api/order/product', async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).send({ product, isCreated: true })
  } catch (error) {
    console.log(error)
    res.status(500).send({ error, isCreated: false })
  }
});

const createOrderRouter = router

module.exports = { createOrderRouter };
