/**
 * Created by Alvin on 6/23/2016.
 */
var appModule = angular.module('app', []);

appModule.controller('mycontrl',function($scope) {
    //$scope.title = '点击展开';
    //$scope.text = '这里是内部的内容。';


    $scope.expanders = [{
        title : 'Click me to expand',
        text : 'Hi there folks, I am the content that was hidden but is now shown.'
    }, {
        title : 'Click this',
        text : 'I am even better text than you have seen previously'
    }, {
        title : 'Test',
        text : 'test'
    }];

});
appModule.directive('hello', function() {
    return {
        restrict: 'E',
        template: '<div>Hi there <span ng-transclude></span></div>',
        replace: true
    };
});

//appModule.directive('expander', function() {
//    return {
//        restrict : 'EA',
//        replace : true,
//        transclude : true,
//        scope : {
//            title : '=expanderTitle'
//        },
//        template : '<div>'
//        + '<div class="title" ng-click="toggle()">{{title}}</div>'
//        + '<div class="body" ng-show="showMe" ng-transclude></div>'
//        + '</div>',
//        link : function(scope, element, attrs) {
//            scope.showMe = false;
//            scope.toggle = function toggle() {
//                scope.showMe = !scope.showMe;
//            }
//        }
//    }
//});


appModule.directive('expander', function() {
    return {
        restrict : 'EA',
        replace : true,
        transclude : true,
        require : '^?accordion',
        scope : {
            title : '=expanderTitle'
        },
        template : '<div>'
        + '<div class="title" ng-click="toggle()">{{title}}</div>'
        + '<div class="body" ng-show="showMe" ng-transclude></div>'
        + '</div>',
        link : function(scope, element, attrs, accordionController) {
            scope.showMe = false;
            accordionController.addExpander(scope);
            scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
                accordionController.gotOpened(scope);
            }
        }
    }
});

appModule.directive('accordion', function() {
    return {
        restrict : 'EA',
        replace : true,
        transclude : true,
        template : '<div ng-transclude></div>',
        controller : function() {
            var expanders = [];
            this.gotOpened = function(selectedExpander) {
                angular.forEach(expanders, function(expander) {
                    if (selectedExpander != expander) {
                        expander.showMe = false;
                    }
                });
            }
            this.addExpander = function(expander) {
                expanders.push(expander);
            }
        }
    }
});