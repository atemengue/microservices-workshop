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

    // Step1: Check Inventory
    const { productId, quantity, id, amount, userId, orderDate, status } = req.body

    const responseInventory = await axios.get(`${config.INVENTORY_SERVICE}/api/inventory/${productId}`);

    if (responseInventory.data.availableQuantity < quantity) {
      return res.status(400).send({ message: "Insufficient stock" });
    }

    // // step2: Process payment
    // const responsePayement = await axios.get(`${config.PAYEMENT_SERVICE}/api/payment`, {
    //   "orderId": id,
    //   "amount": amount,
    //   "userId": userId
    // });

    // if (!responsePayement.status == '201') {
    //   return res.status(402).send({ message: "Echec du payement " });
    // }

    // step3: Create Order
    const order = new Order({
      orderDate,
      userId: new mongoose.Types.ObjectId(userId),
      status,
      productId: new mongoose.Types.ObjectId(productId)
    });

    await order.save();

    //step4: Update Inventory
    await axios.put(`${config.INVENTORY_SERVICE}/api/inventory/${productId}`, {
      quantity: -quantity
    });

    res.status(201).send(order);

  } catch (error) {
    console.log(error)
    res.status(500).error

  }

  //res.send('ok')

  // // step2: Process payment
  // const payementSuccessful = await processPayement(
  //   req.body.totalPrice,
  //   req.body.paymentMethod
  // );

  // if (!payementSuccessful) {
  //   return res.status(402).send({ message: "Payement failed " });
  // }

  // // step3: Create Order
  // const order = await Order.create(req.body);

  // // step4: Update Inventory
  // await updateInventory(product, -quantity);

  // res.status(201).send(order);
});

// router.post('/api/order', async (req, res) => {
//   try {
//     const order = new Order(req.body);
//     await order.save();
//     res.status(201).send(order)
//   } catch (error) {
//     res.status(500).send(error)
//   }

// });

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
