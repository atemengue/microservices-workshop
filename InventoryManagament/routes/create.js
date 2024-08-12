const express = require('express');
const Inventory = require('../models/inventoryModel');

const router = express.Router();

/**
 * @swagger
 * /api/inventory:
 *   post:
 *     summary: Create a new Inventory.
 *     tags: [Inventory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Inventory'
 *     responses:
 *       201:
 *         description: The created Inventory.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inventory'
 *       500:
 *         description: Internal server error.
 */
router.post('/api/inventory', async (req, res) => {
  try {

    // create inventory
    const inventory = new Inventory(req.body);
    await inventory.save();

    res.status(201).send(inventory)

  } catch (error) {
    res.status(500).send(error)
  }

});

const createInventoryRouter = router

module.exports = { createInventoryRouter };
