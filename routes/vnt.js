var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict');

router.get('/', restrict, function(req, res, next){
	var vm = {
		title: 'Trang chủ'
	}
	res.render('vnt/index', vm);
});

module.exports = router;