const express = require('express');
const Inventory = require('../models/inventoryModel');

const router = express.Router();

/**
 * @swagger
 * /inventory:
 *   get:
 *     summary: Get all inventory.
 *     tags: [Inventory]
 *     responses:
 *       200:
 *         description: A list of inventory.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Inventory'
 *       404:
 *         description: inventory not found.
 *       500:
 *         description: Internal server error.
 */

router.get('/inventory', async (req, res) => {
  const inventories = await Inventory.find({});
  res.send(inventories);
});
const readInventoryRouter = router

module.exports = { readInventoryRouter };
