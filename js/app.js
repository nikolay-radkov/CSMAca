'use strict';

var app = angular.module('myApp', ['ngRoute']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/partials/home.html'
            })
            .when('/intro', {
                templateUrl: 'views/partials/intro.html'
            })
            .when('/videos',{
                templateUrl: 'views/partials/videos.html',
                controller: 'VideosController'
            })
            .when('/resources',{
                templateUrl: 'views/partials/resources.html'
            })
            .when('/algorithm',{
                templateUrl: 'views/partials/algorithm.html'
            })
            .when('/work',{
                templateUrl: 'views/partials/work.html',
                controller: 'WorkController'
            })
            .when('/usage',{
                templateUrl: 'views/partials/usage.html'
            })
            .when('/versus-cd',{
                templateUrl: 'views/partials/versus-cd.html'
            })
            .otherwise({ redirectTo: '/' });
    }]);