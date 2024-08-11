const express = require('express');
const Order = require('../../models/orderModel');

const router = express.Router();

/**
 * @swagger
 * /api/order/{id}:
 *   delete:
 *     summary: Delete a Order by ID.
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the Order to delete.
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: No content.
 *       500:
 *         description: Internal server error.
 */

router.delete('/api/order/:id', async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(204).send()
  } catch (error) {
    res.status(500).send()
  }
});

const deleteOrderRouter = router;

module.exports = { deleteOrderRouter };
