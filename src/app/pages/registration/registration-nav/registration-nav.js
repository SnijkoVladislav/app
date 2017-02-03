(function() {

  'use strict';

  angular
    .module('app')
    .component('appRegistrationNav', {
      templateUrl: 'app/pages/registration/registration-nav/registration-nav.html',
      controller: appRegistrationNavController,
      bindings: {
        steps: '='
      }
    });

  /** @ngInject */
  function appRegistrationNavController($location, $rootScope, $scope) {
    var vm = this;

    var steps = ['user', 'address', 'card'];
    vm.breadcrumps = [];
    var path,
      currentStep;

    function refreshStep() {
      path = $location.path().split('/');
      path = path[path.length - 1];

      currentStep = steps.indexOf(path);
      vm.breadcrumps = steps.filter(function(el, index) {
        return index <= currentStep;
      });
      vm.previousStep = steps[currentStep - 1] === -1 ? false : steps[currentStep - 1];
    };

    $rootScope.$on('$locationChangeStart', function(e, newUrl) {
      refreshStep();
    });

    vm.goToPreviousStep = function() {
      $location.path('/registration/' + vm.previousStep);
    };

    vm.goToHome = function() {
      $location.path('/registration/' + steps[0]);
    };

    vm.goToStep = function(step) {
      $location.path('/registration/' + step);
    };

    function onInit() {
      refreshStep();
    };

    onInit();
  }

}());
