'use strict';

/**
 * @ngdoc function
 * @name maquetteGlApp.controller:AdministrationCtrl
 * @description
 * # AdministrationCtrl
 * Controller of the maquetteGlApp
 */
angular.module('maquetteGlApp')
  .controller('AdministrationCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     $scope.msg ='Administration';

     /*Gérer écran*/
     $scope.becran=false;
     $scope.becranadd=false;

     //ajout écran
     $scope.ide='';
     $scope.nome='';
     $scope.addEcran = function(id,nom){
    	var monEcran = {'id': id, 'nom': nom};
    	$scope.ecrans.push(monEcran);
    };
    //modif écran
    $scope.idnom='';
    $scope.modifyEcran = function(id,nom){
    	$scope.becranadd = true;
    	$scope.ide= id;
    	$scope.nome= nom;
    };
  });
