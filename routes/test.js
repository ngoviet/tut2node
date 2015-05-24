var express = require('express');
var router = express.Router();
var sqlSvr = require('../services/tracking-service');

router.get('/', function(req, res, next){

	var sql = 'SELECT top 10 CityID , \
        cu.ci_Name ,\
        cu.ci_Address ,\
        co.ct_Name ,\
        co.ct_Phone ,\
        co.ct_Job\
		FROM    dbo.Contact co\
		        INNER JOIN dbo.Customer cu ON cu.CustomerID = co.CustomerID\
		ORDER BY co.CustomerID';

	sqlSvr.query(sql, function(data){
		console.log(data);
		// res.send('OK');

		var vm = {
			data: data
		}

		res.render('test/index', vm);
	});
});

module.exports = router;