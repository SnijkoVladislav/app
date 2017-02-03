(function() {

  'use strict';

  angular
    .module('app')
    .component('registrationCard', {
      templateUrl: 'app/pages/registration/card/card.html',
      controller: registrationCardController
    });

  /** @ngInject */
  function registrationCardController(registration, $location) {
    var vm = this;

    vm.submit = function() {
      registration.addUserInfo({
        stepName: 'card',
        cardNumber: vm.cardNumber,
        expirationDate: vm.expirationDate,
        cvv: vm.cvv
      });
      $location.path('/registration/success');
    };

    function onLoad() {
      if (registration.checkIsCardStepComplete()) {
        var userInfo = registration.userInfo.card;
        vm.cardNumber = userInfo.cardNumber;
        vm.expirationDate = userInfo.expirationDate;
        vm.cvv = userInfo.cvv;
      }
    }

    onLoad();
  }
}());
