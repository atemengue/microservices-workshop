const express = require('express');
const Order = require('../../models/orderModel');
const Product = require('../../models/productModel');
const config = require('../../config');
const axios = require('axios');
const { connect } = require('../../config/rabbit-connection');
const { EVENTS } = require('../../events');

const router = express.Router();
const queue = "order";

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

    const channel = await connect();

    // Step1: Check Inventory : sync communication
    const { productId, quantity } = req.body;

    const responseInventory = await axios.get(`${config.INVENTORY_SERVICE}/api/inventory/${productId}`);

    if (responseInventory.data.availableQuantity < quantity) {
      return res.status(400).send({ message: "Insufficient stock" });
    }

    // step2: Create Order
    const order = new Order(req.body);
    await order.save();

    //step3: Update Inventory  async communication
    //TODO

    res.status(201).send(order);

  } catch (error) {
    console.log(error)
    res.status(500).send(error)
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
})

const createOrderRouter = router

module.exports = { createOrderRouter };
