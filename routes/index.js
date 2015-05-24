var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if(!req.user){
		return res.redirect('/users/login');
	}
		
	vm = {
		title: 'Trang chủ'
	}
	res.render('index', vm);
});

module.exports = router;
