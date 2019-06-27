(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('DeviceEditController', DeviceEditController);

    DeviceEditController.$inject = ['$scope', '$uibModalInstance', 'dataItem', 'APP_CONSTANTS', 'DeviceGroupServices'];

    function DeviceEditController ($scope, $uibModalInstance, dataItem, APP_CONSTANTS, DeviceGroupServices) {
        var vm = this;

        vm.showAddNew = false;
        
        vm.cancel = cancel;
        vm.update = update; 
        vm.dataItem = angular.copy(dataItem);
        
        vm.lstStatus = [];
        vm.lstDeviceGroup = [];
        vm.lstDeviceType = [];
        vm.deviceInfo = {}

        vm.deviceInfo = {
            status: '1',
            group: '1',
            type: '1'
        }

        vm.lstStatus = angular.copy(APP_CONSTANTS.DEVICE_STATUS);
        vm.lstDeviceType = angular.copy(APP_CONSTANTS.DEVICE_TYPE);

        init();

        function init(){
            console.log('init device.edit.controller');

            if(vm.dataItem == null){
                vm.showAddNew = true;
            }else{
                vm.showAddNew = false;
            }

            getDeviceGroup();
        }

        function getDeviceGroup(){
            // DeviceGroupServices.get(function(response){
            //     console.log('get device group', response)
            // }, function(error){
            //     console.log('get deivce group', error);
            // });

            vm.lstDeviceGroup = [
                {
                    title: 'Group 1',
                    value: '1'
                },
                {
                    title: 'Group 2',
                    value: '2'
                }
            ]
        }

        function update(){
            $uibModalInstance.close();
        }

        function cancel(){
            $uibModalInstance.dismiss('cancel');
        }

        $(function () {
            angular.element('#kt_form_type, #kt_form_status, #kt_form_group').selectpicker();
        });
    }
})();
