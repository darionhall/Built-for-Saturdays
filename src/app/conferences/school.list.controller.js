(function() {

  'use strict';

  angular.module('builtForSaturdays')
  .controller('SchoolListController', function ($state, $stateParams, ConferencesService) {

    var vm = this;

    ConferencesService.getConferences().success(function() {
      vm.conference = ConferencesService.getConferenceById($stateParams.conferenceId);
    });

    vm.goSchool = function(school) {
      // console.log('going to school:', school);
      $state.go( 'conferences.schools.stadiums', { schoolId : school.id } );
    };
  });
})();
