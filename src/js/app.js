angular.module('ChatApp', ['ngRoute']);

angular.module('ChatApp').config(['$routeProvider',
function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    }).when('/about/', {
        templateUrl: 'views/about.html',
        controller: 'HomeController'
    }).otherwise({
        redirectTo: "/"
    });
}]);
