angular.module('dockrics')
    .controller('ContainerTopController', ['$scope', '$routeParams', 'Container', function ($scope, $routeParams, Container) {
        Container.top({id: $routeParams.id}, function (data) {
            $scope.containerTop = data;
        });
    }]);
