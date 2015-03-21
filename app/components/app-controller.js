angular.module('dockrics')
    .controller('appController', ['$scope', '$location', function ($scope, $location) {
        /**
         * Used for bootstrap menu.
         */
        $scope.isActive = function (viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
        };
    }]);