angular.module('dockrics')
    .factory('Container', ['$resource', function($resource) {
        return $resource('/dockerapi/containers/:id/:action', {}, {
            query: {method: 'GET', params: {action: 'json'}, isArray: true}
        });
    }]);