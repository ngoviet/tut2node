(function() {

    'use strict';

    angular
      .module('app')
      .config(config);
    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
      $routeProvider
        .when('/product', {
          templateUrl: 'js/app/product/products.html',
          controller: 'ProductsController',
          controllerAs: 'vm'
        });
    }
  }());
