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
        vm.status = 1;
        vm.lstStatus = [];
        vm.lstDeviceGroup = [];
        vm.lstDeviceType = [];

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

        vm.lstDeviceGroup = [
            {
                id: 1,
                name: 'Nhóm 1'
            },
            {
                id: 0,
                name: 'Nhóm 2'
            }
        ];

        vm.lstDeviceType = [
            {
                id: 1,
                name: 'Loại 1'
            },
            {
                id: 0,
                name: 'Loại 2'
            }
        ];

        init();

        function init(){
            console.log('init device.edit.controller');
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

        $(function () {
            angular.element('#kt_form_type').selectpicker();
        });
    }
})();
