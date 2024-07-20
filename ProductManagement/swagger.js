const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product Management API',
      version: '1.0.0',
      description: "A simple express API for product Management Services"
    },

    servers: [
      {
        url: "https://propelize.com",
        description: "Production server"
      },
      {
        url: "http://localhost:3000",
        description: "Local server"
      }
    ]
  },
  apis: ["./models/categoryModel.js", "./models/productModel.js"], // files containing annotations as above
}

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))
}