(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('CustomersDeleteController', CustomersDeleteController);

    CustomersDeleteController.$inject = ['$scope', '$uibModalInstance', 'dataItem'];

    function CustomersDeleteController ($scope, $uibModalInstance, dataItem) {
        var vm = this;
        
        vm.dataItem = dataItem;

        vm.cancel = cancel;
        vm.deleteItem = deleteItem;

        function deleteItem(){
            $uibModalInstance.close();
        }

        function cancel(){
            $uibModalInstance.dismiss('cancel');
        }
    }
})();
