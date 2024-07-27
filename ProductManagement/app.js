const express = require("express");
const bodyParser = require('body-parser');
const ProductApiRoutes = require('./routes/product');
const categoryApiRoutes = require('./routes/category');

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
  res.status(200).send("Product Management Services")
});

// products routes API
ProductApiRoutes(app);

// category routes API
categoryApiRoutes(app);

module.exports = { app }