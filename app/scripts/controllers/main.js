'use strict';

/**
 * @ngdoc function
 * @name maquetteGlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the maquetteGlApp
 */
angular.module('maquetteGlApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.ecrans=[];
    var test1={'id':1,'nom': "Test1"};
    var test2={'id':2,'nom': "Test2"};
    $scope.ecrans.push(test1);
    $scope.ecrans.push(test2);
  });
