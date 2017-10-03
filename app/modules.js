
const home = require("./modules/home/app")
const user = require("./modules/user/app")


module.exports = (app) => {
	
	app.use('/user', user);

	app.use('/home', home);
	app.use('/', home);

}
