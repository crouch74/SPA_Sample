(function() {
    'use strict';

    angular
        .module('app.queries')
        .controller('QueryController', QueryController);

    QueryController.$inject = ['queryPrepService'];

    /* @ngInject */
    function QueryController(queryPrepService) {
        var vm = this;

        activate();

        function activate() {
          getQuery();
        }

        function getQuery(){
          vm.query = queryPrepService;
        }

    }
})();
