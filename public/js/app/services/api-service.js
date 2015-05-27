(function(){
	'use strict';

	angular
		.module('app')
		.factory('api', apiFactory);

	apiFactory.$inject = ['$http'];

	function apiFactory($http){
		return {
			getProducts: getProducts,
			getContacts: getContacts
		};

		function getProducts(){
			return $http.get('/product/api/products')
				.then(function(response){
					return response.data;
				});
		}

		function getContacts(){
			return $http.get('/api/contacts')
				.then(function(response){
					return response.data;
				});
		}
	}
})();