const express = require("express");
const bodyParser = require('body-parser');
const InventoryApiRoutes = require('./routes');
const seedData = require('./data/seedData');

// init express app
const app = express();

app.use(bodyParser.json());


// seed data Inventory Database
seedData();

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
  res.status(200).send("Inventory Management Services");
});

// inventory routes API
InventoryApiRoutes(app);

module.exports = { app }