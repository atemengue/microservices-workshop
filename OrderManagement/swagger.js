const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Order Management API',
      version: '1.0.0',
      description: "A simple express API for Order Management Services"
    },

    servers: [
      {
        url: "http://localhost:3001",
        description: "Local server"
      },
      {
        url: "https://propelize.com",
        description: "Production server"
      }
    ]
  },
  apis: ["./models/*", "./routes/order/*"], // files containing annotations as above
}

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))
}