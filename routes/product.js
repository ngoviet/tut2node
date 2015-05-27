var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict');
var localSvr = require('../services/local-service');

router.get('/', restrict, function(req, res, next){
	var cmd = "SELECT ProductID, Name, ProductNumber, ModifiedDate \
			FROM Production.Product";

  	localSvr.query(cmd, function(err, data){
  		console.dir(data);
  		console.log('Product Number: ' + data.length);
  		var vm = {
			title: 'Production list',
			Product: data
		}

		res.render('product/index', vm);
  	});
	
});

router.get('/api/products', restrict, function(req, res, next){
	var cmd = "SELECT ProductID, Name, ProductNumber, ModifiedDate \
			FROM Production.Product"

  	localSvr.query(cmd, function(err, data){
  		if(err){
  			return res.status(500).json({error: 'Lỗi get product list' + err});
  		}

			res.json(data);
  	});
});

module.exports = router;