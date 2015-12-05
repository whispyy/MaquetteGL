'use strict';

/**
 * @ngdoc overview
 * @name maquetteGlApp
 * @description
 * # maquetteGlApp
 *
 * Main module of the application.
 */
angular
  .module('maquetteGlApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/projeter', {
        templateUrl: 'views/projeter.html',
        controller: 'ProjeterCtrl',
        controllerAs: 'projeter'
      })
      .when('/projetermul', {
        templateUrl: 'views/projetermul.html',
        controller: 'ProjetermulCtrl',
        controllerAs: 'projetermul'
      })
      .when('/flux', {
        templateUrl: 'views/flux.html',
        controller: 'FluxCtrl',
        controllerAs: 'flux'
      })
      .when('/flux2', {
        templateUrl: 'views/flux2.html',
        controller: 'FluxCtrl',
        controllerAs: 'flux'
      })
      .when('/parametre', {
        templateUrl: 'views/parametre.html',
        controller: 'ParametreCtrl',
        controllerAs: 'parametre'
      })
      .when('/administration', {
        templateUrl: 'views/administration.html',
        controller: 'AdministrationCtrl',
        controllerAs: 'administration'
      })
      .when('/connexion', {
        templateUrl: 'views/connexion.html',
        controller: 'ConnexionCtrl',
        controllerAs: 'connexion'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
