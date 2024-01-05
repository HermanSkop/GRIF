const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const i18n = require('i18n');
const i18ne = require('i18n-express');
const pug = require('pug');
const winston = require('winston');
const expressWinston = require('express-winston');
const indexRouter = require('./routers/index').indexRouter;
const userRouter = require('./routers/user').userRouter;
const validatorRouter = require('./routers/validator').validatorRouter;
const {getPlans} = require('./schemas/pricing-schema');
const defaultPricesMiddleware = async (req, res, next) => {
    req.prices = await getPlans() || [];
    next();
};
i18n.configure({
  locales: ['en', 'ru'],
  defaultLocale: 'en',
  directory: __dirname + '/locales',
  objectNotation: true,

});

const app = express();
const fs = require('fs');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true,
}));
app.use(i18n.init);
app.use(i18ne({
    translationsPath: path.join(__dirname, 'locales'),
    siteLangs: ['en', 'ru'],
    textsVarName: 'tr'
}));
app.use(expressWinston.logger({
    transports: [
        new winston.transports.File({filename: 'logs/combined.log'}),
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));
app.use(defaultPricesMiddleware);

app.use('/', indexRouter);
app.use('/validate', validatorRouter);
app.use('/user', userRouter);
app.use('/static', express.static('public'));

app.use(function (err, req, res, next) {
    console.error(err);
    if (err.isNotification){
        res.status(400).render('error-notification', {
            title: res.__(err.title?err.title:'error'),
            message: res.__(err.message?err.message:'error_text'),
        });
    }
    else {
        res.status(500).render('error', {
            title: res.__('error'),
            message: res.__('error_text'),
        });
    }
});

module.exports = {
    app,
    i18n
};
