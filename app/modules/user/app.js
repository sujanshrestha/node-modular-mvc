
const express = require("express");
const path = require("path");
const router = require("./routes");


const app = express();

app.set('views', path.join( __dirname, 'views') );

app.use('/', router);


module.exports = app;