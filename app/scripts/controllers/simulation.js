'use strict';

/**
 * @ngdoc function
 * @name maquetteGlApp.controller:SimulationCtrl
 * @description
 * # SimulationCtrl
 * Controller of the maquetteGlApp
 */
angular.module('maquetteGlApp')
  .controller('SimulationCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.msg='Simulation';

    $scope.bmc=false;
  });
