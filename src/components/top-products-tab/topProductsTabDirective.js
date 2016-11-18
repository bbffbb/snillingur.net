"use strict";

angular.module("portfolio").directive("topProductsTab",
function() {
  return {
    restrict: 'E',
    scope: {
      sid: '=',
      products: '='
    },
    templateUrl: 'src/components/top-products-tab/top-products-tab.html',
    link: function (scope) {
      scope.limit = '10';
    }
  };
});
