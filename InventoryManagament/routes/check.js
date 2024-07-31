const express = require('express');
const Inventory = require('../models/inventoryModel');

const router = express.Router();

/**
 * @swagger
 * /inventory/{productId}:
 *   get:
 *     summary: Check quantity of Products
 *     tags: [Inventory]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         description: ID of the product
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: The check Inventory, quantity of Product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inventory'
 *       500:
 *         description: Internal server error.
 */
router.get('/inventory/:productId', async (req, res) => {
  try {

    // find inventory and return quanity
    const inventory = await Inventory.findOne({
      productId: req.params.productId
    })

    res.status(201).send({
      availableQuantity: inventory.quantity
    })

  } catch (error) {
    res.status(500).send(error)
  }

});

const checkInventoryRouter = router

module.exports = { checkInventoryRouter };
