/**
 * Created by Alvin on 3/1/2016.
 */
angular.module('forumserver',['onsen'])

    .factory('getForumLandInfoService', ["$q", "$http", function($q, $http, $response){
        var services={};
        var LandInfo={type:'',plant_detail_id:'',plant_main_id:''};
        /************8/
         * 农田ID： plant_detail_id
         */
        services.cleanAllLandServiceInfo=function(){
            var LandInfo={type:'',plant_detail_id:'',plant_main_id:''};
        }
        services.setType =function(type){
            LandInfo.type=type;
        }
        services.getType=function(){
            return LandInfo.type;
        }


        services.setPlant_detail_id =function(plant_detail_id){
            LandInfo.plant_detail_id=plant_detail_id;
        }
        services.getPlant_detail_id=function(){
            return LandInfo.plant_detail_id;
        }

        services.setPlant_main_id =function(plant_main_id){
            LandInfo.plant_main_id=plant_main_id;
        }
        services.getPlant_main_id=function(){
            return LandInfo.plant_main_id;
        }






        return services;
    }])




    .factory('getForumListService', ["$q", "$http", function($q, $http, $response){
        var services={};

        services.getUnreadInfoRequest=function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            //$http.post("http://9.125.151.127:8080/LDDataServer/?action=Forum&cmd=getAllForumInfo")
            $http({
                method: 'POST',
                url: getUrlByKey('unreadInfo'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function(result){
                    // alert("http get success"+result.data);
                    if(angular.equals("1",result.code)) {
                        deferred.resolve(result.data);
                        //console.log(result.data[0].app_user_id);
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
        services.searchForumRequest=function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            //$http.post("http://9.125.151.127:8080/LDDataServer/?action=Forum&cmd=getAllForumInfo")
            $http({
                method: 'POST',
                url: getUrlByKey('searchForum'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function(result){
                    // alert("http get success"+result.data);
                    if(angular.equals("1",result.code)) {
                        deferred.resolve(result);
                        //console.log(result.data[0].app_user_id);
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


        services.getAllForumListRequests = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            //$http.post("http://9.125.151.127:8080/LDDataServer/?action=Forum&cmd=getAllForumInfo")
            $http({
                method: 'POST',
                url: getUrlByKey('allForumList'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function(result){
                   // alert("http get success"+result.data);
                    if(angular.equals("1",result.code)) {
                        deferred.resolve(result);
                        //console.log(result.data[0].app_user_id);
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

        services.getEssenceForumListRequests = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            //$http.post("http://9.125.151.127:8080/LDDataServer/?action=Forum&cmd=getAllForumInfo")
            $http({
                method: 'POST',
                url: getUrlByKey('essenceForumList'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function(result){
                    // alert("http get success"+result.data);
                    if(angular.equals("1",result.code)) {
                        deferred.resolve(result);
                        //console.log(result.data[0].app_user_id);
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
        services.getMyForumListRequests = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            //$http.post("http://9.125.151.127:8080/LDDataServer/?action=Forum&cmd=getAllForumInfo")
            $http({
                method: 'POST',
                url: getUrlByKey('myForumList'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
                .success(function(result){
                    // alert("http get success"+result.data);
                    if(angular.equals("1",result.code)) {
                        deferred.resolve(result);
                        //console.log(result.data[0].app_user_id);
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
        //return {
        //    getAllForumListRequests: getAllForumListRequests,
        //    getEssenceForumListRequests:getEssenceForumListRequests,
        //    getMyForumListRequests:getMyForumListRequests
        //};
    }])
    .factory('getForumDetailService', ["$q", "$http", function($q, $http, $response){
        var getForumDetailByIdRequests = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            //var postData = {subject_Id:subjectId};
            $http({
                method: 'POST',
                url: getUrlByKey('forumDetail'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })

            // $http.post("http://9.125.151.127:8080/LDDataServer/?action=Forum&cmd=getReplyInfoById",{subject_Id:subjectId})
                .success(function(result){
                    //alert("http get success"+result.data);
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
        return {
            getForumDetailByIdRequests: getForumDetailByIdRequests
        };
    }])

//回复页面
    .factory('getReplyForumDetailService', ["$q", "$http", function($q, $http, $response){
        var getReplyForumDetailRequests = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            //var postData = {subject_Id:subjectId};
            $http({
                method: 'POST',
                url: getUrlByKey('replyChartDetail'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })

            // $http.post("http://9.125.151.127:8080/LDDataServer/?action=Forum&cmd=getReplyInfoById",{subject_Id:subjectId})
                .success(function(result){
                    //alert("http get success"+result.data);
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
        return {
            getReplyForumDetailRequests: getReplyForumDetailRequests
        };
    }])

// editor 页面
    .factory('getForumEditorAccordIDService', ["$q", "$http", function($q, $http, $response){
        var getForumEditByIdRequests = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            //var postData = {subject_Id:subjectId};
            $http({
                method: 'POST',
                url: getUrlByKey('forumEditorAccordID'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })

            // $http.post("http://9.125.151.127:8080/LDDataServer/?action=Forum&cmd=getReplyInfoById",{subject_Id:subjectId})
                .success(function(result){
                    //alert("http get success"+result.data);
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
        return {
            getForumEditByIdRequests: getForumEditByIdRequests
        };
    }])


    .factory('getForumByIdService', ["$q", "$http", function($q, $http, $response){
        var getForumByIdRequests = function(subjectId){
            var deferred = $q.defer();
            var promise = deferred.promise;
            var postData = {subject_Id:subjectId};
            $http({
                method: 'POST',
                 url: getUrlByKey('getForumById'),
                //url: 'http://9.125.151.127:8080/LDDataServer/?action=Forum&cmd=getReplyInfoById',
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: tranjsontoparam(postData)
            })

           // $http.post("http://9.125.151.127:8080/LDDataServer/?action=Forum&cmd=getReplyInfoById",{subject_Id:subjectId})
                .success(function(result){
                    //alert("http get success"+result.data);
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
        return {
            getForumByIdRequests: getForumByIdRequests
        };
    }])
    .factory('addNewForumService', ["$q", "$http", function($q, $http, $response){
        var addNewForumRequests = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            //$http.post("http://9.112.55.89:8080/LDDataServer/?action=Forum&cmd=saveNewSubject",postData)


            $http({
                method: 'POST',
                url: getUrlByKey('addNewForumUrl'),
                //url: 'http://9.125.151.127:8080/LDDataServer/?action=Forum&cmd=saveNewSubject',
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })

                .success(function(result){
                    //alert("http get success"+result.data);
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
        return {
            addNewForumRequests: addNewForumRequests
        };
    }])


    /**
     * 发表回复：
     */


    .factory('sendReplyForumService', ["$q", "$http", function($q, $http, $response){
        var sendReplyForumRequests = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            //alert("sendReplyForumService ====>sendReplyForumRequests")
            //$http.post("http://9.112.55.89:8080/LDDataServer/?action=Forum&cmd=saveNewSubject",postData)
            $http({
                method: 'POST',
                url: getUrlByKey('sendReplyForum'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })



                .success(function(result){
                    //alert("http get success"+result.data);
                    if(angular.equals("1",result.code)) {
                        deferred.resolve(result.data);
                        //alert(result.data.insert_key_id);
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
        return {
            sendReplyForumRequests: sendReplyForumRequests
        };
    }])



    /**
     * 删除图片
     */


    .factory('deletePicService', ["$q", "$http", function($q, $http, $response){

        //var postData={
        //    id:"110",
        //    tname:"Alvin",
        //    "action":"TestServletImpl",
        //    "method":"getTestName",
        //    strdata:JSON.stringify([{name:"1",age:12},{name:"2",age:22},{name:"3",age:32}]),
        //    strfiledata:JSON.stringify(["a","b","c"])
        //};


        var deletePicRequests = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
           // var postData1 =[{'pic_path':'http://127.0.0.1:8080/app/000000000005_20160413111217323.jpg'},{'pic_path':'http://127.0.0.1:8080/app/000000000251_20160413223259111.jpg'}];
            //alert("sendReplyForumService ====>sendReplyForumRequests")
            //$http.post("http://9.112.55.89:8080/LDDataServer/?action=Forum&cmd=saveNewSubject",postData)
            $http({
                method: 'POST',
                url: getUrlByKey('deletePicForum'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })
            //JSON.stringify(

            //JSON.angular.toJson.stringify(postData)

                .success(function(result){
                    //alert("http get success"+result.data);
                    if(angular.equals("1",result.code)) {
                        deferred.resolve(result.data);
                        //alert(result.data.insert_key_id);
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
        return {
            deletePicRequests: deletePicRequests
        };
    }])



    /**
     * 更新帖子
     */
    .factory('updateForumService', ["$q", "$http", function($q, $http, $response){
        var updateForumRequests = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            //$http.post("http://9.112.55.89:8080/LDDataServer/?action=Forum&cmd=saveNewSubject",postData)
            $http({
                method: 'POST',
                url: getUrlByKey('updateForum'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            })

                .success(function(result){
                    //alert("http get success"+result.data);
                    if(angular.equals("1",result.code)) {
                        deferred.resolve(result.message);

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
        return {
            updateForumRequests: updateForumRequests
        };
    }])


    .factory('getReplyChartDetailService', ["$q", "$http", function($q, $http, $response){
        var getReplyChartDetailByIdRequests = function(postData){
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http({
                method: 'POST',
                url: getUrlByKey('replyChartDetail'),
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
                data: postData
            }).success(function(result){
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
        return {
            getReplyChartDetailByIdRequests: getReplyChartDetailByIdRequests
        };
    }])
    .factory('getForumPublicInfoService', function(){
        var selectedSubjectId="";

        var getSelectedSubjectId=function(){
            return selectedSubjectId;
        }
        var setSelectedSubjectId=function(subjectId){
            selectedSubjectId=subjectId;
        }
        var user={appMobileNo:'',appPwd:'',idenTypeId:''};

        var setAppMobileNo=function(mobileNo){
            user.appMobileNo=mobileNo;
        }
        var getAppMobileNo=function(){
            return user.appMobileNo;
        }
        var setAppPwd=function(pwd){
            user.appPwd=pwd;
        }
        var getAppPwd=function(){
            return user.appPwd;
        }
        var setIdenTypeId=function(id){
            user.idenTypeId=id;
        }
        var getIdenTypeId=function(){
            return user.idenTypeId;
        }
        return {
            setAppMobileNo :setAppMobileNo,
            getAppMobileNo:getAppMobileNo,
            setAppPwd:setAppPwd,
            getAppPwd:getAppPwd,
            setIdenTypeId:setIdenTypeId,
            getIdenTypeId:getIdenTypeId,
            getSelectedSubjectId:getSelectedSubjectId,
            setSelectedSubjectId:setSelectedSubjectId
        }
    })
    .factory('getForumInfoService', function(){
        //subject_id	主题ID
        //subject_title	主题
        //subject_content	发贴内容
        //pic_path	图片路径
        //pic_name	图片名
        //reply_num	回复数量
        //send_time	发贴时间

        var service={};
        var allforumlist=[];
        var essenceforumlist=[];
        var myforumlist=[];
        var activebutton="A";  // A : all forum ; M : my forum ; E : essence forum

        service.setActiveButton=function(but_name){
            activebutton = but_name;
        }
        service.getActiveButton=function(){
            return activebutton;
        }
        service.pushAllForumList=function(forum){
            allforumlist.push(forum);
        }

        service.copyAllForumList=function(flist){
            allforumlist=flist;
        }
        service.getAllForumList=function(){
            return allforumlist;
        }

        service.pushMyForumList=function(forum){
            myforumlist.push(forum);
        }

        service.copyMyForumList=function(flist){
            myforumlist=flist;
        }
        service.getMyForumList=function(){
            return myforumlist;
        }

        service.pushEssenceForumList=function(forum){
            essenceforumlist.push(forum);
        }

        service.copyEssenceForumList=function(flist){
            essenceforumlist=flist;
        }
        service.getEssenceForumList=function(){
            return essenceforumlist;
        }


        var forumdetailMap={};
        // key is the subject value it the result data
        service.putForumDetailMap=function(item){
            forumdetailMap[item.key]=item.value;
        }
        ////k is the land id
        //service.updateDetailActionTotalFee=function(k,fee){
        //    landdetailMap[k].all_cost=landdetailMap[k].all_cost*1+fee*1;
        //    console.log("the new action total fee is : "+landdetailMap[k].all_cost);
        //}
        service.getForumDetailById=function(subjectId){
            return forumdetailMap[subjectId];
        }
        //// action is the action details reference the land detail post request result
        //service.updateForumDetailMap=function(landId,action){
        //    forumdetailMap[landId].data.push(action);
        //}

        return service;
    })

    .factory('forumUtilsService', function(){
        var services={};
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
    })

    /**
     * 获取当前地理位置
     */
    .factory('getCurrentPositionService', ["$q", "$http", function($q, $http, $response){
        var services={};
        var ak = "EViGSINjDErDcLXjSEjireKwGCdnoGSp";//baidu map ak key

        services.getCurrentPositionRequests = function(){
            var deferred = $q.defer();
            var promise = deferred.promise;
            var location = "";
            var geocodingUrl = "";
            if(device.platform == "Android"){
                baidu_location.getCurrentPosition(function(result){

                    var latitude = result.substring((result.indexOf("latitude : ")+"latitude : ".length),result.indexOf("lontitude"));
                    var lontitude = result.substring((result.indexOf("lontitude : ")+"lontitude : ".length),result.indexOf("radius"));
                    location = latitude+","+lontitude;
                    geocodingUrl = "http://api.map.baidu.com/geocoder/v2/?"+
                        "ak="+ak+"&location="+location+"&output=json&pois=0";

                    $http.get(geocodingUrl)
                        .success(function(response) {
                            deferred.resolve(response);
                        })
                        .error(function(error) {
                            deferred.reject(error);
                        });
                }, function(error){
                    console.log('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
                    deferred.reject(error);
                });
            }else if(device.platform == "iOS"){
                navigator.geolocation.getCurrentPosition(function(position){
                    //console.log('Latitude: '          + position.coords.latitude          + '\n' +
                    //    'Longitude: '         + position.coords.longitude         + '\n' +
                    //    'Altitude: '          + position.coords.altitude          + '\n' +
                    //    'Accuracy: '          + position.coords.accuracy          + '\n' +
                    //    'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                    //    'Heading: '           + position.coords.heading           + '\n' +
                    //    'Speed: '             + position.coords.speed             + '\n' +
                    //    'Timestamp: '         + position.timestamp                + '\n');

                    location = position.coords.latitude+","+position.coords.longitude;
                    geocodingUrl = "http://api.map.baidu.com/geocoder/v2/?"+
                        "ak="+ak+"&location="+location+"&output=json&pois=0";

                    $http.get(geocodingUrl)
                        .success(function(response) {
                            deferred.resolve(response);
                        })
                        .error(function(error) {
                            deferred.reject(error);
                        });
                }, function(error){
                    console.log('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
                    deferred.reject(error);
                });
            }
            return promise;
        }
        return services;
    }])

    /**
     * 获取天气信息
     */
    .factory('getWeatherService', ["$q", "$http", function($q, $http, $response){
        var services={};
        var ak = "EViGSINjDErDcLXjSEjireKwGCdnoGSp";//baidu map ak key

        services.getCityWeather = function (city) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            //http://api.map.baidu.com/telematics/v3/weather?location=昌吉回族自治州&output=json&ak=EViGSINjDErDcLXjSEjireKwGCdnoGSp
            var cityWeatherUrl = "http://api.map.baidu.com/telematics/v3/weather?"+"location="+city+"&output=json"+"&ak="+ak;

            $http.get(cityWeatherUrl)
                .success(function(result) {
                    deferred.resolve(result);
                })
                .error(function(error) {
                    deferred.reject(error);
                });
            return promise;
        }

        return services;
    }])
