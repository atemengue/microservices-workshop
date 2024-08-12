
// Order Routes
const { updateOrderRouter } = require('./order/update');
const { createOrderRouter } = require('./order/create');
const { deleteOrderRouter } = require('./order/delete');
const { readOrderRouter } = require('./order/read');

// Product Routes
const { createProductRouter } = require('./product/create');
const { readProductRouter } = require('./product/read');

// User Route
const { createUserRouter } = require('./user/create');
const { readUserRouter } = require('./user/read');

const orderApiROutes = (app) => {
  app.use(createOrderRouter);
  app.use(readOrderRouter);
  app.use(updateOrderRouter);
  app.use(deleteOrderRouter);
  app.use(createProductRouter);
  app.use(createUserRouter);
  app.use(readProductRouter);
  app.use(readUserRouter);
};

module.exports = orderApiROutes;