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
    var testE2={'id':123465,'nom': "Test Ecran2"};
    var testE3={'id':123546,'nom': "Test Ecran3"};
    $scope.ecrans.push(testE1);
    $scope.ecrans.push(testE2);
    $scope.ecrans.push(testE3);

    /*groupe d'écrans*/
    $scope.groupeEcran=[];
    var testG11={'id':1,'nom':"Groupe Ecran 1",'ecrans':123456};
    var testG12={'id':2,'nom':"Groupe Ecran 1",'ecrans':123465};
    var testG21={'id':3,'nom':"Groupe Ecran 2",'ecrans':123546};
    $scope.groupeEcran.push(testG11);
    //$scope.groupeEcran.push(testG12);
    $scope.groupeEcran.push(testG21);

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
