(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('DeviceGroupEditController', DeviceGroupEditController);

    DeviceGroupEditController.$inject = ['$scope', '$uibModalInstance', 'dataItem'];

    function DeviceGroupEditController ($scope, $uibModalInstance, dataItem) {
        var vm = this;

        vm.showAddNew = false;
        vm.cancel = cancel;
        vm.update = update;
        vm.status = '1';
        vm.dataItem = angular.copy(dataItem);
        vm.lstStatus = [];

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

        $(function () {
            angular.element('#kt_form_status').selectpicker();
        });

        function update(){
            $uibModalInstance.close();
        }

        function cancel(){
            $uibModalInstance.dismiss('cancel');
        }
    }
})();
