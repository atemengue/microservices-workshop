const express = require("express");
const bodyParser = require('body-parser');
const orderApiROutes = require('./routes')

// init express app
const app = express();

app.use(bodyParser.json());


// configure swagger
require('./swagger')(app)


// healthcheck endpoint
/**
 * @swagger
 * /:
 *   get:
 *     summary: Healthcheck endpoint.
 *     description: Returns a message indicating that the service is running.
 *     responses:
 *       200:
 *         description: A message indicating that the service is running.
 */

app.get("/", (req, res) => {
  res.status(200).send("Order Management Services")
});

// products routes API
orderApiROutes(app);

// category routes API

module.exports = { app }