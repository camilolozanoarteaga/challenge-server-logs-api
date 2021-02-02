const { messageResponse } = require('../utils');

const logErrors = (err, req, res, next) => next(err);

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  res.status(error.status || 500);
  res.json(messageResponse('Error servidor', error.message));
};

module.exports = {
  logErrors,
  errorHandler,
};
