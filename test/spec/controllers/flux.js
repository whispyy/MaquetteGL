'use strict';

describe('Controller: FluxCtrl', function () {

  // load the controller's module
  beforeEach(module('maquetteGlApp'));

  var FluxCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FluxCtrl = $controller('FluxCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FluxCtrl.awesomeThings.length).toBe(3);
  });
});
