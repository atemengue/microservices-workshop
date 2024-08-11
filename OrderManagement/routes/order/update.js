const express = require('express');
const Order = require('../../models/orderModel');

const router = express.Router();

/**
 * @swagger
 * /api/order/{id}:
 *   put:
 *     summary: Update a Order by ID.
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the Order to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: The updated Order.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       500:
 *         description: Internal server error.
 */

router.put('/api/order/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const order = await Order.findByIdAndUpdate(id, data, {
      new: true
    });
    res.status(204).send(order)
  } catch (error) {
    res.status(500).send()
  }
});

const updateOrderRouter = router;

module.exports = { updateOrderRouter };
