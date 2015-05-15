'use strict';

describe('Controller: songsCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var songsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    songsCtrl = $controller('songsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
