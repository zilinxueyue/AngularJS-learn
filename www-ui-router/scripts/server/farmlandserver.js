/**
 * Created by Alvin on 2/26/2016.
 */
angular.module('farmlandServerModule', ['onsen', 'appUiRouteModule'])

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


    .factory('getFarmlandDetailsService', ["$q", "$http", function ($q, $http, $response) {
        var getFarmlandDetailsRequests = function (postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            //$http.post("http://9.112.55.89:8080/lddatasystem/?action=CroplandMgr&cmd=getPlantDaily")
            $http({
                method: 'POST',
                url: getUrlByKey("farmLandDetails"),//'http://9.112.55.89:8080/lddatasystem/?action=CroplandMgr&cmd=getPlantDaily',
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
            // $http.post("http://9.112.55.89:8080/LDDataServer/?action=CroplandMgr&cmd=init&appMobileNo=1")
                .success(function (result) {
                    //alert("http get success"+result.data);
                    if (angular.equals("1", result.code)) {
                        deferred.resolve(result);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //  alert("http get error " + error);
                    deferred.reject(error);
                });
            return promise;
        }
        return {
            getFarmlandDetailsRequests: getFarmlandDetailsRequests
        };
    }])


    .factory('getFarmlandListService', ["$q", "$http", function ($q, $http, $response) {
        var getFarmlandListRequests = function (postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('landlist'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            }).success(function (result) {
                    if (angular.equals("1", result.code)) {
                        //alert(result.data);
                        deferred.resolve(result);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }
        return {
            getFarmlandListRequests: getFarmlandListRequests
        };
    }])
    .factory('getAddressService', ["$q", "$http", function ($q, $http, $response) {
        //ZONE_CODE
        var getAddressRequests = function (postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            //smartHttp.getLand().andNewLand()
            // $http.post("http://9.112.55.89:8080/LDDataServer/?action=CroplandMgr&cmd=init&appMobileNo=13688888888")
            $http({
                method: 'POST',
                url: getUrlByKey('address'),//'http://9.125.151.127:8080/LDDataServer/?action=User&cmd=login',
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function (result) {
                    if (angular.equals("1", result.code)) {
                        //alert(result.data);
                        deferred.resolve(result.data);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }
        return {
            getAddressRequests: getAddressRequests
        };
    }])


    .factory('getDubbleMarkService', ["$q", "$http", function ($q, $http, $response) {
        //ZONE_CODE
        var getDubblemarkRequests = function (postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('dubblemarkUrl'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function (result) {
                    if (angular.equals("1", result.code)) {
                        deferred.resolve(result.data);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }
        return {
            getDubblemarkRequests: getDubblemarkRequests
        };
    }])


    .factory('addNewLandService', ["$q", "$http", function ($q, $http, $response) {
        var addNewLandRequests = function (postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            //$http.setParameter()
            //$http.post("http://9.112.55.89:8080/lddatasystem/?action=CroplandMgr&cmd=getPlantList" )
            $http({
                method: 'POST',
                url: getUrlByKey('addNewLand'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function (result) {
                    if (angular.equals("1", result.code)) {
                        deferred.resolve(result.data);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }
        return {
            addNewLandRequests: addNewLandRequests
        };
    }])


    /**********更新页面中， 取得农田详情**********/
    .factory('getLandInfoService', ["$q", "$http", function ($q, $http, $response) {
        var getLandRequests = function (postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('getCorpLandInfor'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function (result) {
                    if (angular.equals("1", result.code)) {
                        deferred.resolve(result.data);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    deferred.reject(error);
                });
            return promise;
        }
        return {
            getLandRequests: getLandRequests
        };

    }])

/********************************/

    .factory('editLandService', ["$q", "$http", function ($q, $http, $response) {
        var editLandRequests = function (postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            //$http.setParameter()
            //$http.post("http://9.112.55.89:8080/lddatasystem/?action=CroplandMgr&cmd=getPlantList" )
            $http({
                method: 'POST',
                url: getUrlByKey('editLand'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function (result) {
                    if (angular.equals("1", result.code)) {
                        deferred.resolve(result.data);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }
        return {
            editLandRequests: editLandRequests
        };

    }])


    .factory('deleteLandService', ["$q", "$http", function ($q, $http, $response) {
        var deleteLandRequests = function (postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            //$http.setParameter()
            //$http.post("http://9.112.55.89:8080/lddatasystem/?action=CroplandMgr&cmd=getPlantList" )
            $http({
                method: 'POST',
                url: getUrlByKey('deleteLand'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function (result) {
                    if (angular.equals("1", result.code)) {
                        deferred.resolve(result.data);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }
        return {
            deleteLandRequests: deleteLandRequests
        };

    }])




        /************更新详情操作*************/

    .factory('landActionService', ["$q", "$http", function ($q, $http, $response) {
        var services={};
        services.editLandActionRequests = function (postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            //$http.setParameter()
            //$http.post("http://9.112.55.89:8080/lddatasystem/?action=CroplandMgr&cmd=getPlantList" )
            $http({
                method: 'POST',
                url: getUrlByKey('editLandAction'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function (result) {
                    if (angular.equals("1", result.code)) {
                        deferred.resolve(result.data);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }
        return services;
    }])



    /************删除详情操作*************/

    .factory('deleteLandActionService', ["$q", "$http", function ($q, $http, $response) {
        var deleteLandActionRequests = function (postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            //$http.setParameter()
            //$http.post("http://9.112.55.89:8080/lddatasystem/?action=CroplandMgr&cmd=getPlantList" )
            $http({
                method: 'POST',
                url: getUrlByKey('deleteLandAction'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function (result) {
                    if (angular.equals("1", result.code)) {
                        deferred.resolve(result.data);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }
        return {
            deleteLandActionRequests: deleteLandActionRequests
        };

    }])







    .factory('farmlandActionService', ["$q", "$http", function ($q, $http, $response) {
        var farmlandActionRequests = function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post("http://9.112.55.89:8080/lddatasystem/?action=CroplandMgr&cmd=getPlantList", {timeout: 300})
                .success(function (result) {
                    if (angular.equals("1", result.code)) {
                        deferred.resolve(result);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //alert("http get error "+error);
                    alert("test error for farmlandActionService ");
                    deferred.reject(error);
                });
            return promise;
        }
        return {
            farmlandActionRequests: farmlandActionRequests
        };
    }])
    .factory('getFirstLevelCropsService', ["$q", "$http", function ($q, $http, $response) {
        //ZONE_CODE
        //var getFirstLevelCropsRequests = function (postData) {
        //    var deferred = $q.defer();
        //    var promise = deferred.promise;
        //    //smartHttp.getLand().andNewLand()
        //    // $http.post("http://9.112.55.89:8080/LDDataServer/?action=CroplandMgr&cmd=init&appMobileNo=13688888888")
        //    $http({
        //        method: 'POST',
        //        url: getUrlByKey('firstLevelCrops'),//'http://9.125.151.127:8080/LDDataServer/?action=User&cmd=login',
        //        headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
        //        data: postData
        //    })
        //        .success(function (result) {
        //            if (angular.equals("1", result.code)) {
        //                //alert(result.data);
        //                deferred.resolve(result.data);
        //            } else {
        //                deferred.reject(result);
        //            }
        //        })
        //        .error(function (error) {
        //            //alert("http get error "+error);
        //            deferred.reject(error);
        //        });
        //    return promise;
        //}
        //return {
        //    getFirstLevelCropsRequests: getFirstLevelCropsRequests
        //};




        var getSendLevelCropsRequests = function (postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            //smartHttp.getLand().andNewLand()
            // $http.post("http://9.112.55.89:8080/LDDataServer/?action=CroplandMgr&cmd=init&appMobileNo=13688888888")
            $http({
                method: 'POST',
                url: getUrlByKey('sendLevelCrops'),//'http://9.125.151.127:8080/LDDataServer/?action=User&cmd=login',
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function (result) {
                    if (angular.equals("1", result.code)) {
                        //alert(result.data);
                        deferred.resolve(result.data);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }
        return {
            getSendLevelCropsRequests: getSendLevelCropsRequests
        };


    }])
    .factory('farmLandAddNewAcionService', ["$q", "$http", function ($q, $http, $response) {
        //ZONE_CODE
        var addNewActionRequests = function (postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            //smartHttp.getLand().andNewLand()
            // $http.post("http://9.112.55.89:8080/LDDataServer/?action=CroplandMgr&cmd=init&appMobileNo=13688888888")
            $http({
                method: 'POST',
                url: getUrlByKey('newLandAction'),//'http://9.125.151.127:8080/LDDataServer/?action=User&cmd=login',
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData// tranjsontoparam(postData)
            })
                .success(function (result) {
                    if (angular.equals("1", result.code)) {
                        //alert(result.data);
                        deferred.resolve(result.data);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }
        return {
            addNewActionRequests: addNewActionRequests
        };
    }])
    .factory('getActionDetailService', ["$q", "$http", function ($q, $http, $response) {
        //ZONE_CODE
        var getActionDetailRequests = function (postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('actionDetails'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData// tranjsontoparam(postData)
            })
                .success(function (result) {
                    if (angular.equals("1", result.code)) {
                        //alert(result.data);
                        deferred.resolve(result);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }
        return {
            getActionDetailRequests: getActionDetailRequests
        };
    }])
    .factory('getUserZoneInfoService', ["$q", "$http", function ($q, $http, $response) {
        //ZONE_CODE
        var getUserZoneInfoRequests = function (postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('userZoneInfo'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function (result) {
                    if (angular.equals("1", result.code)) {
                        //alert(result.data);
                        deferred.resolve(result.data);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }
        return {
            getUserZoneInfoRequests: getUserZoneInfoRequests
        };
    }])

    .factory('getFarmInfoService', ["$q", "$http", function ($q, $http, $response) {
        //ZONE_CODE
        var service = {};
        var landlist = [];
        var landcommeninfo = {
            total_crop_no: "",
            total_plant_area: ""
        };
        var landactiondetailMap = {};
        var landdetailMap = {};


        service.cleanAllLandInfo = function () {
            landlist = [];
            landcommeninfo = {
                total_crop_no: "",
                total_plant_area: ""
            };
            landactiondetailMap = {};
            landdetailMap = {};

        }

        service.setTotalCropNo = function (number) {
            landcommeninfo.total_crop_no = number;
        }
        service.setTotalPlantArea = function (area) {
            landcommeninfo.total_plant_area = area;
        }
        service.updateTotalCropNo = function (number) {
            landcommeninfo.total_crop_no = landcommeninfo.total_crop_no * 1 + number * 1;
        }
        service.updateTotalPlantArea = function (area) {
            landcommeninfo.total_plant_area = landcommeninfo.total_plant_area * 1 + area * 1;
        }
        service.getLandCommenInfo = function () {
            return landcommeninfo;
        }

        service.updateLandListActionInfo = function (plant_detail_id, record_time, bpm_name) {
            angular.forEach(landlist, function (data, index, array) {
                if (angular.equals(data.plant_detail_id, plant_detail_id)) {
                    data.record_time = record_time;
                    data.bpm_name = bpm_name;
                }
            });
        }
        service.pushLand = function (land) {
            landlist.push(land);
        }

        service.copyLandList = function (ldlist) {
            landlist = ldlist;
        }
        service.getLandList = function () {
            return landlist;
        }
        service.cleanLandList = function () {
            landlist = [];
        }
        service.cleanLandCommenInfo = function () {
            landcommeninfo = {
                total_crop_no: "",
                total_plant_area: ""
            };
        }

        //following map use to store the my land detail can be get by the land id


        service.putLandDetailMap = function (item) {
            landdetailMap[item.key] = item.value;
        }
        //k is the land id
        service.updateDetailActionTotalFee = function (k, fee) {
            landdetailMap[k].all_cost = toDecimal(landdetailMap[k].all_cost * 1 + fee * 1);
            console.log("the new action total fee is : " + landdetailMap[k].all_cost);
        }
        service.getLandDetailById = function (landId) {
            return landdetailMap[landId];
        }
        // action is the action details reference the land detail post request result
        service.updateDetailMapActionList = function (landId, action) {
            landdetailMap[landId].data.push(action);
        }
        service.cleanLandDetailMap = function () {
            landdetailMap = {};
        }

        //following map use to store the my land detail can be get by the land id


        service.putLandActionDetailMap = function (item) {
            landactiondetailMap[item.key] = item.value;
        }

        service.getLandActionDetailById = function (landId) {
            return landactiondetailMap[landId];
        }
        // action is the action details reference the land detail post request result
        service.updateLandActionDetailMap = function (actionId, actiondetail) {
            landactiondetailMap[actionId].data.push(actiondetail);
        }
        service.cleanLandActionDetailMap = function () {
            landactiondetailMap = {};
        }

        service.getCropsInfo = function (postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            //$http.setParameter()
            //$http.post("http://9.112.55.89:8080/lddatasystem/?action=CroplandMgr&cmd=getPlantList" )
            $http({
                method: 'POST',
                url: getUrlByKey('cropsInfo'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function (result) {
                    if (angular.equals("1", result.code)) {
                        deferred.resolve(result.data);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }
        service.getFarmAlertInfo = function (postData) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            //$http.setParameter()
            //$http.post("http://9.112.55.89:8080/lddatasystem/?action=CroplandMgr&cmd=getPlantList" )
            $http({
                method: 'POST',
                url: getUrlByKey('farmAlertInfo'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function (result) {
                    if (angular.equals("1", result.code)) {
                        deferred.resolve(result.data);
                    } else {
                        deferred.reject(result);
                    }
                })
                .error(function (error) {
                    //alert("http get error "+error);
                    deferred.reject(error);
                });
            return promise;
        }

        return service;
    }])
    .filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    });
