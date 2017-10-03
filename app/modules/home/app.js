
const express = require("express");
const path = require("path");
const router = require("./routes");
const cookieParser  = require( "cookie-parser");

const app = express();

app.use(cookieParser());

app.set('views', path.join( __dirname, 'views') );

app.use('/', router);


module.exports = app;