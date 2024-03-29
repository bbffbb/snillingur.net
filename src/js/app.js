var app = angular.module('app', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ngResource', 'duScroll', 'perfect_scrollbar', 'angular-timeline', 'angular-scroll-animate']);
    
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        }).otherwise({
            redirectTo: "/"
        });
    }]);
    
    app.config(['$mdIconProvider', function ($mdIconProvider) {
    $mdIconProvider.icon('md-close', 'img/icons/ic_close_24px.svg', 24);
    }]);

    app.config(['$mdThemingProvider', function ($mdThemingProvider) {
     $mdThemingProvider.theme('default')
          .primaryPalette('blue')
          .accentPalette('indigo')
          .warnPalette('red')
          .backgroundPalette('grey');

    $mdThemingProvider.theme('custom')
          .primaryPalette('grey')
          .accentPalette('deep-purple')
          .warnPalette('blue');

    //create yr own palette 
    $mdThemingProvider.definePalette('amazingPaletteName', {
        '50': 'ffebee',
        '100': 'ffcdd2',
        '200': 'ef9a9a',
        '300': 'e57373',
        '400': 'ef5350',
        '500': 'f44336',
        '600': 'e53935',
        '700': 'd32f2f',
        '800': 'c62828',
        '900': 'b71c1c',
        'A100': 'ff8a80',
        'A200': 'ff5252',
        'A400': 'ff1744',
        'A700': 'd50000',
        'contrastDefaultColor': 'light',    // whether, by default, text         (contrast)
                                    // on this palette should be dark or light
        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
         '200', '300', '400', 'A100'],
        'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();

   $mdThemingProvider.theme('custom2')
        .primaryPalette('amazingPaletteName');
    }]);

      

  


