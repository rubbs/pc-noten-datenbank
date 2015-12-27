'use strict';

/**
* @ngdoc service
* @name frontendApp.composer
* @description
* # composer
* Service in the frontendApp.
*/
angular.module('frontendApp')
.factory('composer', function ($resource) {
  if (document.location.hostname == "localhost"){
    return $resource('http://localhost:8080/_ah/api/pc/v1/composer');
  }
  else{
    return $resource('/_ah/api/pc/v1/composer');
  }
});
