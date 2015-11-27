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


    /*ajouter un réseau social*/
    //aficher les champs
    $scope.booladdrse = false;
    $scope.showaddrse = function(){
      $scope.booladdrse = true;
    }
    //variable d'ajout
    $scope.ajoutrse = [];
    $scope.ajoutrse.type = "";
    $scope.ajoutrse.nomCompte = "";
    //fonction d'ajout a perfectionner car n'ajoute qu'une fois
    $scope.addrse = function(){
      $scope.ajoutrse.id = $scope.rse.length;
      $scope.rse.push($scope.ajoutrse);
      console.log("ajouté compte réseau social!");
    }
  });
