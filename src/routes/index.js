const accountsRouter = require('./accountRoutes');
const categoriesRouter = require('./categoriesRoutes');

module.exports = (app) => {
  app.use(accountsRouter, categoriesRouter);
};
