var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { logErrors, errorHandler } = require('./utils/middleware/error-handler');
var helmet = require('helmet');

var serverRouter = require('./routes/server-router');
var app = express();

app.use(helmet());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1', serverRouter);

app.use(logErrors);
app.use(errorHandler);


module.exports = app;
