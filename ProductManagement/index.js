const express = require("express");
const bodyParser = require('body-parser');

// init express app
const app = express();

app.use(bodyParser.json());


// configure swagger
require('./swagger')(app)

app.get("/", (req, res) => {
  res.status(200).send("Product Management Services")
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Product Management Services Service is running on port ${PORT}`)
})