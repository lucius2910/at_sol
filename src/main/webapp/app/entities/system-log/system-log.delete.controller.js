(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('SystemLogDeleteController', SystemLogDeleteController);

    SystemLogDeleteController.$inject = ['$scope', '$uibModalInstance', 'dataItem'];

    function SystemLogDeleteController ($scope, $uibModalInstance, dataItem) {
        var vm = this;
        
        vm.dataItem = dataItem;

        vm.cancel = cancel;
        vm.deleteItem = deleteItem;

        function deleteItem(){
            $uibModalInstance.close();
        }

        function cancel(){
            $uibModalInstance.dismiss('cancel');
        }
    }
})();
