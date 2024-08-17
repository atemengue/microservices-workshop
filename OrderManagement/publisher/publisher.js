const express = require('express');
const { connect } = require('../config/rabbit-connection');

const router = express.Router();
const queue1 = "order";
const queue2 = "product"


async function sendUpdateInventoryMessage(data) {
  const channel = await connect();
  const message = JSON.stringify({
    action: data.action,
    payload: data
  });

  channel.sendToQueue(queue1, Buffer.from(message));
  console.log("Sent 'inventoryUpdated' message:", message);
}

router.post('/api/order/event', async (req, res) => {
  try {
    sendUpdateInventoryMessage(req.body);
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
});

const createOrderRouterEvent = router

module.exports = { createOrderRouterEvent };
