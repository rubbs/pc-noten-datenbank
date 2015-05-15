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
    return $resource('/_ah/api/composer/v1/composer/:id');
});
