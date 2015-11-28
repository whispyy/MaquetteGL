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

    $scope.msg='Paramètre';


    /*ajouter un réseau social*/
    //aficher les champs
    $scope.booladdrse = false;
    $scope.showaddrse = function(){
      $scope.booladdrse = true;
    };
    //variable d'ajout
    $scope.type = '';
    $scope.nomCompte = '';
    //fonction d'ajout
    $scope.addrse2= function(t,n){
      var rse = {'id': $scope.rse.length,
                 'type': t,
                 'nomCompte' : n};
      $scope.rse.push(rse);
    };
  });
