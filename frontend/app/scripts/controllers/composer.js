'use strict';

/**
* @ngdoc function
* @name frontendApp.controller:ComposerCtrl
* @description
* # ComposerCtrl
* Controller of the frontendApp
*/
angular.module('frontendApp')
.controller('ComposerCtrl', ['$scope', 'composer', function ($scope, composer) {

  $scope.composers = composer.get();
  $scope.newComposer = {};


  $scope.delete = function(c){
    composer.delete({id:c.id});
    var index = $scope.composers.items.indexOf(c);
    if(index > -1){
      $scope.composers.items.splice(index, 1);
    }
  };

  $scope.save = function(){
    $scope.composers.items.push(composer.save($scope.newComposer));
    $scope.showAdd = false;
  };


}]);
