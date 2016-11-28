
angular.module('ChatApp', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/homehub.html',
            controller: 'HomeController'
        }).when('/social/', {
            templateUrl: 'views/socialhub.html',
            controller: 'HomeController'
        }).otherwise({
            redirectTo: "/"
        });

    }]);



