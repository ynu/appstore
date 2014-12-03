'use strict';

/**
 * @ngdoc overview
 * @name appstoreApp
 * @description
 * # appstoreApp
 *
 * Main module of the application.
 */
var NG_APP = 'appstoreApp';
angular
  .module(NG_APP, [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
      $routeProvider
        .when('/apps-by-category', {
            templateUrl: 'views/apps-by-category.html',
            controller: 'AppsByCategoryCtrl'
        })
        .when('/app-manage', {
            templateUrl: 'views/app-manage.html',
            controller: 'AppManageCtrl'
        })
        .otherwise({
            templateUrl: 'views/apps-by-category.html',
            controller: 'AppsByCategoryCtrl'
        });
  });
