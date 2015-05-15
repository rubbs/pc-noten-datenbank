'use strict';

/**
* @ngdoc service
* @name frontendApp.song
* @description
* # song
* Factory in the frontendApp.
*/
angular.module('frontendApp')
.factory('song', function ($resource) {

  return $resource('/_ah/api/composer/v1/song/:id');
  
});
