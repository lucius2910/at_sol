(function() {
    'use strict';

    angular
        .module('atSolApp')
        .factory('DeviceGroupServices', DeviceGroupServices);

    DeviceGroupServices.$inject = ['$resource'];

    function DeviceGroupServices ($resource) {
        var service = $resource('api/device-group', {}, {
            'get': { method: 'GET', params: {}, isArray: false,
                interceptor: {
                    response: function(response) {
                        // expose response
                        return response;
                    }
                }
            }
        });

        return service;
    }
})();
