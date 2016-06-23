/**
 * Created by Alvin on 3/3/2016.
 */
angular.module('uirouter',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("index");
        //
        // Now set up the states
        $stateProvider
            .state('index', {
                url: "/index",
                //templateUrl: "state1.html"

                        templateUrl:"state1.html"

            })
            .state('state1', {
                url: "/state1",
                //templateUrl: "state1.html"
                views:{
                    indexview:{
                        templateUrl:"state1.html"
                    }
                }
            })
            .state('state1.list', {
                url: "/list",
                //templateUrl: "state1.list.html",
                views:{
                    state1view:{
                        templateUrl:"state1.list.html"
                    }
                },
                controller: function($scope) {
                    $scope.items = ["A", "List", "Of", "Items"];
                }
            })
            .state('state2', {
                url: "/state2",
                //templateUrl: "state2.html"
                views:{
                    view1:{
                        templateUrl:"state2.html"
                    }
                }
            })
            .state('state2.list', {
                url: "/list",
                //templateUrl: "state2.list.html",
                views:{
                    state2view:{
                        templateUrl:"state2.list.html"
                    }
                },
                controller: function($scope) {
                    $scope.things = ["A", "Set", "Of", "Things"];
                }
            })
            .state('state1.dialog', {
                url: "/dialog",
                //templateUrl: "state2.list.html",
                views:{
                    state1view:{
                        templateUrl:"onsenui_dialog.html"
                    }
                }
            });
    });