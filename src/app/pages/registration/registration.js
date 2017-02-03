(function() {

  'use strict';

  angular
    .module('app')
    .component('registration', {
      templateUrl: 'app/pages/registration/registration.html',
      controller: registrationController
    });

  /** @ngInject */
  function registrationController(registration, $location, $scope) {
    var vm = this;

    if (!registration.isUserWriteData) {
      $location.path('/registration/user');
    } else {
      if (registration.checkIsRegComplete()) {
        $location.path('/registration/success');
      }

      if (!registration.checkIsUserDataStepComplete()) {
        $location.path('/registration/user');
      } else if (!registration.checkIsAddressStepComplete()) {
        $location.path('/registration/address');
      } else if (!registration.checkIsCardStepComplete()) {
        $location.path('/registration/card');
      }
    }
  }
}());
