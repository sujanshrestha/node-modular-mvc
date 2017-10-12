
// modules dependencies
const path  = require( "path");
const mongo = require('mongodb');
const monk = require('monk');
const cookieParser  = require( "cookie-parser");

// modules path
const home = require("./modules/home/home");
const user = require("./modules/user/user");
const test = require("./modules/test/test");
const client = require("./modules/client/client");

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
