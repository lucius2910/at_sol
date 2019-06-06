(function() {
    'use strict';

    angular
        .module('atSolApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('devices-group', {
            parent: 'entity',
            url: '/devices-group',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/devices-group/devices-group.html',
                    controller: 'DevicesGroupController',
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
