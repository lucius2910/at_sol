(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('DevicesGroupController', DevicesGroupController);

    DevicesGroupController.$inject = ['$scope', '$uibModal', '$state'];

    function DevicesGroupController ($scope, $uibModal, $state) {
        var vm = this;

        vm.status = '1';
        vm.type = '1';

        vm.totalItems = 175;
        vm.currentPage = 1;
        
        vm.checkedAllItem = false;
        vm.deleteManyItem = false;

        vm.lstStatus = [];
        vm.lstType = [];
        vm.lstData = [];

        vm.changeCheckAllItem = changeCheckAllItem;
        vm.changeCheckedItem = changeCheckedItem;
        vm.editItem = editItem;
        vm.deleteItem = deleteItem;
        vm.addNewItem = addNewItem;

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

        vm.lstData = [
            {
                id: '49288-0815',
                code: 'devices-1',
                name: 'nhóm thiết bị 1',
                isActive: 0
            },
            {
                id: '49288-0815',
                code: 'devices-2',
                name: 'nhóm thiết bị 2',
                isActive: 1
            },
            {
                id: '49288-0815',
                code: 'devices-3',
                name: 'nhóm thiết bị 3',
                isActive: 0
            },
            {
                id: '49288-0815',
                code: 'devices-4',
                name: 'nhóm thiết bị 4',
                isActive: 0
            },
            {
                id: '49288-0815',
                code: 'devices-5',
                name: 'nhóm thiết bị 5',
                isActive: 1
            },
            {
                id: '49288-0815',
                code: 'devices-6',
                name: 'nhóm thiết bị 6',
                isActive: 0
            },
            {
                id: '49288-0815',
                code: 'devices-7',
                name: 'nhóm thiết bị 7',
                isActive: 0
            },
            {
                id: '49288-0815',
                code: 'devices-8',
                name: 'nhóm thiết bị 8',
                isActive: 0
            }
        ];

        function editItem(item){
            $uibModal.open({
                animation: true,
                templateUrl: 'app/entities/devices-group/devices-group.edit.html',
                controller: 'DeviceGroupEditController',
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
                templateUrl: 'app/entities/devices-group/devices-group.edit.html',
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
                templateUrl: 'app/entities/devices-group/devices-group.delete.html',
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
        });
        
    }
})();
