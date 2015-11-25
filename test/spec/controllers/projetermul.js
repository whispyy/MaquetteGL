'use strict';

describe('Controller: ProjetermulCtrl', function () {

  // load the controller's module
  beforeEach(module('maquetteGlApp'));

  var ProjetermulCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjetermulCtrl = $controller('ProjetermulCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProjetermulCtrl.awesomeThings.length).toBe(3);
  });
});
