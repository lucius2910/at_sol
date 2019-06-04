(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('DevicesController', DevicesController);

    DevicesController.$inject = ['$scope', 'Principal', 'LoginService', '$state'];

    function DevicesController ($scope, Principal, LoginService, $state) {
        var vm = this;

    }
})();
