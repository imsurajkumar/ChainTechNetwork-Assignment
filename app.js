var createError = require('http-errors');
var express = require('express');
const hbs = require("hbs");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/RootRouter');

require("./db-connect");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//register partials
hbs.registerPartials(path.join(__dirname, "views/partials"))

//register helper to start index from 1 instead of 0
hbs.registerHelper("inc", function (value, options) {
  return parseInt(value) + 1;
});

// register helper to display the status of task after comparison
hbs.registerHelper('eq', function(arg1, arg2) {
  if(arg1 == arg2)
    return true
});






app.use('', indexRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
