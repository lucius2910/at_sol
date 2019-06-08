(function() {
    'use strict';

    angular
        .module('atSolApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('system-log', {
            parent: 'entity',
            url: '/system-log',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/system-log/system-log.html',
                    controller: 'SystemLogController',
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
