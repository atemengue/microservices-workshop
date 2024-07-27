const { createProductRouter } = require('./create');
const { readProductRouter } = require('./read');
const { updateProductRouter } = require('./update');
const { deleteProductProductRouter } = require('./delete');


const ProductApiRoutes = (app) => {
  app.use(createProductRouter);
  app.use(readProductRouter);
  app.use(updateProductRouter);
  app.use(deleteProductProductRouter);
};

module.exports = ProductApiRoutes;


