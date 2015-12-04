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

    /*Gérer groupe écran*/
    $scope.bgecran=false;
    $scope.bgecranadd=false;

    //ajout groupe ecran
    $scope.idg='';
    $scope.nomg='';
    $scope.ecrang='';
    $scope.addGecran = function(id,nom,ecran){
        var monGecran = {'id': id, 'nom': nom,'ecrans':ecran};
        $scope.groupeEcran.push(monGecran);
    };

    /*Gérer utilisateurs*/
    $scope.buser=false;
    $scope.buseradd=false;

    //ajout user
    $scope.useradd=function(grade,nom){
        var userA ={'id':42, 'nom': nom, 'password':'default','grade':grade};
        $scope.compte.push(userA);
    };
  });
