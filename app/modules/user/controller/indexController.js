
var Index = require('../model/indexModel');

exports.index = function(req, res) {
	res.render('index', { title : 'User' });
}

exports.get_user = function(req, res) {
	res.render('userdetails', { title : 'User', id : req.params.id });
    //res.send('NOT IMPLEMENTED: detail: ' + req.params.id);
};