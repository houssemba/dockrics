angular.module('dockrics',  ['ngRoute', 'ngResource'])
    .config(['$routeProvider', function($routeProvider) {
        'use strict';
        $routeProvider.
            when('/', {
                templateUrl: '/components/dashboard/dashboard.html',
                controller: 'DashboardController'
            })
            .when('/containers', {
                templateUrl: '/components/containers/containers.html',
                controller: 'ContainersController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])