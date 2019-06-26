(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('RoleDeleteController', RoleDeleteController);

    RoleDeleteController.$inject = ['$scope', '$uibModalInstance', 'dataItem'];

    function RoleDeleteController ($scope, $uibModalInstance, dataItem) {
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
