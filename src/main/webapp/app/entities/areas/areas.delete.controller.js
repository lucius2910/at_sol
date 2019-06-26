(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('AreasDeleteController', AreasDeleteController);

    AreasDeleteController.$inject = ['$scope', '$uibModalInstance', 'dataItem'];

    function AreasDeleteController ($scope, $uibModalInstance, dataItem) {
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
