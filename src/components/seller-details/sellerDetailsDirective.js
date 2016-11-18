"use strict";

angular.module("portfolio").directive("sellerDetails",
() => {
    return {
        restrict: 'E',
        replace: 'true',
        scope: {
          seller: '='
        },
        templateUrl : 'src/components/seller-details/seller-details.html'
    };
});
