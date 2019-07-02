(function() {
    'use strict';

    angular
        .module('atSolApp')
        .factory('AtsAlertService', AtsAlertService);

    function AtsAlertService() {

        return{
            success: success,
            error: error
        }

        function success(content) {
            createAlert(content, 'success')
        }

        function error(content) {
            createAlert(content, 'danger')
        }

        function createAlert(content, type){
            var notify = $.notify(content, {
                type:  type,
                allow_dismiss: true,
                newest_on_top: true,
                mouse_over: true,
                placement: {
                    from: 'top', 
                    align: 'right'
                },
                offset: {
                    x: 30, 
                    y: 30
                },
                timmer: 2000,
                delay: 500,
                z_index: 1000,
                animate: {
                    enter: 'animated fadeInRight',
                    exit: 'animated fadeOutRight'
                }
            });
        }

    };
})();
