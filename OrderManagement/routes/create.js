const express = require('express');
const Order = require('../models/orderModel');

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

const createOrderRouter = router

module.exports = { createOrderRouter };
