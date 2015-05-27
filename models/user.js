var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userService = require('../services/user-service');

var userSchema = new Schema({
	fullname: {type: String, required: 'Vui lòng nhập tên'},
	username: {type: String, required: 'Vui lòng nhập tài khoản'},
	email: {type: String, required: 'Vui lòng nhập email'},
	password: {type: String, required: 'Vui lòng nhập mật khẩu'},
	created: {type: Date, default: Date.now}
});

userSchema.path('username').validate(function(value, next){
	userService.findUser(value, function(err, user){
		if(err) {
			console.log(err);
			return next(false);
		}
		console.log(value);
		next(!user);
	});
}, 'Tài khoản này đã tồn tại');

// userSchema.path('email').validate(function(value, next){
// 	userService.findEmail(value, function(err, user){
// 		if(err) {
// 			console.log(err);
// 			return next(false);
// 		}
// 		next(!user);
// 	});
// }, 'Email này đã tồn tại');

var User = mongoose.model('User', userSchema);

module.exports = {
	User: User
};