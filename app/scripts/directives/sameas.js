'use strict';

/**
 * @ngdoc directive
 * @name finalIndyHackthApp.directive:sameAs
 * @description
 * # sameAs
 */
angular.module('finalIndyHackthApp')
  .directive('sameAs', function () {
    return {
      require:"ngModel",
        link: function(scope,element,attrs,ngModelctrl){
            // ctrl.$parsers.unshift(function(viewValue){
            // //     var valid = (value)     scope.$eval(attrs["passwordVerify"]);
            // //     if(origin!==viewValue){
            // //         ctrl.$setValidity("passwordVerify",false);
            // //         return undefined;
            // //     }else{
            // //         ctrl.$setValidity("passwordVerify",true);
            // //         return viewValue;
            // //     }
            // // });

        }
    };
      }
    };
  });
