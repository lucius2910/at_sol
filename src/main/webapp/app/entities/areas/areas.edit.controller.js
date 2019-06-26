(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('AreaEditController', AreaEditController);

    AreaEditController.$inject = ['$scope', '$uibModalInstance', 'dataItem'];

    function AreaEditController ($scope, $uibModalInstance, dataItem) {
        var vm = this;

        vm.showAddNew = false;
        
        vm.cancel = cancel;
        vm.update = update;

        vm.dataItem = angular.copy(dataItem);
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
        $(function () {
            angular.element('#kt_form_status,#kt_form_type').selectpicker();
        });
    }
})();
