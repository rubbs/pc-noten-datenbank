'use strict';

/**
* @ngdoc overview
* @name frontendApp
* @description
* # frontendApp
*
* Main module of the application.
*/
angular
.module('frontendApp', [
  'ngRoute',
  'ngMaterial',
  'ngResource'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/composer', {
    templateUrl: 'views/composer.html',
    controller: 'ComposerCtrl'
  })
  .when('/books', {
    templateUrl: 'views/books.html',
    controller: 'BooksCtrl'
  })
  .when('/songs', {
    templateUrl: 'views/songs.html',
    controller: 'SongsCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
})
;
