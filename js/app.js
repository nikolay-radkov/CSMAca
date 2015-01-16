'use strict';

var app = angular.module('myApp', ['ngRoute']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/partials/home.html',
                controller: 'HomeController'
            })
//            .when('/partial1', {
//                templateUrl: 'views/partials/partial1.html',
//                controller: 'MyCtrl1'
//            })
//            .when('/partial2', {
//                templateUrl: 'views/partials/partial2.html',
//                controller: 'MyCtrl2'
//            })
            .otherwise({ redirectTo: '/' });
    }]);