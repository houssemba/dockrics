angular.module('dockrics',  ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        'use strict';
        $routeProvider.
            when('/', {
                templateUrl: '/components/dashboard/dashboard.html',
                controller: 'DashboardController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);