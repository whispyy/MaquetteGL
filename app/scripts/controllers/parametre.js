'use strict';

/**
 * @ngdoc function
 * @name maquetteGlApp.controller:ParametreCtrl
 * @description
 * # ParametreCtrl
 * Controller of the maquetteGlApp
 */
angular.module('maquetteGlApp')
  .controller('ParametreCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.msg="Paramètre";

    $scope.param1= false;
    $scope.param2= false;
    $scope.param3= false;
  });
