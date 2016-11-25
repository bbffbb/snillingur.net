
angular.module('ChatApp', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngSanitize'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        }).when('/social/', {
            templateUrl: 'views/social.html',
            controller: 'HomeController'
        }).otherwise({
            redirectTo: "/"
        });

    }]);



