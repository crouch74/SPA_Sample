(function(){

  'use strict';

  angular
    .module("app.core")
      .config(config);

  config.$inject = ['$translateProvider'];

  function config($translateProvider){
    $translateProvider.addInterpolation('$translateMessageFormatInterpolation');
    $translateProvider.preferredLanguage('en');
  }

})();
