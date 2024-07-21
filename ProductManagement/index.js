const express = require("express");
const bodyParser = require('body-parser');
const { mongoConnect } = require('./config/sync');

// init express app
const app = express();

app.use(bodyParser.json());


// database connection
mongoConnect();

// configure swagger
require('./swagger')(app)

// health check point
/**
 * @swagger
 * /:
 *  get:
 *    summary: Health check endpoint
 *    description: Returns a message indicating that the service is running.
 *    responses:
 *      200:
 *        description: A message indicating that the service is running
 */

app.get("/", (req, res) => {
  res.status(200).send("Product Management Services")
});



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Product Management Services Service is running on port ${PORT}`)
})