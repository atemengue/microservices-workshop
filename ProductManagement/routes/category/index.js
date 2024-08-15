const { readCategoryRouter } = require('./read');
const { createCategoryRouter } = require('./create');
const { deleteCategoryRouter } = require('./delete');

const categoryApiRoutes = (app) => {
  app.use(readCategoryRouter);
  app.use(createCategoryRouter);
  app.use(deleteCategoryRouter);
};

module.exports = categoryApiRoutes