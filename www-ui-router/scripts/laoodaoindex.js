// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints,
// and then run "window.location.reload()" in the JavaScript Console.


(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function showTestFunc() {
//            var cnt = document.getElementById('myC').getCarouselItemCount();
//            var midItem = Math.floor(cnt/2);
        alert("AAAAAAAAAA");
        document.getElementById('myC').setActiveCarouselItemIndex(0);
    };


    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        document.addEventListener('backbutton', onBackKeyDown.bind(this), false);
        //inappbrowser
        window.open = cordova.InAppBrowser.open;
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };
    var backButtonCount=0;
    function onBackKeyDown() {
        // TODO: This application has been suspended. Save application state here.
        //alert("back button has been pressed");
        //alert(uirouterhistory.pop);
        //alert(window.location.href)
        // ;
        var strhref = window.location.href;
        if(backButtonCount >= 2){
            navigator.app.exitApp();
        }
        if ('home' == strhref.substring(strhref.length - 4)) {
            backButtonCount++;
            ons.notification.confirm({
                        title:'你真的要狠心退出吗？',
                        //message:'你需要输入用户名和密码才能登陆',
                        buttonLabels:['再留一会儿','确定'],
                        cancelable:true,
                        modifier: mod,
                        callback: function (idx) {
                            //alert("you have pressed : "+idx);
                            backButtonCount=0;
                            switch (idx) {
                                case 0:
                                    break;
                                case 1:
                                    navigator.app.exitApp();
                                    break;
                            }
                        }
            });
            //if(confirm('你真的要狠心退出吗？')){
            //    navigator.app.exitApp();
            //}
        }
        //else if(strhref.indexOf("forumhome/detail") > 0){
        //    window.history.back();location.reload();
        //}
        else {
            window.history.back();
            //strhref = window.location.href;
            //if (strhref.indexOf('forumhome') > 0){
            //    location.reload();
            //}
        }
        //if(confirm('你真的要狠心退出吗？')){
        //    window.history.back();
        //    //navigator.app.exitApp();
        //}
        return ture;
    };

    //function onConfirm(buttonIndex){
    //    alert("你选择了"+buttonIndex);
    //    if(buttonIndex == 1){
    //        navigator.exitApp();
    //    }
    //};

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
        //force user to open gps
        cordova.plugins.diagnostic.isLocationEnabled(function(result){
            console.log("Location is " + (result ? "enabled" : "disabled"));
            if(!result){
                alert("请开启定位服务");
                cordova.plugins.diagnostic.switchToLocationSettings();
            }
        }, function(error){
            console.error("The following error occurred: "+error);
        });
    };


    angular.module('laoodaoApp', ['infinite-scroll', 'onsen', 'languageModule', 'appUiRouteModule', 'useridserver', 'farm.farmland', 'forumModule', 'ordermanage', 'orderserver', 'forumserver',
        'farmlandServerModule', 'signup.farmland', 'signupServerModule', 'personalmanage', 'personalserver','homepage.farmland','homepageServerModule','planting','diseases','plantingServerModule',
        'diseasesServerModule','payattentiontocropModule','farmlandlocationModule'])

    // function($httpProvider){
    //    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    //    /**
    //     * Create by Alvin 3/1/2016
    //     * add the function the translate the data to the json dta
    //     * @param {Object} obj
    //     * @return {String}
    //     */
    //    var param = function(obj) {
    //        var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
    //
    //        for(name in obj) {
    //            value = obj[name];
    //
    //            if(value instanceof Array) {
    //                for(i=0; i<value.length; ++i) {
    //                    subValue = value[i];
    //                    fullSubName = name + '[' + i + ']';
    //                    innerObj = {};
    //                    innerObj[fullSubName] = subValue;
    //                    query += param(innerObj) + '&';
    //                }
    //            }
    //            else if(value instanceof Object) {
    //                for(subName in value) {
    //                    subValue = value[subName];
    //                    fullSubName = name + '[' + subName + ']';
    //                    innerObj = {};
    //                    innerObj[fullSubName] = subValue;
    //                    query += param(innerObj) + '&';
    //                }
    //            }
    //            else if(value !== undefined && value !== null)
    //                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
    //        }
    //
    //        return query.length ? query.substr(0, query.length - 1) : query;
    //    };
    //
    //    // Override $http service's default transformRequest
    //    $httpProvider.defaults.transformRequest = [function(data) {
    //        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    //    }];
    //
    //});


    //angular.module('app', ['onsen']).controller('FarmController',function($scope) {
    //    $scope.items = [
    //      {date:"03/03", name: "整地", price: 1500.01, material: ""},
    //      {date:"03/19", name: "播种", price: 1000.00, material: "新陆早42号"},
    //      {date:"03/22", name: "施肥", price: 26000.00, material: "51%大颗粒硫酸钾"},
    //      {date:"04/03", name: "除草", price: 2000.00, material: "草甘膦"},
    //      {date:"03/03", name: "整地", price: 1500.01, material: ""},
    //      {date:"03/19", name: "播种", price: 1000.00, material: "新陆早42号"},
    //      {date:"03/22", name: "施肥", price: 26000.00, material: "51%大颗粒硫酸钾"},
    //      {date:"04/03", name: "除草", price: 2000.00, material: "草甘膦"},
    //      {date:"03/03", name: "整地", price: 1500.01, material: ""},
    //      {date:"03/19", name: "播种", price: 1000.00, material: "新陆早42号"},
    //      {date:"03/22", name: "施肥", price: 26000.00, material: "51%大颗粒硫酸钾"},
    //      {date:"04/03", name: "除草", price: 2000.00, material: "草甘膦"}
    //    ];
    //});

})();
