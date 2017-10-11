
const express = require("express");
const path = require("path");
const router = require("./routes");

const test = express();

test.set('views', path.join( __dirname, 'views') );

test.use('/', router);


module.exports = test;