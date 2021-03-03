var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var competitorsRouter = require('./routes/competitors');
var clubsRouter = require('./routes/clubs');
var countriesRouter = require('./routes/countries');
var bracketsRouter = require('./routes/brackets');
var tournamentsRouter = require('./routes/tournaments');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/competitors', competitorsRouter);
app.use('/clubs', clubsRouter);
app.use('/countries', countriesRouter);
app.use('/brackets', bracketsRouter);
app.use('/tournaments', tournamentsRouter);

module.exports = app;
