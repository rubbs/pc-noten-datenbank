'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MainCtrl', ['$scope', 'composer', 'book', 'song', function ($scope, composer, book, song) {
    $scope.composers = composer.get();
    $scope.books = book.get();
    $scope.songs = song.get();

    $scope.clear = function(){
      $scope.composer = {};
      $scope.book = {};
    };
  }]);
