(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('SystemLogController', SystemLogController);

    SystemLogController.$inject = ['$scope', '$uibModal', '$state'];

    function SystemLogController ($scope, $uibModal, $state) {
        var vm = this;

        vm.status = '0';

        vm.totalItems = 175;
        vm.currentPage = 1;

        vm.checkedAllItem = false;
        vm.deleteManyItem = false;

        vm.lstStatus = [];
        vm.lstData = [];

        vm.changeCheckAllItem = changeCheckAllItem;
        vm.changeCheckedItem = changeCheckedItem;
        vm.editItem = editItem;
        vm.deleteItem = deleteItem;
        vm.addNewItem = addNewItem;

        vm.lstStatus = [
            {
                value: 0,
                title: 'All'
            },
            {
                value: 1,
                title: 'Error'
            },
            {
                value: 2,
                title: 'Turn Off'
            },
            {
                value: 3,
                title: 'Turn On'
            }
        ]

        vm.lstData = [
            {
                
                createdDate: '4/23/2016',
                type: '1',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            },
            {
                
                createdDate: '4/23/2016',
                type: '2',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            },
            {
                
                createdDate: '4/23/2016',
                type: '3',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            },
            {
                
                createdDate: '4/23/2016',
                type: '1',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            },
            {
                
                createdDate: '4/23/2016',
                type: '3',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            },
            {
                
                createdDate: '4/23/2016',
                type: '1',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            },
            {
                
                createdDate: '4/23/2016',
                type: '1',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            },
            {
                
                createdDate: '4/23/2016',
                type: '2',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
            }
        ];

        function editItem(item){
            $uibModal.open({
                animation: true,
                templateUrl: 'app/entities/system-log/system-log.edit.html',
                controller: 'SystemLogEditController',
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
                templateUrl: 'app/entities/system-log/system-log.edit.html',
                controller: 'SystemLogEditController',
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
                templateUrl: 'app/entities/system-log/system-log.delete.html',
                controller: 'SystemLogDeleteController',
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
            var start = moment().subtract(29, 'days');
            var end = moment();

            angular.element('#kt_form_status,#kt_form_type').selectpicker();

            angular.element('#kt_daterangepicker').daterangepicker({
                buttonClasses: ' btn',
                applyClass: 'btn-primary',
                cancelClass: 'btn-secondary',
    
                startDate: start,
                endDate: end,
                ranges: {
                   'Today': [moment(), moment()],
                   'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                   'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                   'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                   'This Month': [moment().startOf('month'), moment().endOf('month')],
                   'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                }
            }, function(start, end, label) {
                angular.element('#kt_daterangepicker .form-control').val( start.format('DD/MM/YYYY') + ' - ' + end.format('DD/MM/YYYY'));
            });
        });
        
    }
})();
