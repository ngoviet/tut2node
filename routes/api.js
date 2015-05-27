var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict');
var trackingSvr = require('../services/vnt-service');
var localSvr = require('../services/local-service');

router.get('/', restrict, function(req, res, next){

	var cmd = 'SELECT CityID , \
        cu.ci_Name ,\
        cu.ci_Address ,\
        co.ct.ContactID, \
        co.ct_Name ,\
        co.ct_Phone ,\
        co.ct_Job\
		FROM    dbo.Contact co\
		        INNER JOIN dbo.Customer cu WITH (NOLOCK) ON cu.CustomerID = co.CustomerID\
		ORDER BY co.CustomerID';

	trackingSvr.query(cmd, function(data){
		console.log(data);
		// res.send('OK');

		var vm = {
			data: data
		}

		res.render('lienhe/index', vm);
	});
});

router.route('/contacts', restrict)
	.get(function(req, res, next){
		var cmd = 'SELECT top 100 cu.CityID , \
					cu.CustomerID, \
	        cu.ci_Name ,\
	        cu.ci_Address , \
	        co.ContactID , \
	        co.ct_Name ,\
	        co.ct_Phone ,\
	        co.ct_Job \
			FROM    dbo.Contact co \
			        INNER JOIN dbo.Customer cu WITH (NOLOCK) ON cu.CustomerID = co.CustomerID \
			ORDER BY co.CustomerID';
		console.log(req.body);
		localSvr.query(cmd, function(err, data){
			if(err){
				return res.status(500).json({error: "Lỗi lấy danh sách liên hệ: " + err});
			}
			res.json(data);
		});
	})
	.post(function(req, res, next){
		var name = req.body.Name;
		console.log(req.body);
		var cmd = "INSERT INTO dbo.Contact (ct_Name, CustomerID, ct_Timestamp) VALUES (N'" + name + "', 9091, GETDATE())";
		console.log(cmd);
		localSvr.query(cmd, function(err, data){
			if(err) {
				// return res.status(500).json({error: "Không thể lưu liên hệ: " + err});
				return res.send(err);
			}
			res.json("Tạo mới liên hệ thành công");
		});
	});

router.route('/products', restrict)
	.get(function(req, res, next){

		var cmd = "SELECT ProductID, Name, ProductNumber, ModifiedDate FROM Production.Product";

		localSvr.query(cmd, function(err, data){
			if(err){
				return res.status(500).json({error: "Lỗi GET /products" + err});
			}
			res.json(data);
		})
	})
	.post(function(req, res, next){

	});

module.exports = router;