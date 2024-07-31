const dotenv = require('dotenv');
dotenv.config()

const config = {
  ORDER_SERVICE: process.env.ORDER_SERVICE_URL,
  INVENTORY_SERVICE: process.env.INVENTORY_SERVICE_URL
}

module.exports = config