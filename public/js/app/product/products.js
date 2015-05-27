(function(){
	'use strict';

	angular
		.module('app')
		.controller('ProductsController', ProductsController);

		ProductsController.$inject = ['api'];

		function ProductsController(api){

			var vm = this;

			api.getProducts()
				.then(function(data){
					vm.products = data;
				})
		}
}());