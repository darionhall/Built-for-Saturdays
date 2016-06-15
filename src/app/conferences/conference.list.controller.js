(function() {

  'use strict';

  angular.module('builtForSaturdays')
  .controller('ConferenceListController', function ($state, ConferencesService) {

    var vm = this;

    ConferencesService.getConferences().success(function(data) {
      vm.conferences = data;
    });

    vm.goConference = function (conference) {
      $state.go( 'conferences.schools', { conferenceId : conference.id } );
    };
  });
})();
