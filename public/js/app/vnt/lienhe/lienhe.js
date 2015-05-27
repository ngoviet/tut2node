(function(){
	'use strict';

	// angular
	// 	.module('app')
	// 	.controller('ContactsController', ['$scope', 'api', function($scope, api){
	// 		var vm = this;
	// 		api.getContacts()
	// 			.then(function(data){
	// 				vm.contacts = data;
	// 			})
	// 		}]);

		angular
		.module('app')
		.controller('ContactsController', ContactsController);

		ContactsController.$inject = ['api', '$scope'];
		// ContactsController.$inject = ['$scope'];

		function ContactsController(api, $scope){
			var vm = this;
			$scope.editContact = function(customerid, contactid){
				
			};
			api.getContacts()
				.then(function(data){
					vm.contacts = data;
				})
		}
}());