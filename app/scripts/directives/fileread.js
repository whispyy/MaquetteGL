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
    	scope: {
    		fileread: '='
    	},
    	link: (scope, element, attrs) => {
    		element.bind('change', function(changeEvent){
    			scope.$apply(function(){
    				scope.fileread = changeEvent.target.file[0].path;
    				//.name
    			});
    		});
    	};
      };
  });
