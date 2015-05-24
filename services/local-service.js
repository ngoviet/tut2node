// var sql = require('mssql');
var connection = require('../config').mssqllocal;

exports.query = function (sql, callback){

	var mssql = require('mssql');

	mssql.connect(connection, function(err){
		if(err)
			console.log('Loi ket noi: \n' + err);
		var cmd = new mssql.Request();
		cmd.query(sql, function(err, data){

			callback(err, data);
		});
	})
}
