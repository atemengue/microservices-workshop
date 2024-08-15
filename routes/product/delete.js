const express = require('express');
const Product = require('../../models/productModel');

const router = express.Router();

/**
 * @swagger
 * /api/product/{id}:
 *   delete:
 *     summary: Delete a product by ID.
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to delete.
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: No content.
 *       500:
 *         description: Internal server error.
 */
//TODO: complelez le code pour la suppression du produit

router.delete('/api/product/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).send()
  } catch (error) {
    res.status(500).send()
  }
});

const deleteProductRouter = router;

module.exports = { deleteProductRouter };
