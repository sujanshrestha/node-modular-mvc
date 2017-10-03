
var Index = require('../model/indexModel');

exports.index = function(req, res) {

	res.render('index', { title : 'Home', visited: req.cookies.visited });
}