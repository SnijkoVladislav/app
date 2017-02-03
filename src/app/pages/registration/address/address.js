(function() {

  'use strict';

  angular
    .module('app')
    .component('registrationAddress', {
      templateUrl: 'app/pages/registration/address/address.html',
      controller: registrationAddressController
    });

  /** @ngInject */
  function registrationAddressController(registration, $location) {
    var vm = this;

    vm.submit = function() {
      registration.addUserInfo({
        stepName: 'address',
        city: vm.city,
        address: vm.address,
        zip: vm.zip
      });
      $location.path('/registration/card');
    };

    function onLoad() {
      if (registration.checkIsAddressStepComplete()) {
        var userInfo = registration.userInfo.address;
        vm.city = userInfo.city;
        vm.address = userInfo.address;
        vm.zip = userInfo.zip;
      }
    }

    onLoad();
  }
}());
