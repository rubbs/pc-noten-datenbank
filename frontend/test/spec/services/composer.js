'use strict';

describe('Service: composer', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var composer;
  beforeEach(inject(function (_composer_) {
    composer = _composer_;
  }));

  it('should do something', function () {
    expect(!!composer).toBe(true);
  });

});
