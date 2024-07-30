const express = require('express');
const Order = require('../models/orderModel');

const router = express.Router();

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders.
 *     tags: [Order]
 *     responses:
 *       200:
 *         description: A list of orders.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *       404:
 *         description: orders not found.
 *       500:
 *         description: Internal server error.
 */

router.get('/orders', async (req, res) => {
  const orders = await Order.find({}).populate('products')
  res.send(orders);
});

/**
 * @swagger
 * /order/{id}:
 *   get:
 *     summary: Get a order by ID.
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the order to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The requested order.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: order not found.
 *       500:
 *         description: Internal server error.
 */
router.get('/api/order/:id', async (req, res) => {
  try {
    const order = await order.findById(req.params.id);
    if (!order) {
      res.status(404).send("order not found");
    } else {
      res.send(order);
    }
  } catch (error) {
    res.status(500).send(err);
  }
});


const readOrderRouter = router

module.exports = { readOrderRouter };
