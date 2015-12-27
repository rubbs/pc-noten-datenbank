'use strict';

/**
* @ngdoc service
* @name frontendApp.book
* @description
* # book
* Factory in the frontendApp.
*/
angular.module('frontendApp')
.factory('book', function ($resource) {
  var url = '';
  if (document.location.hostname == "localhost"){
    return $resource('http://localhost:8080/_ah/api/pc/v1/book');
  }
  else{
    return $resource('/_ah/api/pc/v1/book');
  }

});
