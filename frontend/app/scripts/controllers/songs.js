'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:SongsCtrl
 * @description
 * # SongsCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('SongsCtrl', ['$scope', 'song', 'composer', 'book', function ($scope, song, composer, book) {
    $scope.songs = song.get();
    $scope.composers = composer.get();
    $scope.books = book.get();
    $scope.newSong = {};

    $scope.delete = function(c){
      song.delete({id: c.id});
      var index = $scope.songs.items.indexOf(c);
      if(index > -1){
        $scope.songs.items.splice(index, 1);
      }
    };

    $scope.save = function(){

      console.log('save', $scope.composer);

      $scope.newSong.composer = $scope.composer;
      $scope.newSong.book = $scope.book;

      if($scope.songs.items){
        $scope.songs.items.push(song.save($scope.newSong));
      }
      else {
        song.save($scope.newSong);
      }
      $scope.showAdd = false;
    };
  }]);
