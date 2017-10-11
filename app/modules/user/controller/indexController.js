
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