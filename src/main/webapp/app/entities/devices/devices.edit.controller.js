(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('DeviceEditController', DeviceEditController);

    DeviceEditController.$inject = ['$scope', '$uibModalInstance', 'dataItem'];

    function DeviceEditController ($scope, $uibModalInstance, dataItem) {
        var vm = this;
        
        console.log('dataItem', dataItem);
    }
})();
