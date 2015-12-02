'use strict';

/**
 * @ngdoc directive
 * @name maquetteGlApp.directive:fileread
 * @description
 * # fileread
 */
angular.module('maquetteGlApp')
  .directive('fileread', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the fileread directive');
      }
    };
  });
