/**
 * Created by Alvin on 3/8/2016.
 */
angular.module('orderserver', ['onsen'])

    .factory('getPictureListService', ["$q", "$http", function($q, $http, $response){
        var services={};

        services.getPictureList=function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http({
                method: 'POST',
                url: getUrlByKey('getAdInfo'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function(result){
                    // alert("http get success"+result.data);
                    if(angular.equals("1",result.code)) {
                        deferred.resolve(result.data);
                    }else{
                        deferred.reject(result);
                    }
                })
                .error(function(error){
                    //  alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }

        return services;
    }])

    .factory('orderService', ["$q", "$http", function ($q, $http, $response) {
        var services = {};


        services.getOrderAdRequests = function (postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('proOrderList'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            }).success(function (result) {
                    //alert("http get success"+result.data);
                    if (angular.equals("1", result.code)) {
                        /*****  有广告数据， 显示广告信息  ******/
                        deferred.resolve(result);
                    } else if (angular.equals("-4", result.code)) {
                        /*****  没有广告数据， 显示原始信息 ******/
                        deferred.resolve(result);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //  alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }



        services.getOrderListRequests = function (postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('proOrderList'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            }).success(function (result) {
                    //alert("http get success"+result.data);
                    if (angular.equals("1", result.code)) {
                        deferred.resolve(result);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //  alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }
        services.getOrderListByUserRequests = function (postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            //$http.post("http://9.125.151.127:8080/LDDataServer/?action=Forum&cmd=getAllForumInfo")
            $http({
                method: 'POST',
                url: getUrlByKey('proMyOrderList'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            }).success(function (result) {
                    //alert("http get success"+result.data);
                    if (angular.equals("1", result.code)) {
                        deferred.resolve(result);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //  alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
            //test
        }
        //iden_type_code=A&agri_order_id=4
        services.getOrderDetailRequests = function (postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('proOrderDetail'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function (result) {
                    //alert("http get success"+result.data);
                    if (angular.equals("1", result.code)) {
                        deferred.resolve(result.data);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //  alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }
        //iden_type_code=A&agri_order_id=4
        services.getMyOrderDetailRequests = function (postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('proMyOrderDetail'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function (result) {
                    //alert("http get success"+result.data);
                    if (angular.equals("1", result.code)) {
                        deferred.resolve(result.data);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //  alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }

        services.joinProOrderRequests = function (postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('proJoinOrder'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function (result) {
                    //alert("http get success"+result.data);
                    if (angular.equals("1", result.code)) {
                        deferred.resolve(result.data);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //  alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }

        services.getUserPicsRequests = function (postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('userPics'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function (result) {
                    //alert("http get success"+result.data);
                    if (angular.equals("1", result.code)) {
                        deferred.resolve(result.data);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //  alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }
        services.uploadImags = function (strUrlParam, fd) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('uploadfile') + strUrlParam,
                headers: {'Content-Type': undefined},
                data: fd
            }).success(function (result) {
                if (angular.equals("1", result.code)) {
                    deferred.resolve(result.data);
                    //alert(result.data);
                } else {
                    deferred.reject(result);
                }

            }).error(function (error) {
                //  alert("http get error "+error);
                deferred.reject(error);
            });
            return promise;
        }

        return services;
        // .{
        //    getOrderListRequests: getOrderListRequests,
        //    getOrderDetailRequests:getOrderDetailRequests,
        //    getOrderListByUserRequests:getOrderListByUserRequests,
        //    joinProOrderRequests:joinProOrderRequests,
        //    getMyOrderDetailRequests:getMyOrderDetailRequests
        //};
    }])
    .factory('orderInfoService', function () {
        var services = {};
        var proorderlist = [];
        var isFirstTimeAccessMyOrderList = 1;
        var promyorderlist = [];
        var promyorderdetailMap = {};

        services.cleanAllOrderInfo=function(){
            proorderlist = [];
            isFirstTimeAccessMyOrderList = 1;
            promyorderlist = [];
            promyorderdetailMap = {};
        }
        services.pushProOrder = function (proOrder) {
            proorderlist.push(proOrder);
        }
        services.copyProOrder = function (proOrderlist) {
            proorderlist = proOrderlist;
        }
        services.getProOrderList = function () {
            return proorderlist;
        }
        services.updatePartNumProOrderList = function (orderId, jionNumer) {
            angular.forEach(proorderlist, function (data, index, array) {
                if (angular.equals(data.agri_order_id, orderId)) {
                    data.attend_bid_num = data.attend_bid_num * 1 + jionNumer * 1;
                    data.order_part_num = data.order_part_num * 1 - jionNumer * 1;
                }
            });
            return proorderlist;
        }


        services.pushProMyOrder = function (proOrder) {
            promyorderlist.push(proOrder);
        }
        services.copyProMyOrder = function (proOrderlist) {
            promyorderlist = proOrderlist;
        }
        services.concatProMyOrder = function (proOrderlist) {
            promyorderlist = promyorderlist.concat(proOrderlist);
        }
        services.getProMyOrderList = function () {
            return promyorderlist;
        }
        //following map use to store the order detail can be get by the order id
        var proorderdetailMap = {};

        services.putProOrderDetailMap = function (item) {
            proorderdetailMap[item.key] = item.value;
        }
        services.getProOrderDetailById = function (orderId) {
            return proorderdetailMap[orderId];
        }

        services.cleanProOrderDetailMap = function () {
            proorderdetailMap = {};
        }
        //following map use to store the my order detail can be get by the order id


        services.putProMyOrderDetailMap = function (item) {
            promyorderdetailMap[item.key] = item.value;
        }
        services.getProMyOrderDetailById = function (orderId) {
            return promyorderdetailMap[orderId];
        }

        services.cleanProMyOrderDetailMap = function () {
            promyorderdetailMap = {};
        }
        services.getFirstTimeAccessMyOrderFlag = function () {
            return isFirstTimeAccessMyOrderList;
        }
        services.setFirstTimeAccessMyOrderFlag = function (k) {
            isFirstTimeAccessMyOrderList = k;
        }

        return services;
    })

    .factory('getAdvertisePictureService', ["$q", "$http", function($q, $http, $response){
        var services={};

        services.getPictureUrl=function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('getAdInfo'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function(result){
                    // alert("http get success"+result.data);
                    if(angular.equals("1",result.code)) {
                        deferred.resolve(result.data);
                    }else{
                        deferred.reject(result);
                    }
                })
                .error(function(error){
                    //  alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }

        return services;
    }])
