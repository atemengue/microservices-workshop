const express = require('express');
const Inventory = require('../models/inventoryModel');
const router = express.Router();

/**
 * @swagger
 * /api/inventory/{productId}:
 *   put:
 *     summary: Update a inventory by ID of the product.
 *     tags: [Inventory]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         description: ID of the inventory to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Inventory'
 *     responses:
 *       200:
 *         description: The updated inventory.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inventory'
 *       500:
 *         description: Internal server error.
 */

router.put('/api/inventory/:productId', async (req, res) => {
  const id = req.params.productId;
  const data = req.body;
  try {
    const product = await Inventory.findOneAndUpdate({
      productId: id
    }, data, {
      new: true
    });
    res.status(204).send(product)
  } catch (error) {
    res.status(500).send()
  }
});

const updateInventoryRouter = router;

module.exports = { updateInventoryRouter };
