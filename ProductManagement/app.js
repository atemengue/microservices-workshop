const express = require("express");
const bodyParser = require('body-parser');
const ProductApiRoutes = require('./routes/products/index');

// init express app
const app = express();

app.use(bodyParser.json());


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

// products routes API
ProductApiRoutes(app);


module.exports = { app }