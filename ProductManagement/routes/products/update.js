const express = require('express');
const Product = require('../../models/productModel');

const router = express.Router();

router.put('/api/products/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const product = await Product.findByIdAndUpdate(id, data, {
      new: true
    });
    res.status(204).send(product)
  } catch (error) {
    res.status(500).send()
  }
});

const updateProductRouter = router;

module.exports = { updateProductRouter };
