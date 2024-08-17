const express = require('express');
const { connect } = require('../config/rabbit-connection');

const router = express.Router();
const queue1 = "order";
const queue2 = "product"


// TODO sendCreateProductMessage
async function sendCreateProductMessage(data) {

}

router.post('/api/order/event', async (req, res) => {
  try {
    sendCreateProductMessage(req.body);
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
});


// TODO 

const createOrderRouterEvent = router

module.exports = { createOrderRouterEvent };
