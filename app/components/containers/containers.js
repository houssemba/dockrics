angular.module('dockrics')
    .controller('ContainersController', ['$scope', 'Container', function($scope, Container) {
        $scope.init = function() {
            Container.query(function(containers) {
                $scope.containers = containers;
            });
        };

        $scope.init();
    }]);