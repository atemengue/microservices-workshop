const { connect } = require('../config/rabbit-connection');
const Inventory = require('../models/inventoryModel');
const { EVENTS } = require('../events')

async function startConsumer() {
  // TODO
}
module.exports = { startConsumer };