(function() {
    'use strict';

    angular
        .module('atSolApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('customers', {
            parent: 'entity',
            url: '/customers',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/customers/customers.html',
                    controller: 'CustomersController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                    $translatePartialLoader.addPart('home');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
