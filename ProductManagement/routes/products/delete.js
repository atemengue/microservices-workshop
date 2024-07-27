const express = require('express');
const Product = require('../../models/productModel');

const router = express.Router();

router.delete('/api/products/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).send()
  } catch (error) {
    res.status(500).send()
  }
});

const deleteProductProductRouter = router;

module.exports = { deleteProductProductRouter };
