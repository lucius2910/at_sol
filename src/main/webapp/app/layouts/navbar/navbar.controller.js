(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$state', 'Auth', 'Principal', 'ProfileService', 'LoginService'];

    function NavbarController ($state, Auth, Principal, ProfileService, LoginService) {
        var vm = this;

        vm.isNavbarCollapsed = true;
        vm.isAuthenticated = Principal.isAuthenticated;

        ProfileService.getProfileInfo().then(function(response) {
            vm.inProduction = response.inProduction;
            vm.swaggerEnabled = response.swaggerEnabled;
        });

        vm.login = login;
        vm.logout = logout;
        vm.toggleNavbar = toggleNavbar;
        vm.collapseNavbar = collapseNavbar;
        vm.$state = $state;

        function login() {
            collapseNavbar();
            LoginService.open();
        }

        function logout() {
            collapseNavbar();
            Auth.logout();
            $state.go('home');
        }

        function toggleNavbar() {
            vm.isNavbarCollapsed = !vm.isNavbarCollapsed;
        }

        function collapseNavbar() {
            vm.isNavbarCollapsed = true;
        }

        var my_awesome_script = document.createElement('script');
        my_awesome_script.setAttribute('src','./content/assets/demo/default/base/scripts.bundle.js');
        document.head.appendChild(my_awesome_script);

        // var my_awesome_script_1 = document.createElement('script');
        // my_awesome_script_1.setAttribute('src','./content/assets/app/bundle/app.bundle.js');
        // document.head.appendChild(my_awesome_script_1);
    }
})();
