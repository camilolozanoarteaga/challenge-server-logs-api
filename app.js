var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var serverRouter = require('./routes/server-router');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1', serverRouter);

module.exports = app;
