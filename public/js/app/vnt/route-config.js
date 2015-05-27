(function() {

    'use strict';

    angular
      .module('app')
      .config(config);
    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
      $routeProvider
        .when('/lienhe', {
          templateUrl: 'js/app/vnt/lienhe/lienhe.html',
          controller: 'ContactsController',
          controllerAs: 'vm'
        });
    }
  }());
