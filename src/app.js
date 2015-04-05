angular.module('dockrics', ['ngRoute', 'ngResource'])
    .config(['$routeProvider', function ($routeProvider) {
        'use strict';
        $routeProvider
            .when('/containers', {
                templateUrl: 'components/containers/containers.html',
                controller: 'ContainersController'
            })
            .when('/containers/:id', {
                templateUrl: 'components/container/container.html',
                controller: 'ContainerController'
            })
            .when('/containers/:id/top', {
                templateUrl: 'components/containerTop/containerTop.html',
                controller: 'ContainerTopController'
            })
            .when('/containers/:id/logs', {
                templateUrl: 'components/containerLogs/containerLogs.html',
                controller: 'ContainerLogsController'
            })
            .otherwise({
                redirectTo: '/containers'
            });
    }]);