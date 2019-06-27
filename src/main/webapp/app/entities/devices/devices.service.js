(function() {
    'use strict';

    angular
        .module('atSolApp')
        .factory('DeviceServices', DeviceServices);

    DeviceServices.$inject = ['$resource'];

    function DeviceServices ($resource) {
        var service = $resource('api/device', {}, {
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
