(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('PermissionDeleteController', PermissionDeleteController);

    PermissionDeleteController.$inject = ['$scope', '$uibModalInstance', 'dataItem'];

    function PermissionDeleteController ($scope, $uibModalInstance, dataItem) {
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
