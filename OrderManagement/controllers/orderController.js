import axios from 'axios';
import Order from '../models/orderModel';

export const placeOrder = async (req, res) => {
  try {
    const { productId, quantity } = req.body

    console.log(req.body)

    // // Step1: Check Inventory
    // const availableQuantity = await checkInventory(productId);
    // // const { availableQuantity1 } = await axios.get()

    // if (availableQuantity < quantity) {
    //   return res.status(400).send({ message: "Insufficient stock" });
    // }

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

  } catch (error) {
    res.status(500).error
  }
}