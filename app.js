const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const { logErrors, errorHandler } = require('./utils/middleware/error-handler');

const serverRouter = require('./routes/server-router');

const app = express();

app.use(helmet());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1', serverRouter);

app.use(logErrors);
app.use(errorHandler);

module.exports = app;
