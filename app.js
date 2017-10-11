const express = require("express");
const path  = require( "path");
const favicon  = require( "serve-favicon");
const logger  = require( "morgan");
const cookieParser  = require( "cookie-parser");
const bodyParser  = require( "body-parser");

const Config = require('./config/config.js');

const app = express();

app.Config = Config;
app.set('views', './app/views');
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app/public')) );


app.use('/node_modules', express.static(__dirname + '/node_modules/'));

var middlewares = require('./app/middlewares/middlewares')(app);

var modules = require('./app/modules')(app);

module.exports = app;
