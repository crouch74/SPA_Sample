(function() {
    'use strict';

    angular
        .module('app.queries')
        .controller('QueryController', QueryController);

    QueryController.$inject = ['queriesDataService','$stateParams'];

    /* @ngInject */
    function QueryController(queriesDataService,$stateParams) {
        var vm = this;

        activate();

        function activate() {
          getQuery();
        }

        function getQuery(){
          queriesDataService
            .getQuery($stateParams.id)
              .then(handleQueryPromise);
        }

        function handleQueryPromise(data){
          vm.query = data;
        }

    }
})();
