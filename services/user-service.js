var bcrypt = require('bcrypt');
var User = require('../models/user').User;

exports.addUser = function(user, next){
	bcrypt.hash(user.password, 10, function(err, hash) {
		if(err) {
			return next(err);
		}
		user.password = hash;
		var newUser = new User({
			fullname:user.fullname,
			username: user.username.toLowerCase(),
			email: user.email.toLowerCase(),
			password: user.password
		});

		newUser.save(function(err) {
			if (err) {
		    return next(err);
	    }            
	    next(null);
	 	});				
	});
};

exports.findUser = function(username, next) {
	User.findOne({username: username.toLowerCase()}, function(err, user){
		next(err, user);
	});
};

// exports.findEmail = function(email, next) {
// 	User.findOne({email: email.toLowerCase()}, function(err, user){
// 		next(err, user);
// 	});
// };