'use strict';

describe('Controller: ProjeterCtrl', function () {

  // load the controller's module
  beforeEach(module('maquetteGlApp'));

  var ProjeterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjeterCtrl = $controller('ProjeterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProjeterCtrl.awesomeThings.length).toBe(3);
  });
});
