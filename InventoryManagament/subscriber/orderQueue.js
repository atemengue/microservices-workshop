const { connect } = require('../config/rabbit-connection');
const Inventory = require('../models/inventoryModel');


async function startConsumer () {
    const channel  = await connect();
    channel.consume('order', async (message) => {
        const { action, payload, productId } = JSON.parse(message.content.toString());
        switch (action) {
            case 'inventoryCreated':
              console.log(payload, 'inside consumer productCreated');
              break;
            case 'inventoryUpdated':
              console.log(payload, 'inside consumer inventoryUpdated');
              const update = payload;
              const filter = { productId: productId }
              await Inventory.findOneAndUpdate(
                filter, { $inc: update }, update, {
                new: true
              });
              break;
            default:
              console.log('unknown action');
          }

          channel.ack(message);
    }, {
        noAck: false
    });
}
module.exports =  { startConsumer };