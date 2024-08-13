import amqp from "amqplib";

const exchange = "topic_logs";
const queues = ["order", "payment", "products"];
const deadLetterExchange = "dlx";
const deadLetterQueues = ["order_dead", "payment_dead", "products_dead"]

async function setupRabbitMQ() {
  try {
    const connection = await amqp.connect("amqp://user:password@rabbitmq");
    const channel = await connection.createChannel();

    await channel.assertExchange(exchange, "topic", { durable: true });

    await channel.assertExchange(deadLetterExchange, "fanout", {
      durable: true,
    });

    for (const queue of deadLetterQueues) {
      await channel.assertQueue(queue, { durable: true });
      await channel.bindQueue(queue, deadLetterExchange, "");
    }

    for (const queue of queues) {
      await channel.assertQueue(queue, {
        durable: true,
        arguments: {
          "x-dead-letter-exchange": deadLetterExchange,
        },
      });
      await channel.bindQueue(queue, exchange, `${queue}.#`);
    }

    await channel.close();
    await connection.close();
    console.log("RabbitMQ configured");
  } catch (error) {
    console.warn(error);
    console.log(error.message);
    if (error.message.includes("connect ECONNREFUSED")) {
      setTimeout(() => setupRabbitMQ(), 5000);
    }
  }
}

setupRabbitMQ();
