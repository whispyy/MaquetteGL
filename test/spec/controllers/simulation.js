'use strict';

describe('Controller: SimulationCtrl', function () {

  // load the controller's module
  beforeEach(module('maquetteGlApp'));

  var SimulationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SimulationCtrl = $controller('SimulationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SimulationCtrl.awesomeThings.length).toBe(3);
  });
});
