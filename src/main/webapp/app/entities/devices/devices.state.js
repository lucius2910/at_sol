(function() {
    'use strict';

    angular
        .module('atSolApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('devices', {
            parent: 'entity',
            url: '/devices',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/devices/devices.html',
                    controller: 'DevicesController',
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
