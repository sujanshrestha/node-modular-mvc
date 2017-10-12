
var Index = require('../model/indexModel');

exports.index = function(req, res) {

	res.render('index', { title : 'Client', visited: req.cookies.visited });
}