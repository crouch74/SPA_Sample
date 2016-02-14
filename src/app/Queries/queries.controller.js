(function() {
    'use strict';

    angular
        .module('app.queries')
        .controller('QueriesController', QueriesController);

    QueriesController.$inject = ['queriesDataService'];

    /* @ngInject */
    function QueriesController(queriesDataService) {
        var vm = this;
        vm.queries = [];

        activate();

        function activate() {
          getQueries();
        }

        function getQueries(){
          return queriesDataService
            .getAll()
              .then(handleGetQueries);
        }

        function handleGetQueries(data){
          vm.queries = data;
        }
    }
})();
