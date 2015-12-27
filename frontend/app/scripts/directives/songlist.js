'use strict';

/**
* @ngdoc directive
* @name frontendApp.directive:songList
* @description
* # songList
*/
angular.module('frontendApp')
.directive('songList', ['song', function (song) {
  return {
    templateUrl: 'views/songList.html',
    restrict: 'E',
    scope: {
      songs :'='
    },
    link: function postLink($scope) {
      
    }
  };
}]);
