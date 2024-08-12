const dotenv = require('dotenv');
dotenv.config()

const config = {
  INVENTORY_SERVICE: process.env.INVENTORY_SERVICE_URL,
  PAYEMENT_SERVICE: process.env.PAYEMENT_SERVICE_URL,
  INVENTORY_SERVICE: process.env.INVENTORY_SERVICE_URL,
}

module.exports = config;