'use strict';

describe('Controller: ParametreCtrl', function () {

  // load the controller's module
  beforeEach(module('maquetteGlApp'));

  var ParametreCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ParametreCtrl = $controller('ParametreCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ParametreCtrl.awesomeThings.length).toBe(3);
  });
});
