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
        controllerAs : 'ctrl',
        resolve : {
          queriesPrepService : queriesPrepService
        }
      })
      .state('query',{
        url : 'query/:id',
        templateUrl : 'app/Queries/query.html',
        controller : 'QueryController',
        controllerAs : 'ctrl',
        resolve : {
          queryPrepService : queryPrepService
        }
      });
  }

  queriesPrepService.$inject = ['queriesDataService']

  function queriesPrepService(queriesDataService){
    return queriesDataService
      .getAll();
  }

  queryPrepService.$inject = ['queriesDataService','$stateParams']

  function queryPrepService(queriesDataService,$stateParams){
    return queriesDataService
      .getQuery($stateParams.id);
  }
})();
