'use strict';

/**
 * @ngdoc function
 * @name appstoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appstoreApp
 */
angular.module('appstoreApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
