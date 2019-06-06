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
                text: 'Quản lý thiết bị',
                icon: 'fa fa-server',
                subItems:[
                    {
                        id: 11,
                        link: 'devices',
                        text: 'Thiết bị',
                        icon: 'fa fa-microchip'
                    },
                    {
                        id: 12,
                        link: 'group-devices',
                        text: 'Nhóm thiết bị',
                        icon: 'fa fa-cubes'
                    }
                ]
            },
            {
                id: 2,
                text: 'Quản lý khách hàng',
                icon: 'fa fa-users',
                subItems:[
                    {
                        id: 21,
                        link: 'customers',
                        text: 'Tài khoản',
                        icon: 'fa fa-user'
                    },
                    {
                        id: 22,
                        link: 'roles',
                        text: 'Roles',
                        icon: 'fa fa-user-circle'
                    },
                    {
                        id: 23,
                        link: 'permissions',
                        text: 'Permission',
                        icon: 'fa fa-cogs'
                    }
                ]
            },
            {
                id: 3,
                text: 'Quản lý vùng',
                icon: 'fa fa-map',
                subItems:[
                    {
                        id: 31,
                        link: 'areas',
                        text: 'Danh sách khu vực',
                        icon: 'fa fa-microchip'
                    },
                    {
                        id: 22,
                        link: 'area-config',
                        text: 'Thiết lập thông số',
                        icon: 'fa fa-wrench'
                    }
                ]
            }
            // {
            //     id: 2,
            //     link: 'device-group',
            //     text: 'Nhóm thiết bị',
            //     icon: 'fa fa-server',
            //     subItems:[
            //         {
            //             id: 4,
            //             link: 'devices',
            //             text: 'Thiết bị 1',
            //             icon: 'fa fa-star'
            //         },
            //         {
            //             id: 5,
            //             link: 'devices',
            //             text: 'Thiết bị 2',
            //             icon: 'fa fa-star'
            //         }
            //     ]
            // }
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
