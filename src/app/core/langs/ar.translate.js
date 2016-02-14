(function() {

  'use strict';

  angular
    .module('app.core')
    .config(config);

  config.$inject = ['$translateProvider']

  function config($translateProvider) {
    $translateProvider.translations('ar', {
      'HAS_KEYWORDS': '{queryName}  {keywordsCount,select, =0{ليس لديه كلمات} 1{ لديه كلمة واحده} 2{لديه كلمتان} other{لديه # كلمات}}'

    });
  };

})();
