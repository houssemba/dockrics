angular.module('dockrics')
    .factory('Container', ['$resource', function ($resource) {
        return $resource('/dockerapi/containers/:id/:action', {}, {
            query: {method: 'GET', params: {action: 'json'}, isArray: true},
            get: {method: 'GET', params: {id: '@id', action: 'json'}},
            stats: {method: 'GET', params: {id: '@id', action: 'stats'}},
            top: {method: 'GET', params: {id: '@id', action: 'top'}}
        });
    }])
    .factory('ContainerLogs', ['$http', function ($http) {
        return {
            get: function (id, params) {
                return $http({
                    method: 'GET',
                    url: '/dockerapi/containers/' + id + '/logs',
                    params: {
                        'stdout': params.stdout || 0,
                        'stderr': params.stderr || 0,
                        'timestamps': params.timestamps || 0,
                        'tail': params.tail || 'all'
                    }
                });
            }
        };
    }]);