(function(){

  'use strict';

  angular
    .module('app.queries')
      .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider){
    $stateProvider
      .state('queries',{
        url : '/queries',
        templateUrl : 'app/Queries/queries.html',
        controller : 'QueriesController',
        controllerAs : 'ctrl'
      })
      .state('query',{
        url : 'query/:id',
        templateUrl : 'app/Queries/query.html',
        controller : 'QueryController',
        controllerAs : 'ctrl'
      });
  }
})();
