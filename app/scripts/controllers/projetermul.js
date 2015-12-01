'use strict';

/**
 * @ngdoc function
 * @name maquetteGlApp.controller:ProjetermulCtrl
 * @description
 * # ProjetermulCtrl
 * Controller of the maquetteGlApp
 */
angular.module('maquetteGlApp')
  .controller('ProjetermulCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.msg ='Projeter Multiple';

    // gestion étape 1
    $scope.file='';
    // gestion étape 2


    // étapes avant la projection
    $scope.step1 = true;
    $scope.step2 = false;
    $scope.next = function(){
  		$scope.step1 =false;
  		$scope.step2 =true;
      console.log($scope.file);
    };
   	$scope.back = function(){
  		$scope.step1 = true;
  		$scope.step2 = false;
    };
  });
