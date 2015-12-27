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

  if (document.location.hostname == "localhost"){
    return $resource('http://localhost:8080/_ah/api/pc/v1/song/:id');
  }
  else{
    return $resource('/_ah/api/pc/v1/song/:id');
  }

});
