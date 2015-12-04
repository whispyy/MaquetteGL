'use strict';

/**
 * @ngdoc directive
 * @name maquetteGlApp.directive:fileread
 * @description
 * # fileread
 */
angular.module('maquetteGlApp')
.directive('fileread', () => {
  return {
    scope: {
      fileread: '=',
      fnt: '&'
    },
    link: (scope, element, attrs) => {
      element.bind('change', function(changeEvent) {
        scope.$apply(function() {
          scope.fileread = changeEvent.target.files[0].path;
          scope.fnt({file: scope.fileread});
        });
      });
    }
  }
})
