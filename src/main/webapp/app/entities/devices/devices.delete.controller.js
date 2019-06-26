(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('DeviceDeleteController', DeviceDeleteController);

    DeviceDeleteController.$inject = ['$scope', '$uibModalInstance', 'dataItem'];

    function DeviceDeleteController ($scope, $uibModalInstance, dataItem) {
        var vm = this;
        
        vm.dataItem = dataItem;

        vm.cancel = cancel;
        vm.deleteItem = deleteItem;

        init();

        function init(){
            console.log('init delete devices');
        }

        function deleteItem(){
            $uibModalInstance.close();
        }

        function cancel(){
            $uibModalInstance.dismiss('cancel');
        }
    }
})();
