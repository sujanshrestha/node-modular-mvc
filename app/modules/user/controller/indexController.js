
var Users = require('../model/userModel');

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