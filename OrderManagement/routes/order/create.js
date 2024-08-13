const express = require('express');
const Order = require('../../models/orderModel');
const Product = require('../../models/productModel');
const config = require('../../config');
const axios = require('axios')
const mongoose = require('mongoose')

const router = express.Router();

/**
 * @swagger
 * /api/order:
 *   post:
 *     summary: Create a new order.
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: The created order.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       500:
 *         description: Internal server error.
 */

router.post('/api/order', async (req, res) => {
  try {

    // TODO

    // Step1: Check Inventory


    // Step2: Process payment


    // step3: Create Order
  

    //step4: Update Inventory

  } catch (error) {
    console.log(error)
    res.status(500).error
  }

});
;

// create product order Routes
router.post('/api/order/product', async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).send({ product, isCreated: true })
  } catch (error) {
    console.log(error)
    res.status(500).send({ error, isCreated: false })
  }
})



const createOrderRouter = router

module.exports = { createOrderRouter };
