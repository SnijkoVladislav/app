(function() {

  'use strict';

  angular
    .module('app')
    .factory('registration', registrationFun);

  /** @ngInject */
  function registrationFun($window) {
    var userInfo = angular.fromJson($window.localStorage.getItem('app')) || {};
    var isUserWriteData = !!$window.localStorage.getItem('app');
    var currentStep;

    function checkIsRegComplete() {
      if (userInfo.address && userInfo.card && userInfo.user) {
        return true;
      } else {
        return false;
      }
    };

    function checkIsUserDataStepComplete() {
      if (userInfo.user) {
        return true;
      } else {
        return false;
      }
    };

    function checkIsAddressStepComplete() {
      if (userInfo.address) {
        return true;
      } else {
        return false;
      }
    };

    function checkIsCardStepComplete() {
      if (userInfo.card) {
        return true;
      } else {
        return false;
      }
    };

    function addUserInfo(step) {
      userInfo = userInfo;
      userInfo[step.stepName] = step;
      currentStep = step.stepName;
      console.log(currentStep);
      $window.localStorage.setItem('app', angular.toJson(userInfo));
    };

    return {
      userInfo: userInfo,
      addUserInfo: addUserInfo,
      currentStep: currentStep,
      isUserWriteData: isUserWriteData,
      checkIsRegComplete: checkIsRegComplete,
      checkIsUserDataStepComplete: checkIsUserDataStepComplete,
      checkIsAddressStepComplete: checkIsAddressStepComplete,
      checkIsCardStepComplete: checkIsCardStepComplete,
    };
  }
}());
