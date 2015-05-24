// var sql = require('mssql');
var connection = require('../config').mssqlvnpt;

exports.query = function (sql, callback){

	var mssql = require('mssql');

	mssql.connect(connection, function(err_connect){
		var cmd = new mssql.Request();
		cmd.query(sql, function(err_query, data){
			callback(data);
		});
	})
}
