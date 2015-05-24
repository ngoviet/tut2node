var express = require('express');
var router = express.Router();
var passport = require('passport');

var config = require('../config');
var userService = require('../services/user-service');

// GET users listing
router.get('/', function(req, res, next){
	res.send('respond with a resource');
});

// GET /user/create
router.get('/create', function(req, res, next){
	var vm = {
		title: 'Tạo tài khoản'
	};
	res.render('users/create', vm);
});

router.post('/create', function(req, res, next){
	userService.addUser(req.body, function(err){
		if(err){
			console.log(err);
			var vm = {
				title: 'Tạo tài khoản',
				input: req.body,
				error: err
			};
			delete vm.input.password;
			return res.render('users/create', vm);
		}
		req.login(req.body, function(err){
			console.log(req.body);
			res.redirect('/orders');
		});
	});
});

router.post('/login', 
	function(req, res, next) {
		console.log(req.body);
		req.session.orderId = 12345;
		if(req.body.rememberMe){
			req.session.cookie.maxAge = config.cookieMaxAge;
		}
		next();
	},
	passport.authenticate('local', {
		failureRedirect: '/users/login',
		successRedirect: '/',
		failureFlash: 'Sai tên đăng nhập hoặc mật khẩu'
}));

router.get('/login', function(req, res, next){
	if(req.user){
		return res.redirect('/');
	}
	var vm = {
		title: 'Đăng nhập',
		error: req.flash('error')
	};
	res.render('users/login', vm);
});

router.get('/logout', function(req, res, next){
	req.logout();
	req.session.destroy();
	res.redirect('/users/login');
});

module.exports = router;