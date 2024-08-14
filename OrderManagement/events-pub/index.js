
// Order Routes event
const { createOrderRouterEvent } = require('../publisher/publisher');

const orderEventRoutes = (app) => {
  app.use(createOrderRouterEvent);
};

module.exports = orderEventRoutes;