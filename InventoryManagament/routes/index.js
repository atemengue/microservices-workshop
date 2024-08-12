const { checkInventoryRouter } = require('./check');
const { createInventoryRouter } = require('./create');
const { readInventoryRouter } = require('./read');
const { updateInventoryRouter } = require('./update');


const InventoryApiRoutes = (app) => {
  app.use(createInventoryRouter);
  app.use(readInventoryRouter);
  app.use(checkInventoryRouter);
  app.use(updateInventoryRouter);
}

module.exports = InventoryApiRoutes;