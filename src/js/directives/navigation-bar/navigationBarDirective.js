"use strict";

angular.module("ChatApp").directive("navigationBar",
['$route',
function($route) {
    return {
        restrict: 'E',
        replace: 'true',
        templateUrl: 'directives/navigation-bar/navigation-bar.html'
    };
}]);
