(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('RolesController', RolesController);

    RolesController.$inject = ['$scope', '$uibModal', '$state'];

    function RolesController ($scope, $uibModal, $state) {
        var vm = this;

        vm.totalItems = 175;
        vm.currentPage = 1;

        vm.checkedAllItem = false;
        vm.deleteManyItem = false;

        vm.lstData = [];

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

        vm.searchData = {
            status: 'all',
            type: 'all'
        }

        vm.changeCheckAllItem = changeCheckAllItem;
        vm.changeCheckedItem = changeCheckedItem;
        vm.editItem = editItem;
        vm.deleteItem = deleteItem;
        vm.addNewItem = addNewItem;
        vm.configItem = configItem;

        vm.lstData = [
            {
                id: '49288-0815',
                code: 'ROLE_ADMIN',
                name: 'ROLE ADMIN',
                description: 'Role for admin user',
                status: '1'
            },
            {
                id: '49288-0815',
                code: 'ROLE_MAN',
                name: 'ROLE MANAGER',
                description: 'Role for manager user',
                status: '2'
            },
            {
                id: '49288-0815',
                code: 'ROLE_CUSTOMER',
                name: 'ROLE CUSTOMER',
                description: 'Role for customer user',
                status: '1'
            }
        ];

        init()

        function init(){
            console.log('init role controller');
        }

        function editItem(item){
            $uibModal.open({
                animation: true,
                templateUrl: 'app/entities/roles/roles.edit.html',
                controller: 'RoleEditController',
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
                templateUrl: 'app/entities/roles/roles.edit.html',
                controller: 'RoleEditController',
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
                templateUrl: 'app/entities/roles/roles.delete.html',
                controller: 'RoleDeleteController',
                controllerAs: 'vm',
                size: 'md',
                resolve: {
                  dataItem: function () {
                    return item;
                  }
                }
            });
        }

        function configItem(item){
            $uibModal.open({
                animation: true,
                templateUrl: 'app/entities/roles/roles.config.html',
                controller: 'RoleConfigController',
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
