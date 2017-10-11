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
