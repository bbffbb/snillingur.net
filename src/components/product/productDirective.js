"use strict";

angular.module("portfolio").directive("product",
() => {
  return {
    restrict: 'E',
    scope: {
      sid: '=',
      product: '='
    },
    templateUrl: 'src/components/product/product.html'
  };
});
