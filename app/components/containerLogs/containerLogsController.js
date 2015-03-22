angular.module('dockrics')
    .controller('ContainerLogsController', ['$scope', 'ContainerLogs', '$routeParams', '$http', function ($scope, ContainerLogs, $routeParams, $http) {
        // stdout
        ContainerLogs.get($routeParams.id, {
            stdout: 1,
            stderr: 0,
            timestamps: true,
            tail: 100
        }).success(function (data) {
            $scope.stdout = data;
        });

        // stderr
        ContainerLogs.get($routeParams.id, {
            stdout: 0,
            stderr: 1,
            timestamps: true,
            tail: 100
        }).success(function (data) {
            $scope.stderr = data;
        });
    }]);