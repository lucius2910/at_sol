(function() {
    'use strict';

    angular
        .module('atSolApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('areas', {
            parent: 'entity',
            url: '/areas',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/areas/areas.html',
                    controller: 'AreasController',
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
