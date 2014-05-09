/**
 * @name header.controllers:header
 */
angular.module('header')
  .controller('header',['$scope'
  , function ($scope) {
    $scope.message = 'Welcome to Header';
  }]);