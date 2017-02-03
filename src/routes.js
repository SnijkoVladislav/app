(function() {

  'use strict';

  angular
    .module('app')
    .config(routesConfig);

  /** @ngInject */
  function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/registration');

    $stateProvider
      .state('registration', {
        url: '/registration',
        component: 'registration'
      })
      .state('registration.user', {
        url: '/user',
        component: 'registrationUser'
      })
      .state('registration.address', {
        url: '/address',
        component: 'registrationAddress'
      })
      .state('registration.card', {
        url: '/card',
        component: 'registrationCard'
      })
      .state('registration.success', {
        url: '/success',
        component: 'registrationSuccess'
      })
      .state('someOtherPage', {
        url: '/someOtherPage',
        component: 'someOtherPage'
      });

  }
}());
