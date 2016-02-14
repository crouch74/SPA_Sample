(function() {

  'use strict';

  angular
    .module('app.core')
    .config(config);

  config.$inject = ['$translateProvider']

  function config($translateProvider) {
    $translateProvider.translations('en', {
      'HAS_KEYWORDS': '{queryName} has {keywordsCount,select, =0{no keywords} 1{a single keyword} other{# keywords}}'
    });
  };

})();
