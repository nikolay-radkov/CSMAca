'use strict';

var app = angular.module('myApp', ['ngRoute']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/partials/home.html',
                controller: 'HomeController'
            })
            .when('/intro', {
                templateUrl: 'views/partials/intro.html',
                controller: 'IntroController'
            })
            .when('/videos',{
                templateUrl: 'views/partials/videos.html',
                controller: 'VideosController'
            })
            .when('/resources',{
                templateUrl: 'views/partials/resources.html',
                controller: 'ResourcesController'
            })
            .when('/algorithm',{
                templateUrl: 'views/partials/algorithm.html',
                controller: 'AlgorithmController'
            })
            .when('/work',{
                templateUrl: 'views/partials/work.html',
                controller: 'WorkController'
            })
            .when('/usage',{
                templateUrl: 'views/partials/usage.html',
                controller: 'UsageController'
            })
            .when('/versus-cd',{
                templateUrl: 'views/partials/versus-cd.html'
            })
            .otherwise({ redirectTo: '/' });
    }]);