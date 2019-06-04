(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('DevicesController', DevicesController);

    DevicesController.$inject = ['$scope', 'Principal', 'LoginService', '$state'];

    function DevicesController ($scope, Principal, LoginService, $state) {
        var vm = this;

        vm.status = '1';
        vm.type = '1';
        vm.checkedAllItem = false;

        vm.lstStatus = [];
        vm.lstType = [];
        vm.lstData = [];

        vm.changeCheckAllItem = changeCheckAllItem;
        vm.changeCheckedItem = changeCheckedItem;

        vm.lstType = [
            {
                value: 1,
                title: 'All'
            },
            {
                value: 2,
                title: 'Online'
            },
            {
                value: 3,
                title: 'Retail'
            },
            {
                value: 4,
                title: 'Direct'
            },
        ];

        vm.lstStatus = [
            {
                value: 1,
                title: 'All'
            },
            {
                value: 2,
                title: 'Pending'
            },
            {
                value: 3,
                title: 'Delivered'
            },
            {
                value: 4,
                title: 'Canceled'
            },
            {
                value: 5,
                title: 'Success'
            },
            {
                value: 6,
                title: 'Info'
            },
            {
                value: 7,
                title: 'Danger'
            },
        ]

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

        function changeCheckAllItem(){
            angular.forEach(vm.lstData, function(element){
                element.checked = vm.checkedAllItem
            });
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
        }

        $(function () {
            angular.element('#kt_form_status,#kt_form_type').selectpicker();
        });
        
    }
})();
