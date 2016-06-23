/**
 * Created by Alvin on 2/26/2016.
 */
angular.module('appUiRouteModule', ['ui.router', 'ui.router.state'])
    .config(function ($stateProvider, $urlRouterProvider) {
            //
            // For any unmatched url, redirect to /state1
            //$urlRouterProvider.otherwise("loginhome");
            $urlRouterProvider.otherwise("saleshome");
            //$urlRouterProvider.otherwise("homepagehome");
            //$urlRouterProvider.otherwise("guesthome");
            // Now set up the states

            $stateProvider
                .state('saleshome', {
                    url: "/saleshome",
                    views: {
                        indexview: {
                            templateUrl: "page/saleshome.html"
                        }
                    }
                })
                .state('saleshome.header', {
                    url: "/header",
                    views: {
                        headerview: {
                            templateUrl: "page/common/header.html"
                        }
                    }

                })
                .state('saleshome.content', {
                    url: "/content",
                    views: {
                        contentview: {
                            templateUrl: "page/common/content.html"
                        }
                    }

                })

                .state('saleshome.left', {
                    url: "/left",
                    views: {
                        leftview: {
                            templateUrl: "page/common/left.html"
                        }
                    }

                })

                .state('saleshome.footer', {
                    url: "/footer",
                    views: {
                        footerview: {
                            templateUrl: "page/common/footer.html"
                        }
                    }

                })


                .state('saleshome.right', {
                    url: "/right",
                    views: {
                        rightview: {
                            templateUrl: "page/common/tighr.html"
                        }
                    }

                })

        }
    )
