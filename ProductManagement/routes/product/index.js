const { createProductRouter } = require('./create');
const { readProductRouter } = require('./read');
const { updateProductRouter } = require('./update');
const { deleteProductRouter } = require('./delete');


const ProductApiRoutes = (app) => {

  app.use(createProductRouter);
  app.use(readProductRouter);
  app.use(updateProductRouter);
  app.use(deleteProductRouter);
};

module.exports = ProductApiRoutes;


