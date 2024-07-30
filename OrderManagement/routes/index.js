const { updateOrderRouter } = require('./update');
const { createOrderRouter } = require('./create');
const { deleteOrderRouter } = require('./delete');
const { readOrderRouter } = require('./read');

const orderApiROutes = (app) => {
  app.use(createOrderRouter);
  app.use(readOrderRouter);
  app.use(updateOrderRouter);
  app.use(deleteOrderRouter);
};

module.exports = orderApiROutes;