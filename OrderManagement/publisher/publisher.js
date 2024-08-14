const express = require('express');
const { connect } = require('../../config/rabbit-connection');

const router = express.Router();
const queue1 = "order";
const queue2 = "product"


async function sendUpdateInventoryMessage(){
    const channel = await connect();
    const message = JSON.stringify({
        action: "inventoryUpdated",
        productId: productId,
        payload: {
          quantity: -quantity,
        }
      });

      channel.sendToQueue(queue1, Buffer.from(message));
      console.log("Sent 'inventoryUpdated' message:", message);
}

router.post('/api/order/event', async (req, res) => {
  try {
    sendUpdateInventoryMessage();
  } catch (error) {
    console.log(error)
    res.status(500).error
  }
});

const createOrderRouterEvent = router

module.exports = { createOrderRouterEvent };
