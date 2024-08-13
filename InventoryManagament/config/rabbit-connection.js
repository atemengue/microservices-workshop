const amqp = require('amqplib');

let channel;
let connection;

const connectToBroker = async () => {
  try {

    connection = await amqp.connect("amqp://user:password@rabbitmq");
    process.once('SIGINT', () => {
      connection.close();
    })
    channel = await connection.createChannel();

    console.log("Connected to RabbitMQ Consumer.");
  } catch (error) {
    console.warn(error)
    console.log(error.message);
    if (error.message.includes("connect ECONNREFUSED")) {
      setTimeout(() => connectToBroker(), 5000);
    } else if (error.message.includes("Channel is not etablished.")) {
      setTimeout(() => connectToBroker())
    }
  }


}

module.exports = { connectToBroker, channel, connection }