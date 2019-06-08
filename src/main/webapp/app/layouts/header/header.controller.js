(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$state', 'Auth', 'Principal', 'ProfileService'];

    function HeaderController ($state, Auth, Principal, ProfileService) {
        var vm = this;

        vm.isAuthenticated = Principal.isAuthenticated;

        ProfileService.getProfileInfo().then(function(response) {
            vm.inProduction = response.inProduction;
            vm.swaggerEnabled = response.swaggerEnabled;
        });

        vm.logout = logout;
        vm.$state = $state;

        function logout() {
            Auth.logout();
            $state.go('login');
        }
    }
})();
