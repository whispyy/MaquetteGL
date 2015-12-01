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

    /*écrans*/
    $scope.ecrans=[];
    var testE1={'id':123456,'nom': "Test Ecran1"};
    var testE2={'id':213456,'nom': "Test Ecran2"};
    $scope.ecrans.push(testE1);
    $scope.ecrans.push(testE2);

    /*groupe d'écrans*/
    $scope.groupeEcran
    var testG1={'id':1,'nom':"Groupe Ecran 1", 'ecrans'=['123456','213456']};
    $scope.groupeEcran.push(testG1);

    /*réseau social*/
    $scope.rse=[];
    var testR1={'id':1,'type':"Twitter",'nomCompte':"@TestR1"};
    var testR2={'id':2,'type':"FaceBook",'nomCompte':"TestR2"};
    var testR3={'id':3,'type':"Twitter",'nomCompte':"@TestR3"};
    $scope.rse.push(testR1);
    $scope.rse.push(testR2);
    $scope.rse.push(testR3);

    /*compte*/
    $scope.compte=[];
    var user ={'id':1,'nom': "user",'password':"user",'grade':"user"};
    var userPlus = {'id':2,'nom':"userplus", 'password':"userplus",'grade':"userplus"};
    var admin = {'id':3,'nom': "admin", 'password':"admin",'grade':"admin"};
    $scope.compte.push(user);
    $scope.compte.push(userPlus);
    $scope.compte.push(admin);
  });
