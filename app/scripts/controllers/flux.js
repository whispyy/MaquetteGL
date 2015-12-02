'use strict';

/**
 * @ngdoc function
 * @name maquetteGlApp.controller:FluxCtrl
 * @description
 * # FluxCtrl
 * Controller of the maquetteGlApp
 */
angular.module('maquetteGlApp')
  .controller('FluxCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.msg = 'Afficher Flux';

    $scope.hashtag='';

    $scope.positions= ['haut-gauche',
    				   'haut-droite',
    				   'bas-gauche',
    				   'bas-droite'];

  });
