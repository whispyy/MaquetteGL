'use strict';

/**
 * @ngdoc function
 * @name maquetteGlApp.controller:ConnexionCtrl
 * @description
 * # ConnexionCtrl
 * Controller of the maquetteGlApp
 */
angular.module('maquetteGlApp')
  .controller('ConnexionCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.msg='Connexion';

    $scope.cnom='';
    $scope.cpassword='';
  });
