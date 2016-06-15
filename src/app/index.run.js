(function() {
  'use strict';

  angular
    .module('builtForSaturdays')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
