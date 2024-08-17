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
    const order = new Order(req.body);

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

});