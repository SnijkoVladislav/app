(function() {

  'use strict';

  angular
    .module('app')
    .component('registrationUser', {
      templateUrl: 'app/pages/registration/user/user.html',
      controller: registrationUserController
    });

  /** @ngInject */
  function registrationUserController(registration, $location) {
    var vm = this;

    vm.submit = function() {
      registration.addUserInfo({
        stepName: 'user',
        firstName: vm.firstName,
        lastName: vm.lastName
      });
      $location.path('/registration/address');
    };

    function onLoad() {
      if (registration.checkIsUserDataStepComplete()) {
        var userInfo = registration.userInfo.user;
        vm.firstName = userInfo.firstName;
        vm.lastName = userInfo.lastName;
      }
    }

    onLoad();
  }
}());
