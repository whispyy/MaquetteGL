'use strict';

/**
 * @ngdoc function
 * @name maquetteGlApp.controller:ProjeterCtrl
 * @description
 * # ProjeterCtrl
 * Controller of the maquetteGlApp
 */
angular.module('maquetteGlApp')
  .controller('ProjeterCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.msg ='Projeter';

    // gestion étape 1
    $scope.idnum='';
    // gestion étape 2
    $scope.file='';



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
