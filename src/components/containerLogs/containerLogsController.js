angular.module('dockrics')
    .controller('ContainerLogsController', ['$scope', 'ContainerLogs', '$routeParams', '$http', function ($scope, ContainerLogs, $routeParams) {
        $scope.timestamps = true;
        $scope.tail = 100;

        $scope.getLogs = function () {
            // stdout
            ContainerLogs.get($routeParams.id, {
                stdout: 1,
                stderr: 0,
                timestamps: $scope.timestamps,
                tail: $scope.tail
            }).success(function (data) {
                $scope.stdout = data;
            });

            // stderr
            ContainerLogs.get($routeParams.id, {
                stdout: 0,
                stderr: 1,
                timestamps: $scope.timestamps,
                tail: $scope.tail
            }).success(function (data) {
                $scope.stderr = data;
            });
        };

        $scope.getLogs();
    }]);