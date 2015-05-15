'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:SongsCtrl
 * @description
 * # SongsCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('SongsCtrl', ['$scope', 'song', function ($scope, song) {
    $scope.songs = song.get();
    $scope.newSong = {};


    $scope.delete = function(c){
      song.delete({id: c.id});
      var index = $scope.songs.items.indexOf(c);
      if(index > -1){
        $scope.songs.items.splice(index, 1);
      }
    };

    $scope.save = function(){
      $scope.songs.items.push(song.save($scope.newSong));
      $scope.showAdd = false;
    };
  }]);
