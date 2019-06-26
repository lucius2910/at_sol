(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('DevicesGroupDeleteController', DevicesGroupDeleteController);

    DevicesGroupDeleteController.$inject = ['$scope', '$uibModalInstance', 'dataItem'];

    function DevicesGroupDeleteController ($scope, $uibModalInstance, dataItem) {
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
