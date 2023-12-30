const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const i18n = require('i18n-express');
const pug = require('pug');
const winston = require('winston');
const expressWinston = require('express-winston');
const indexRouter = require('./routes/index');
const defaultPricesMiddleware = (req, res, next) => {
  const prices = fs.readFileSync(path.join(__dirname, 'prices.json'), 'utf8');
  req.prices = JSON.parse(prices);
  next();
};

const app = express();
const port = 3001;
const fs = require('fs');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'your-secret-key',
  resave: true,
  saveUninitialized: true,
}));
app.use(i18n({
  translationsPath: path.join(__dirname, 'locales'),
  siteLangs: ['en', 'ru'],
  textsVarName: 'tr',
  defaultLang: 'en',
}));
app.use(expressWinston.logger({
  transports: [
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
  format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
  )
}));
app.use(defaultPricesMiddleware);

app.use('/', indexRouter);
app.use('/reserve', indexRouter);
app.use('/static', express.static('public'));
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) {
  //console.log(err.message);
  //console.log(req.app.get('env') === 'development' ? err : {});

  res.render('error', {
    message: req.body.message,
    title: req.body.title,
  });
});
app.listen(port,() => console.log(`Listening on port ${port}`));
module.exports = app;