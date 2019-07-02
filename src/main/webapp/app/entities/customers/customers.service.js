(function() {
    'use strict';

    angular
        .module('atSolApp')
        .factory('CustomersService', CustomersService);

    CustomersService.$inject = ['$resource'];

    function CustomersService ($resource) {
        var service = $resource('api/legislation/:pathMethod', {}, {
            'get': {
                method: 'GET',
            },
            'update': {
                method: 'POST',
            },
            'save': {
                method: 'POST',
            }
        });

        return service;
    }
})();
