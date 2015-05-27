var config = {};

config.mongoUri = 'mongodb://localhost/tut2node';
config.cookieMaxAge = 30*24*3600*1000;


// config.mssqlvnpt = {
// 	user: 'sa',
// 	password: 'tSnMkC.ncsx@04)!20!#',
// 	server: '10.35.8.153\\sqlserver2008',
// 	database: 'VNPT-Tracking'
// }

config.mssqlvnpt = {
	user: 'sa',
	password: '1111',
	server: '10.0.2.2',
	database: 'VNPT-Tracking'
} 


config.mssqllocal = {
	user: 'sa',
	password: '1111',
	server: '10.0.2.2',
	database: 'VNPT-Tracking'
}

module.exports = config;
