const accountsRouter = require('./accountsRoutes');
const categoriesRouter = require('./categoriesRoutes');
const transactionsRouter = require('./transactionsRoutes');

module.exports = (app) => {
  app.use(accountsRouter, categoriesRouter, transactionsRouter);
};
