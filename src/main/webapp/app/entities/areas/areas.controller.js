(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('AreasController', AreasController);

    AreasController.$inject = ['$scope', '$uibModal', '$state'];

    function AreasController ($scope, $uibModal, $state) {
        var vm = this;

        vm.status = '1';
        vm.type = '1';
        vm.district = '';
        vm.province = '';
        vm.country = '';
        vm.totalItems = 175;
        vm.currentPage = 1;

        vm.checkedAllItem = false;
        vm.deleteManyItem = false;

        vm.lstStatus = [];
        vm.lstType = [];
        vm.lstData = [];
        vm.lstDistrict = [];
        vm.lstProvince = [];
        vm.lstCountry = [];
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

        vm.lstDistrict = [
            {
                value: 1,
                title: 'Huyện Hương Khế'
            },
            {
                value: 0,
                title: 'Huyện Hương Sơn'
            }
        ];

        vm.lstProvince = [
            {
                value: 1,
                title: 'Tỉnh Hà Tĩnh'
            },
            {
                value: 0,
                title: 'Tỉnh Bình Dương'
            }
        ];

        vm.lstCountry = [
            {
                value: 1,
                title: 'Việt Nam'
            },
            {
                value: 0,
                title: 'Đông Lào'
            }
        ];

        vm.lstData = [
            {
                id: '49288-0815',
                code: 'KH1',
                name: 'Khu vực 1',
                name_district: 'Huyện Hương Khê',
                name_province: 'Tỉnh Hà Tĩnh',
                name_country: 'Việt Nam',
                location: '12,34 432,6',
                isActive: 0
            },
            {
                id: '49288-0815',
                code: 'KH2',
                name: 'Khu vực 2',
                name_district: 'Huyện Hương Khê',
                name_province: 'Tỉnh Hà Tĩnh',
                name_country: 'Việt Nam',
                location: '12,34 432,6',
                isActive: 0
            },
            {
                id: '49288-0815',
                code: 'KH13',
                name: 'Khu vực 3',
                name_district: 'Huyện Hương Khê',
                name_province: 'Tỉnh Hà Tĩnh',
                name_country: 'Việt Nam',
                location: '12,34 432,6',
                isActive: 0
            },
            {
                id: '49288-0815',
                code: 'KH4',
                name: 'Khu vực 4',
                name_district: 'Huyện Hương Khê',
                name_province: 'Tỉnh Hà Tĩnh',
                name_country: 'Việt Nam',
                location: '12,34 432,6',
                isActive: 0
            },
            {
                id: '49288-0815',
                code: 'KH5',
                name: 'Khu vực5',
                name_district: 'Huyện Hương Khê',
                name_province: 'Tỉnh Hà Tĩnh',
                name_country: 'Việt Nam',
                location: '12,34 432,6',
                isActive: 0
            },
            {
                code: 'KH1',
                name: 'Khu vực 1',
                name_district: 'Huyện Hương Khê',
                name_province: 'Tỉnh Hà Tĩnh',
                name_country: 'Việt Nam',
                location: '12,34 432,6',
                isActive: 1
            },
            {
                id: '49288-0815',
                code: 'KH1',
                name: 'Khu vực 1',
                name_district: 'Huyện Hương Khê',
                name_province: 'Tỉnh Hà Tĩnh',
                name_country: 'Việt Nam',
                location: '12,34 432,6',
                isActive: 0
            },
            {
                id: '49288-0815',
                code: 'KH1',
                name: 'Khu vực 1',
                name_district: 'Huyện Hương Khê',
                name_province: 'Tỉnh Hà Tĩnh',
                name_country: 'Việt Nam',
                location: '12,34 432,6',
                isActive: 0
            }
        ];

        function editItem(item){
            $uibModal.open({
                animation: true,
                templateUrl: 'app/entities/areas/areas.edit.html',
                controller: 'AreaEditController',
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
                templateUrl: 'app/entities/areas/areas.edit.html',
                controller: 'AreaEditController',
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
                templateUrl: 'app/entities/areas/areas.delete.html',
                controller: 'AreasDeleteController',
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
