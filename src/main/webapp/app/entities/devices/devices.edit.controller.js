(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('DeviceEditController', DeviceEditController);

    DeviceEditController.$inject = ['$scope', '$uibModalInstance', 'dataItem'];

    function DeviceEditController ($scope, $uibModalInstance, dataItem) {
        var vm = this;

        vm.showAddNew = false;
        
        vm.cancel = cancel;
        vm.update = update;

        vm.dataItem = angular.copy(dataItem);

        init();

        function init(){

            if(vm.dataItem == null){
                vm.showAddNew = true;
            }else{
                vm.showAddNew = false;
            }
        }

        function update(){
            $uibModalInstance.close();
        }

        function cancel(){
            $uibModalInstance.dismiss('cancel');
        }
    }
})();
