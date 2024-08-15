const express = require('express');
const Category = require('../../models/categoryModel');

const router = express.Router();

/**
 * @swagger
 * /api/category/{id}:
 *   delete:
 *     summary: Delete a Category by ID.
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the Category to delete.
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: No content.
 *       500:
 *         description: Internal server error.
 */

router.delete('/api/category/:id', async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(204).send()
  } catch (error) {
    res.status(500).send()
  }
});

const deleteCategoryRouter = router;

module.exports = { deleteCategoryRouter };
