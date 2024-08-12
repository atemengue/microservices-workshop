const express = require('express');
const Inventory = require('../models/inventoryModel');

const router = express.Router();

/**
 * @swagger
 * /api/inventory/{productId}:
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
router.get('/api/inventory/:productId', async (req, res) => {
  try {

    // find inventory and return quanity
    const inventory = await Inventory.findOne({
      productId: req.params.productId
    });

    if (inventory === null) {
      res.status(400).send({
        availableQuantity: 0,
        message: 'ce produit n\'existe pas'
      });
    } else {
      res.status(201).send({
        availableQuantity: inventory.quantity
      });

    }

  } catch (error) {
    res.status(500).send({
      message: 'ce produit n\'existe pas'
    })
  }

});

const checkInventoryRouter = router

module.exports = { checkInventoryRouter };
