const express = require("express");
const path  = require( "path");
const favicon  = require( "serve-favicon");
const logger  = require( "morgan");
const cookieParser  = require( "cookie-parser");
const bodyParser  = require( "body-parser");

const app = express();

app.set('views', './app/views');
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app/public')) );


var middlewares = require('./app/middlewares/middlewares')(app);

var modules = require('./app/modules')(app);


app.use( (req,res,next) => {
	let err = new Error('Not Found');

	err.status = 404;
	next(err);
});


// error handler
app.use( (err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
