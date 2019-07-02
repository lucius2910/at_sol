(function() {
    'use strict';

    angular
        .module('atSolApp')
        .controller('RoleConfigController', RoleConfigController);

    RoleConfigController.$inject = ['$scope', '$uibModalInstance', 'dataItem', 'AtsAlertService'];

    function RoleConfigController ($scope, $uibModalInstance, dataItem, AtsAlertService) {
        var vm = this;

        vm.treeData = [];
        vm.treeDataRaw = [];

        vm.cancel = cancel;
        vm.update = update;

        vm.treeDataRaw = [
            {
                id: 1,
                text: 'Quản lý thiết bị',
                level: 0
            },
            {
                id: 2,
                text: 'Thiết bị',
                level: 1,
                parent: 1
            },
            {
                id: 3,
                text: 'Xem thiết bị',
                level: 2,
                parent: 2
            },
            {
                id: 4,
                text: 'Thêm mới',
                level: 2,
                parent: 2
            },
            {
                id: 5,
                text: 'Sửa',
                level: 2,
                parent: 2
            },
            {
                id: 6,
                text: 'Xoá',
                level: 2,
                parent: 2
            },
            {
                id: 7,
                text: 'Nhóm thiết bị',
                level: 1,
                parent: 1
            }
        ]

        vm.treeData = [
            {
                "text": "Same but with checkboxes",
                "children": [
                    {
                        "text": "initially selected",
                        "state": {
                            "selected": true
                        }
                    },
                    {
                        "text": "custom icon"
                    },
                    {
                        "text": "initially open",
                        "state": {
                            "opened": true
                        },
                        "children": ["Another node"]
                    }, 
                    {
                        "text": "custom icon"
                    }, 
                    {
                        "text": "disabled node",
                        "state": {
                            "disabled": true
                        }
                    }
                ]
            },
            {
                "text": "And wholerow selection"
            }
        ]

        init();

        function init() {
            console.log('init config controller');
        }

        function update(){
            AtsAlertService.success('Role is updated')
            $uibModalInstance.close();
        }

        function cancel(){
            $uibModalInstance.dismiss('cancel');
        }

        function formatTreeView(rawData){
            
        }

        $(function () {
            var treeItem = angular.element('#role_tree');
            
            treeItem.jstree({
                'plugins': ["wholerow", "checkbox", "types"],
                'core': {
                    "themes" : {
                        "responsive": true
                    },    
                    'data': vm.treeData
                },
                "types" : {
                    "default" : {
                        "icon" : "fa fa-folder kt-font-brand"
                    },
                    "file" : {
                        "icon" : "fa fa-file kt-font-brand"
                    }
                },
            });
        });

    }
})();
