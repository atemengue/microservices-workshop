const amqp = require('amqplib');
const amqpUrl = process.env.AMQP_URL || 'amqp://localhost:5672';

async function connect() {
  try {
    console.log("Trying to connect ....");
    const connection = await amqp.connect(amqpUrl);
    const channel = await connection.createChannel();

    console.log("Connected to RabbitMQ Producer.");
    return channel;

  } catch (error) {
    console.log(error.message);
    if (error.message.includes("connect ECONNREFUSED")) {
      setTimeout(() => connect(), 5000);
    }
  }
}

module.exports = { connect }
