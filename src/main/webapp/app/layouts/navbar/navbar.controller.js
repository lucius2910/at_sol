(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$state', 'Auth', 'Principal', 'ProfileService', 'LoginService'];

    function NavbarController ($state, Auth, Principal, ProfileService, LoginService) {
        var vm = this;

        vm.isNavbarCollapsed = true;

        vm.lstMenu = [
            {
                id: 1,
                link: 'devices',
                text: 'Thiết bị',
                icon: 'fa fa-server',
                subItems:[]
            },
            {
                id: 2,
                link: 'device-group',
                text: 'Nhóm thiết bị',
                icon: 'fa fa-server',
                subItems:[
                    {
                        id: 4,
                        link: 'devices',
                        text: 'Thiết bị 1',
                        icon: 'fa fa-star'
                    },
                    {
                        id: 5,
                        link: 'devices',
                        text: 'Thiết bị 2',
                        icon: 'fa fa-star'
                    }
                ]
            }
        ]

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
    }
})();
