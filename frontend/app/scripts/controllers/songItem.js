
'use strict';


angular.module('frontendApp')
  .controller('SongItemCtrl', ['$scope', 'composer', 'book', function ($scope, composer, book) {
    

    $scope.comp = composer.get({id: $scope.c.composer});
    $scope.bk = book.get({id: $scope.c.book});

    console.log('songItemCtrl', $scope.comp, $scope.bk);

  }]);
