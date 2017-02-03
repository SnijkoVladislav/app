(function() {

  'use strict';

  angular
    .module('app')
    .component('registrationSuccess', {
      templateUrl: 'app/pages/registration/success/success.html',
      controller: registrationSuccessController
    });

  /** @ngInject */
  function registrationSuccessController(registration, $location, $window) {
    var vm = this;

    vm.clear = function() {
      $window.localStorage.removeItem('app');
      $location.path('/registration/user');
    };

    function onLoad() {
        vm.userInfo = registration.userInfo;
    }

    onLoad();
  }
}());
