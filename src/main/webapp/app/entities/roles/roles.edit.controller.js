(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('RoleEditController', RoleEditController);

    RoleEditController.$inject = ['$scope', '$uibModalInstance', 'dataItem', 'AtsAlertService'];

    function RoleEditController ($scope, $uibModalInstance, dataItem, AtsAlertService) {
        var vm = this;

        vm.showAddNew = false;

        vm.lstStatus = [
            {
                title: 'Hoạt động',
                value: '1',
            },
            {
                title: 'Không hoạt động',
                value: '0'
            }
        ];
        
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
            AtsAlertService.success('Role is updated')
            $uibModalInstance.close();
            
        }

        function cancel(){
            $uibModalInstance.dismiss('cancel');
        }
    }
})();
