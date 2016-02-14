(function() {
    'use strict';

    angular
        .module('app.queries')
        .controller('QueriesController', QueriesController);

    QueriesController.$inject = ['queriesPrepService'];

    /* @ngInject */
    function QueriesController(queriesPrepService) {
        var vm = this;
        vm.queries = [];

        activate();

        function activate() {
          getQueries();
        }

        function getQueries(){
          vm.queries = queriesPrepService;
        }
    }
})();
