const dotenv = require('dotenv');
dotenv.config()

const config = {
  ORDER_SERVICE: process.env.ORDER_SERVICE_URL,
}

module.exports = config