var express = require('express');
var router = express.Router();


router.get('/',function(req, res, next){
	res.render('tests',{ title:'Welcome to test page', desc: 'this is express test pages', menu: ['examples']} );
});

router.get('/examples',function(req, res, next){
	res.render('examples',{ message : 'Examples :', title:'Welcome to test page', desc: 'This is just example page', examples: [ 1,2,3,4,5,6,7,8,9]} );
});

router.get('/examples/:id',function(req, res, next){
	res.json({title:'example ' + req.params.id, message : 'This is example ' + req.params.id, id: req.params.id } );
});

router.post('/',function(req, res, next){
	res.send('Message received');
});

module.exports = router;