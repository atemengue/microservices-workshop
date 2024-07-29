const { createOrderRouter } = require('./create');

const orderApiROutes = (app) => {
  app.use(createOrderRouter);
};

module.exports = orderApiROutes;