angular.module('dockrics')
    .controller('ContainerController', ['$scope', '$routeParams', 'Container', '$interval',
        function ($scope, $routeParams, Container, $interval) {
            var history = {};

            var timestamp = ((new Date()).getTime() / 1000) | 0;

            $scope.gaugeFeed = 0.5;
            $scope.areaAxes = ['left', 'right', 'bottom'];

            $scope.memRealtimeLine = [
                {label: 'Memory Usage', values: [{time: timestamp, y: 0}]}
            ];

            $scope.netRealtimeLine = [
                {label: 'Net IN', values: [{time: timestamp, y: 0}]},
                {label: 'Net OUT', values: [{time: timestamp, y: 0}]}
            ];

            $scope.cpuRealtimeLine = [
                {label: 'CPU Usage', values: [{time: timestamp, y: 0}]}
            ];

            $interval(function () {
                Container.stats({id: $routeParams.id}, function (data) {
                    $scope.stats = data;
                    $scope.netRealtimeLineFeed = getNetworkStats(data);
                    $scope.memRealtimeLineFeed = getMemoryStats(data);
                    $scope.cpuRealtimeLineFeed = getCPUStats(data);
                    //console.log(data);
                    //console.log(data.cpu_stats.cpu_usage.total_usage / data.cpu_stats.system_cpu_usage);
                });

                //$scope.$apply();
            }, 1000);


            Container.get({id: $routeParams.id}, function (data) {
                $scope.container = data;
                //console.log($scope.container);
            });

            var getNetworkStats = function (containerStats) {
                if (!history.network) {
                    history.network = containerStats.network;
                }
                var timestamp = ((new Date()).getTime() / 1000) | 0;
                var lineFeed = [];
                lineFeed.push({time: timestamp, y: (containerStats.network.rx_bytes - history.network.rx_bytes)});
                lineFeed.push({time: timestamp, y: (containerStats.network.tx_bytes - history.network.tx_bytes)});
                history.network = containerStats.network;
                return lineFeed;
            };

            var getMemoryStats = function (containerStats) {
                var timestamp = ((new Date()).getTime() / 1000) | 0;
                var lineFeed = [];
                lineFeed.push({time: timestamp, y: containerStats.memory_stats.usage});
                return lineFeed;
            };

            var getCPUStats = function (containerStats) {
                var timestamp = ((new Date()).getTime() / 1000) | 0;
                console.log(containerStats);
                var lineFeed = [];
                lineFeed.push({time: timestamp, y: containerStats.cpu_stats.cpu_usage.total_usage});
                return lineFeed;
            };
        }]);