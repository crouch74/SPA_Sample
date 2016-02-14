(function() {
  'use strict';

  var data = [{"id":353,"name":"samar test","isActive":false,"createdAt":"2016-01-17T15:30:25.467","keywordsCount":1,"canBeActivated":true},{"id":327,"name":"Mayar","isActive":false,"createdAt":"2016-01-03T14:46:44.417","keywordsCount":0,"canBeActivated":true},{"id":303,"name":"may 196","isActive":false,"createdAt":"2015-12-31T13:00:28.143","keywordsCount":2,"canBeActivated":true},{"id":239,"name":"195v","isActive":false,"createdAt":"2015-12-16T13:34:26.763","keywordsCount":4,"canBeActivated":true},{"id":219,"name":"may test back","isActive":false,"createdAt":"2015-12-14T14:57:23.247","keywordsCount":2,"canBeActivated":true},{"id":215,"name":"backend","isActive":false,"createdAt":"2015-12-14T11:49:24.393","keywordsCount":2,"canBeActivated":true},{"id":171,"name":"ewdgshcv dsbv","isActive":false,"createdAt":"2015-12-07T14:27:48.663","keywordsCount":18,"canBeActivated":true},{"id":163,"name":"saudi","isActive":false,"createdAt":"2015-12-06T15:22:11.413","keywordsCount":6,"canBeActivated":true},{"id":161,"name":"egypt","isActive":false,"createdAt":"2015-12-06T15:20:42.18","keywordsCount":5,"canBeActivated":true},{"id":149,"name":"nlp","isActive":false,"createdAt":"2015-11-30T10:36:03.787","keywordsCount":3,"canBeActivated":true},{"id":145,"name":"testing","isActive":false,"createdAt":"2015-11-24T14:27:13.827","keywordsCount":2,"canBeActivated":true},{"id":101,"name":"may query","isActive":false,"createdAt":"2015-11-18T13:05:35.197","keywordsCount":4,"canBeActivated":true}];

  angular
    .module('app.queries')
    .factory('queriesDataService', queriesDataService);

  queriesDataService.$inject = ['$q'];

  /* @ngInject */
  function queriesDataService($q) {
    var service = {
      getAll: getAll,
      getQuery : getQuery
    };

    return service;

    function getAll() {
      var defer = $q.defer();
      defer.resolve(data);
      return defer.promise;
    }

    function getQuery(id){
      var defer = $q.defer();
      defer.resolve(data.filter(function(q){
        return q.id == id;
      })[0]);
      return defer.promise;
    }
  }
})();
