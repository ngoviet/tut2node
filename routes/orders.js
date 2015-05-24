var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict')

router.get('/', restrict, function(req, res, next){
	console.log(req);
	if(!req.isAuthenticated()) {
		return res.redirect('/');
	}
	var vm = {
		title: 'Place an order',
		orderId: req.session.orderId,
		fullname: req.user ? req.user.fullname : null
	}
	res.render('orders/index', vm);
});

module.exports = router;