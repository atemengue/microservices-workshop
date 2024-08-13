const amqp = require('amqplib');

let connection;

async function connectAndStartUp() {
  try {
    console.log("Trying to connect ....");
    connection = await amqp.connect("amqp://user:password@rabbitmq");
    channel = await connection.createChannel();

    console.log("Connected to RabbitMQ Producer.");
   
  } catch (error) {
    console.log(error.message);
    if (error.message.includes("connect ECONNREFUSED")) {
      setTimeout(() => connectAndStartUp(), 5000);
    }
  }
}

module.exports = { connectAndStartUp, connection }
