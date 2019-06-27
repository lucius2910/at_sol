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
        vm.searchData = {
            status: 'all',
            type: 'all'
        }

        vm.changeCheckAllItem = changeCheckAllItem;
        vm.changeCheckedItem = changeCheckedItem;
        vm.editItem = editItem;
        vm.deleteItem = deleteItem;
        vm.addNewItem = addNewItem;

        vm.lstData = [
            {
                id: '49288-0815',
                country: 'Paraguay PY',
                shipDate: '4/23/2016',
                companyName: 'Cartwright, Hilpert and Hartmann',
                status: 2,
                type: 2
            },
            {
                id: '49288-0815',
                country: 'Paraguay PY',
                shipDate: '4/23/2016',
                companyName: 'Cartwright, Hilpert and Hartmann',
                status: 2,
                type: 2
            },
            {
                id: '49288-0815',
                country: 'Paraguay PY',
                shipDate: '4/23/2016',
                companyName: 'Cartwright, Hilpert and Hartmann',
                status: 2,
                type: 2
            },
            {
                id: '49288-0815',
                country: 'Paraguay PY',
                shipDate: '4/23/2016',
                companyName: 'Cartwright, Hilpert and Hartmann',
                status: 2,
                type: 2
            },
            {
                id: '49288-0815',
                country: 'Paraguay PY',
                shipDate: '4/23/2016',
                companyName: 'Cartwright, Hilpert and Hartmann',
                status: 2,
                type: 2
            },
            {
                id: '49288-0815',
                country: 'Paraguay PY',
                shipDate: '4/23/2016',
                companyName: 'Cartwright, Hilpert and Hartmann',
                status: 2,
                type: 2
            },
            {
                id: '49288-0815',
                country: 'Paraguay PY',
                shipDate: '4/23/2016',
                companyName: 'Cartwright, Hilpert and Hartmann',
                status: 2,
                type: 2
            },
            {
                id: '49288-0815',
                country: 'Paraguay PY',
                shipDate: '4/23/2016',
                companyName: 'Cartwright, Hilpert and Hartmann',
                status: 2,
                type: 2
            }
        ];

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
