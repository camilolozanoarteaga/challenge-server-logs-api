const {
  messageResponse
} = require("../utils");

function logErrors(err, req, res, next) {
  next(err);
}

function errorHandler(error, req, res, next) {
  res.status(error.status || 500);
  res.json(messageResponse('Error servidor', error.message));
}

module.exports = {
  logErrors,
  errorHandler,
};
