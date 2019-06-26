(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('CustomerEditController', CustomerEditController);

    CustomerEditController.$inject = ['$scope', '$uibModalInstance', 'dataItem'];

    function CustomerEditController ($scope, $uibModalInstance, dataItem) {
        var vm = this;

        vm.showAddNew = false;
        
        vm.cancel = cancel;
        vm.update = update;

        vm.dataItem = angular.copy(dataItem);
        vm.customer = {
            status: '1'
        }
        vm.lstStatus = [
            {
                value: 1,
                title: 'Hoạt động'
            },
            {
                value: 0,
                title: 'Không hoạt động'
            }
        ];

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
