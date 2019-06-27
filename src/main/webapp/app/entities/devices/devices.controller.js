(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('DevicesController', DevicesController);

    DevicesController.$inject = ['$scope', '$uibModal', '$state', 'APP_CONSTANTS', 'DeviceServices', 'DeviceGroupServices'];

    function DevicesController ($scope, $uibModal, $state, APP_CONSTANTS, DeviceServices, DeviceGroupServices) {
        var vm = this;

        vm.checkedAllItem = false;
        vm.deleteManyItem = false;

        vm.totalItems = 175;
        

        vm.lstStatus = [];
        vm.lstDeviceGroup = [];
        vm.lstDeviceType = [];
        vm.lstType = [];
        vm.lstData = [];

        vm.searchData = {
            currentPage: 1,
            status: 'all',
            type: 'all',
            group: 'all'
        }

        vm.changeCheckAllItem = changeCheckAllItem;
        vm.changeCheckedItem = changeCheckedItem;
        vm.editItem = editItem;
        vm.deleteItem = deleteItem;
        vm.addNewItem = addNewItem;

        vm.lstStatus = angular.copy(APP_CONSTANTS.DEVICE_STATUS_SEARCH);
        vm.lstDeviceGroup = angular.copy(APP_CONSTANTS.DEVICE_GROUP_SEARCH);
        vm.lstDeviceType = angular.copy(APP_CONSTANTS.DEVICE_TYPE_SEARCH);


        vm.lstData = [
            {
                id: '49288-0815',
                code: 'device-1',
                name: 'Thiết bị 1',
                name_device_group: 'Nhóm thiết bị 2',
                device_type: 'Loại 4',
                manudate: '23/07/2019',
                note: 'Thiết bị dân dụng',
                isActive: 0
            },
            {
                id: '49288-0815',
                code: 'device-2',
                name: 'Thiết bị 2',
                name_device_group: 'Nhóm thiết bị 4',
                device_type: 'Loại 4',
                manudate: '28/05/2019',
                note: 'Thiết bị sửa chữa',
                isActive: 0
            },
            {
                id: '49288-0815',
                code: 'device-3',
                name: 'Thiết bị 3',
                name_device_group: 'Nhóm thiết bị 1',
                device_type: 'Loại 2',
                manudate: '22/07/2019',
                note: 'Thiết bị đa năng',
                isActive: 1
            },
            {
                id: '49288-0815',
                code: 'device-4',
                name: 'Thiết bị 4',
                name_device_group: 'Nhóm thiết bị 4',
                device_type: 'Loại 4',
                manudate: '23/07/2018',
                note: 'Thiết bị dân dụng',
                isActive: 0
            },
            {
                id: '49288-0815',
                code: 'device-5',
                name: 'Thiết bị 5',
                name_device_group: 'Nhóm thiết bị 2',
                device_type: 'Loại 7',
                manudate: '23/05/2019',
                note: 'Thiết bị gia đình',
                isActive: 1
            },
            {
                id: '49288-0815',
                code: 'device-6',
                name: 'Thiết bị 6',
                name_device_group: 'Nhóm thiết bị 5',
                device_type: 'Loại 3',
                manudate: '12/02/2019',
                note: 'Thiết bị dân dụng',
                isActive: 1
            }
        ];

        init()

        function init(){
            console.log('init device controller');
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

            // Add select all option to search
            vm.lstDeviceGroup.unshift({
                title: 'Tất cả',
                value: 'all'
            })
        }

        function editItem(item){
            $uibModal.open({
                animation: true,
                templateUrl: 'app/entities/devices/devices.edit.html',
                controller: 'DeviceEditController',
                controllerAs: 'vm',
                size: 'xl',
                resolve: {
                  dataItem: function () {
                    return item;
                  }
                }
            });
        }

        function addNewItem(){
            $uibModal.open({
                animation: true,
                templateUrl: 'app/entities/devices/devices.edit.html',
                controller: 'DeviceEditController',
                controllerAs: 'vm',
                size: 'xl',
                resolve: {
                  dataItem: function () {
                    return null;
                  }
                }
            });
        }

        function deleteItem(item){
            $uibModal.open({
                animation: true,
                templateUrl: 'app/entities/devices/devices.delete.html',
                controller: 'DeviceDeleteController',
                controllerAs: 'vm',
                size: 'md',
                resolve: {
                  dataItem: function () {
                    return item;
                  }
                }
            });
        }

        function changeCheckAllItem(){
            angular.forEach(vm.lstData, function(element){
                element.checked = vm.checkedAllItem
            });

            vm.deleteManyItem = vm.checkedAllItem;
        }

        function changeCheckedItem(){
            var count = 0;
            
            angular.forEach(vm.lstData, function(element){
                if(element.checked ){
                    count ++
                }
            });

            if (count == vm.lstData.length){
                vm.checkedAllItem = true;
            }else{
                vm.checkedAllItem = false;
            }

            vm.deleteManyItem = count > 0 ? true : false;
        }

        $(function () {
            angular.element('#kt_form_status,#kt_form_type').selectpicker();

            const ps = new PerfectScrollbar('#perfectScrollTable');
        });
        
    }
})();
