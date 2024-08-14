const amqp = require("amqplib");
const amqpUrl = process.env.AMQP_URL || 'amqp://localhost:5672';

const queue = "order";

const connect = async () => {
  try {

    console.log("Trying to connect consumer ....");
    let connection = await amqp.connect(amqpUrl);
    process.once('SIGINT', () => {
      connection.close();
    })

    const channel = await connection.createChannel();
    console.log("Connected to RabbitMQ Consumer.");
    return channel;

  } catch (error) {
    console.warn(error)
    console.log(error.message);
    if (error.message.includes("connect ECONNREFUSED")) {
      setTimeout(() => connect(), 5000);
    } else if (error.message.includes("Channel is not etablished.")) {
      setTimeout(() => connect())
    }
  }
}

module.exports = { connect }