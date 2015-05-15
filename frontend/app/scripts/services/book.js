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
    return $resource('/_ah/api/composer/v1/book/:id');
  });
