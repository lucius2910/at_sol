(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('RoleDeleteController', RoleDeleteController);

    RoleDeleteController.$inject = ['$scope', '$uibModalInstance', 'dataItem', 'AtsAlertService'];

    function RoleDeleteController ($scope, $uibModalInstance, dataItem, AtsAlertService) {
        var vm = this;
        
        vm.dataItem = dataItem;

        vm.cancel = cancel;
        vm.deleteItem = deleteItem;

        function deleteItem(){
            AtsAlertService.success('Role is deleted');
            $uibModalInstance.close();
        }

        function cancel(){
            $uibModalInstance.dismiss('cancel');
        }
    }
})();
