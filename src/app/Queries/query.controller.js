(function() {
    'use strict';

    angular
        .module('app.queries')
        .controller('QueryController', QueryController);

    QueryController.$inject = ['queryPrepService','$translate'];

    /* @ngInject */
    function QueryController(queryPrepService,$translate) {
        var vm = this;

        vm.changeLanguage = changeLanguage;

        activate();

        function activate() {
          getQuery();
        }

        function changeLanguage(lang){
          $translate.use(lang);
        }

        function getQuery(){
          vm.query = queryPrepService;
        }

    }
})();
