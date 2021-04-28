const accountsRouter = require('./accountRoutes');

module.exports = (app) => {
  app.use(accountsRouter);
};
