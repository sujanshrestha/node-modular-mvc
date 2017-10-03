// This file contains all post-request middlewares

module.exports = (app) => {

	const isEmpty = require ('../helpers/isEmpty');

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

	// define some more middlewares here
}
