
// Order Routes
const { updateOrderRouter } = require('./order/update');
const { createOrderRouter } = require('./order/create');
const { deleteOrderRouter } = require('./order/delete');
const { readOrderRouter } = require('./order/read');

// Product Routes
const { createProductRouter } = require('./product/create');

// User Route
const { createUserRouter } = require('./user/create');

const orderApiROutes = (app) => {
  app.use(createOrderRouter);
  app.use(readOrderRouter);
  app.use(updateOrderRouter);
  app.use(deleteOrderRouter);
  app.use(createProductRouter);
  app.use(createUserRouter);
};

module.exports = orderApiROutes;