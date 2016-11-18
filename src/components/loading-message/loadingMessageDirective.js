"use strict";

angular.module("portfolio").directive("loadingMessage",
function loadingMessage(){
    return {
        restrict: "E",
        templateUrl: "src/components/loading-message/loading.html"
    };
});
