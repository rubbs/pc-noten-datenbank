'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:BooksCtrl
 * @description
 * # BooksCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('BooksCtrl', [ '$scope', 'book', function ($scope, book) {
    $scope.books = book.get();
    $scope.newBook = {};


    $scope.delete = function(c){
      book.delete({id: c.id});
      var index = $scope.books.items.indexOf(c);
      if(index > -1){
        $scope.books.items.splice(index, 1);
      }
    };

    $scope.save = function(){

      if($scope.books.items){
        $scope.books.items.push(book.save($scope.newBook));
      }
      else {
        book.save($scope.newBook);
      }
      $scope.showAdd = false;
    };
  }]);
