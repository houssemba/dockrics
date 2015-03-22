angular.module('dockrics')
    .controller('ContainerController', ['$scope', '$routeParams', 'Container', function ($scope, $routeParams, Container) {
        Container.get({id: $routeParams.id}, function (data) {
            $scope.container = data;
            //console.log($scope.container);
        });

        Container.stats({id: $routeParams.id}, function (data) {
            $scope.stats = data;
            //console.log("container data : " + JSON.stringify($scope.stats));
        });
    }]);