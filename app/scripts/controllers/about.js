'use strict';

/**
 * @ngdoc function
 * @name appstoreApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appstoreApp
 */
angular.module('appstoreApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
