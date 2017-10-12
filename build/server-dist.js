/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var app = __webpack_require__ (4);
var debug = __webpack_require__ (27)('node-app:server');
var http = __webpack_require__ (28);

/**
 * Get port from environment and store in Express.
 */

// console.log(process.env.NODE_ENV);
// console.log(app.get('env'));
// console.log(app.Config);

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


app.closeServer = function() {
  server.close();
}

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
  console.log('Listening on ' + bind);
}


module.exports = server;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const express = __webpack_require__(0);
const path  = __webpack_require__( 1);
const favicon  = __webpack_require__( 5);
const logger  = __webpack_require__( 6);
const cookieParser  = __webpack_require__( 2);
const bodyParser  = __webpack_require__( 7);
const expressValidator  = __webpack_require__( 8);

const Config = __webpack_require__(9);

const app = express();

app.Config = Config;
app.set('views', './app/views');
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());
app.use(express.static(path.join(__dirname, 'app/public')) );


app.use('/node_modules', express.static(__dirname + '/node_modules/'));

var middlewares = __webpack_require__(10)(app);

var modules = __webpack_require__(12)(app);

module.exports = app;

/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),
/* 9 */
/***/ (function(module, exports) {


module.exports = {
    // application

    PORT : '3000',
    DOMAIN: 'localhost',

    // database 
    mongo: {
        db_name: 'node-app',
        db_host: 'localhost',
        db_port: '27017'
    }
  
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// This file contains all post-request middlewares

module.exports = (app) => {

	const isEmpty = __webpack_require__ (11);

	app.use((req,res,next) => {

		// middlewares here

		if( isEmpty(req.cookies) )
		{
			res.cookie("visited" , '1', {expire : new Date(Date.now() + 9999)});

		}
		else {

			let visited = parseInt(req.cookies.visited);
			//res.clearCookie("visited");
			res.cookie("visited" , ++visited, {expire : new Date(Date.now() + 9999)});
		}		

		next();
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

	// define some more middlewares here
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {



module.exports = function isEmpty(obj) {

    // Speed up calls to hasOwnProperty
    let hasOwnProperty = Object.prototype.hasOwnProperty;

    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {
// modules dependencies
const path  = __webpack_require__( 1);
const mongo = __webpack_require__(13);
const monk = __webpack_require__(14);
const cookieParser  = __webpack_require__( 2);

// modules path
const home = __webpack_require__(15);
const user = __webpack_require__(18);
const test = __webpack_require__(21);
const client = __webpack_require__(24);

module.exports = (app) => {

	// correct view path for each modules
	app.use(function(req,res,next){

		var re = /\//;
		var pathList = req.path.split(re, 2);

		moduleName = pathList[1] ? pathList[1] : 'home';
		app.set('views', path.join( __dirname + '/modules/'+ moduleName, 'views') );
		next();
	});

	// use same db connection for each module
	var database = app.Config.mongo.db_name;
	var connect = monk(app.Config.mongo.db_host + ':'+ app.Config.mongo.db_port + '/' + database);

	app.use(function(req,res,next){
		req.connect = connect;
		next();
	});

	// import and use routes for each modules
	// module : user
	app.use('/user', user);

	// module : home
	app.use('/home', cookieParser());
	app.use('/home', home);

	// module : default
	app.use('/', home);

	// module : test
	app.use('/test', test);

	// module : client
	app.use('/client', client);
}

/* WEBPACK VAR INJECTION */}.call(exports, "app"))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("monk");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


const express = __webpack_require__(0);
const router = express.Router();

const index_controller = __webpack_require__(16);

router.get('/', index_controller.index);

module.exports = router

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


var Index = __webpack_require__(17);

exports.index = function(req, res) {

	res.render('index', { title : 'Home', visited: req.cookies.visited });
}

/***/ }),
/* 17 */
/***/ (function(module, exports) {



module.exports = {};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0);
const router = express.Router();

const index_controller = __webpack_require__(19);

router.get('/', index_controller.index);
router.get('/:id(\\d+)', index_controller.get_user);
//router.get('/:userId(\\d+)', index_controller.get_user);
router.post('/add', index_controller.add_user);

router.get('/login', index_controller.login_user);
router.post('/login', index_controller.login_user);

module.exports = router

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {


var Users = __webpack_require__(20);

exports.index = function(req, res) {

	Users.getAll(req.connect, (data) => {
		let allUsers = data;
		console.log(allUsers.length );
		if( ! allUsers.length > 0 )			 
			allUsers = {};

		res.render('index', { title : 'User', allUsers: data });	
	});
	
}

exports.get_user = function(req, res) {
	res.render('userdetails', { title : 'User', id : req.params.id });
    //res.send('NOT IMPLEMENTED: detail: ' + req.params.id);
};

exports.add_user = function(req, res) {
	console.log('here adding user');
	Users.add(req.connect);
	res.redirect('/user');
}

exports.login_user = function(req, res) {

	//req.check('email', 'Email is required').isEmpty();
	req.check('email', 'Email is incorrect format').isEmail();
	
	let errors = req.validationErrors();
	let user = {
		'email' : req.sanitize('email').escape().trim()
	}

	if(! errors) {
		Users.getByEmail(req.connect, user, (data) => {
			if(data)
				res.render('welcome', { title : 'Welcome ' + data.firstname, userDetail: data });		 
			else 
				res.render('login', { title : 'Please Log in', error: [{msg:'no user available'}] });

		});	
	}
	else {
		res.render('login', { title : 'Please Log in', error: errors });
	}
	
}

/***/ }),
/* 20 */
/***/ (function(module, exports) {


var collection = 'users'

module.exports = {
    getAll : (db, callback ) => {
        let users = db.collection(collection);
        users.find( {} , {}, (err, docs) => {
            if(err) throw(err);
            else 
                callback(docs);
        });
    },
    getByEmail : (db, data, callback ) => {
        let users = db.collection(collection);
        users.findOne( {email: data.email} , {}, (err, docs) => {
            if(err) throw(err);
            else 
                callback(docs);
        });
    },
    add : (db) => {
        let users = db.collection(collection);

        users.insert({ firstname: 'test2', lastname: 'example', email: 'test2@example.com', password: 'password'}, (err, doc) => {
            if(err) throw(err);            
        })
    }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {
const express = __webpack_require__(0);
const path = __webpack_require__(1);
const router = __webpack_require__(22);

const test = express();

test.set('views', path.join( __dirname, 'views') );

test.use('/', router);


module.exports = test;
/* WEBPACK VAR INJECTION */}.call(exports, "app/modules/test"))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {


const express = __webpack_require__(0);
const router = express.Router();

const home = __webpack_require__(23);

router.get('/', home.index);

module.exports = router

/***/ }),
/* 23 */
/***/ (function(module, exports) {



exports.index = function(req, res) {

	res.render('index', { title : 'Home' });
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {


const express = __webpack_require__(0);
const router = express.Router();

const index_controller = __webpack_require__(25);

router.get('/', index_controller.index);

module.exports = router


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {


var Index = __webpack_require__(26);

exports.index = function(req, res) {

	res.render('index', { title : 'Client', visited: req.cookies.visited });
}

/***/ }),
/* 26 */
/***/ (function(module, exports) {



module.exports = {};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ })
/******/ ]);