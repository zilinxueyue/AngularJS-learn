/**
 * Created by Alvin on 3/1/2016.
 */
angular.module('forumModule', ['onsen','forumserver'])

    .controller('forumListContrl',['$scope','$state','getForumListService','getForumPublicInfoService','getUserInfoService','$httpParamSerializerJQLike',
        function($scope,$state,getForumListService,getForumPublicInfoService,getUserInfoService,$httpParamSerializerJQLike) {

            if (getUserInfoService.getIden_type_code()=="undefined" ||getUserInfoService.getIden_type_code()=="" || getUserInfoService.getIden_type_code()== null) {
                /***
                 * 访客功能
                 */
                getUserInfoService.setIden_type_code("A");



            }


                console.log($scope.essence_active);
                console.log($scope.my_active);
                console.log($scope.all_active);
                $scope.iden_type_code = getUserInfoService.getIden_type_code();
                if (angular.equals('active', $scope.essence_active)) {
                    //getEssenceForumList();
                    // alert("f this is essence forum list 0");

                    getForumListService.getEssenceForumListRequests(null).then(function (result) {
                        $scope.forumlist = result;
                        //$scope.forumlist =[{"subject_Id":"1","subject_title":"巨峰葡萄成长的不同时期应打那些农药？应注意些甚么问题？","subject_content":"眼下，露地巨峰葡萄已经进入了果实膨大的关键时期再有不到一个月的时间就该收了\r\n眼下，露地巨峰葡萄已经进入了果实膨大的关键时期再有不到一个月的时间就该收了","pic_Path":"b","pic_Name":"a2","reply_Num":"5","send_Time":"2016-03-06 12:14:44.0"},{"subject_Id":"2","subject_Title":"庄稼遭了蝗虫，该怎么办？","subject_Content":"狗日的蝗虫来吃粮食了\r\nhow to do","pic_Path":"","pic_Name":"","reply_Num":"10","send_Time":"2016-03-08 14:51:32.0"}]
                        //$scope.iden_type_code = getUserInfoService.getIden_type_code();
                        console.log("iden_type_code" + iden_type_code);
                    }, function (error) {
                        //$scope.items = "error!";
                        //alert('get list error');
                        $scope.forumlist = [];
                        // $scope.forumlist =[{"subject_id":"1","subject_title":"巨峰葡萄成长的不同时期应打那些农药？应注意些甚么问题？","subject_content":"眼下，露地巨峰葡萄已经进入了果实膨大的关键时期再有不到一个月的时间就该收了\r\n眼下，露地巨峰葡萄已经进入了果实膨大的关键时期再有不到一个月的时间就该收了","pic_Path":"b","pic_Name":"a2","reply_Num":"5","send_Time":"2016-03-06 12:14:44.0"},{"subject_Id":"2","subject_Title":"庄稼遭了蝗虫，该怎么办？","subject_Content":"狗日的蝗虫来吃粮食了\r\nhow to do","pic_Path":"","pic_Name":"","reply_Num":"10","send_Time":"2016-03-08 14:51:32.0"}]
                    }, function (progress) {

                    });
                } else if (angular.equals('active', $scope.my_active)) {
                    console.log("my active");
                    // alert("f this is my forum list 0");
                    var postData = {
                        app_user_id: getUserInfoService.getApp_user_id()
                    };
                    getForumListService.getMyForumListRequests($httpParamSerializerJQLike(postData)).then(function (result) {
                        //    getForumListService.getMyForumListRequests(postData).then(function(result){
                        console.log(" getForumListService result" + result);
                        $scope.forumlist = result;
                        //$scope.forumlist =[{"subject_Id":"1","subject_title":"巨峰葡萄成长的不同时期应打那些农药？应注意些甚么问题？","subject_content":"眼下，露地巨峰葡萄已经进入了果实膨大的关键时期再有不到一个月的时间就该收了\r\n眼下，露地巨峰葡萄已经进入了果实膨大的关键时期再有不到一个月的时间就该收了","pic_Path":"b","pic_Name":"a2","reply_Num":"5","send_Time":"2016-03-06 12:14:44.0"},{"subject_Id":"2","subject_Title":"庄稼遭了蝗虫，该怎么办？","subject_Content":"狗日的蝗虫来吃粮食了\r\nhow to do","pic_Path":"","pic_Name":"","reply_Num":"10","send_Time":"2016-03-08 14:51:32.0"}]
                        //$scope.iden_type_code = getUserInfoService.getIden_type_code();
                        //console.log("iden_type_code"+iden_type_code);
                    }, function (error) {
                        //$scope.items = "error!";
                        //alert('get list error');
                        $scope.forumlist = [{
                            "subject_Id": "1",
                            "subject_title": "巨峰葡萄成长的不同时期应打那些农药？应注意些甚么问题？",
                            "subject_content": "眼下，露地巨峰葡萄已经进入了果实膨大的关键时期再有不到一个月的时间就该收了\r\n眼下，露地巨峰葡萄已经进入了果实膨大的关键时期再有不到一个月的时间就该收了",
                            "pic_Path": "b",
                            "pic_Name": "a2",
                            "reply_Num": "5",
                            "send_Time": "2016-03-06 12:14:44.0"
                        }, {
                            "subject_Id": "2",
                            "subject_Title": "庄稼遭了蝗虫，该怎么办？",
                            "subject_Content": "狗日的蝗虫来吃粮食了\r\nhow to do",
                            "pic_Path": "",
                            "pic_Name": "",
                            "reply_Num": "10",
                            "send_Time": "2016-03-08 14:51:32.0"
                        }]
                    }, function (progress) {

                    });
                    //getMyForumList();
                } else {
                    $scope.all_active = 'active';//set all topic as default selected button
                    getForumListService.getAllForumListRequests(null).then(function (result) {
                        $scope.forumlist = result;
                        //$scope.iden_type_code = getUserInfoService.getIden_type_code();
                        //console.log("iden_type_code"+iden_type_code);
                    }, function (error) {
                        //$scope.items = "error!";
                        //alert('get list error');
                        $scope.forumlist = [{
                            "subject_id": "1",
                            "subject_title": "巨峰葡萄成长的不同时期应打那些农药？应注意些甚么问题？",
                            "subject_content": "眼下，露地巨峰葡萄已经进入了果实膨大的关键时期再有不到一个月的时间就该收了\r\n眼下，露地巨峰葡萄已经进入了果实膨大的关键时期再有不到一个月的时间就该收了",
                            "pic_Path": "b",
                            "pic_Name": "a2",
                            "reply_Num": "5",
                            "send_Time": "2016-03-06 12:14:44.0"
                        }, {
                            "subject_Id": "2",
                            "subject_Title": "庄稼遭了蝗虫，该怎么办？",
                            "subject_Content": "狗日的蝗虫来吃粮食了\r\nhow to do",
                            "pic_Path": "",
                            "pic_Name": "",
                            "reply_Num": "10",
                            "send_Time": "2016-03-08 14:51:32.0"
                        }]
                    }, function (progress) {

                    });
                }
                //all_active essence_active my_active
                $scope.getAllForumList = function () {
                    //alert("this is all forum list 1");
                    getForumListService.getAllForumListRequests(null).then(function (result) {
                        $scope.forumlist = result;
                        //$scope.iden_type_code = getUserInfoService.getIden_type_code();
                        //alert("iden_type_code"+iden_type_code);
                    }, function (error) {
                        //$scope.items = "error!";
                        //alert('get list error');
                        $scope.forumlist = [{
                            "subject_Id": "1",
                            "subject_title": "all巨峰葡萄成长的不同时期应打那些农药？应注意些甚么问题？",
                            "subject_content": "眼下，露地巨峰葡萄已经进入了果实膨大的关键时期再有不到一个月的时间就该收了\r\n眼下，露地巨峰葡萄已经进入了果实膨大的关键时期再有不到一个月的时间就该收了",
                            "pic_Path": "b",
                            "pic_Name": "a2",
                            "reply_Num": "5",
                            "send_Time": "2016-03-06 12:14:44.0"
                        }, {
                            "subject_Id": "2",
                            "subject_Title": "庄稼遭了蝗虫，该怎么办？",
                            "subject_Content": "狗日的蝗虫来吃粮食了\r\nhow to do",
                            "pic_Path": "",
                            "pic_Name": "",
                            "reply_Num": "10",
                            "send_Time": "2016-03-08 14:51:32.0"
                        }]
                    }, function (progress) {

                    });
                };
                $scope.getEssenceForumList = function () {
                    //alert("this is essence forum list 1");
                    getForumListService.getEssenceForumListRequests(null).then(function (result) {
                        $scope.forumlist = result;
                        //$scope.iden_type_code = getUserInfoService.getIden_type_code();
                        //console.log("iden_type_code"+iden_type_code);
                    }, function (error) {
                        //$scope.items = "error!";
                        //alert('get list error');
                        $scope.forumlist = [];
                        //$scope.forumlist =[{"subject_id":"1","subject_title":"essence巨峰葡萄成长的不同时期应打那些农药？应注意些甚么问题？","subject_content":"眼下，露地巨峰葡萄已经进入了果实膨大的关键时期再有不到一个月的时间就该收了\r\n眼下，露地巨峰葡萄已经进入了果实膨大的关键时期再有不到一个月的时间就该收了","pic_Path":"b","pic_Name":"a2","reply_Num":"5","send_Time":"2016-03-06 12:14:44.0"},{"subject_Id":"2","subject_Title":"庄稼遭了蝗虫，该怎么办？","subject_Content":"狗日的蝗虫来吃粮食了\r\nhow to do","pic_Path":"","pic_Name":"","reply_Num":"10","send_Time":"2016-03-08 14:51:32.0"}]
                    }, function (progress) {

                    });
                };

                $scope.getMyForumList = function () {

                    if (getUserInfoService.getApp_user_id()=="undefined" ||getUserInfoService.getApp_user_id()=="" || getUserInfoService.getApp_user_id()== null) {
                        /***
                         * 访客功能
                         */
                        $state.go("loginhome");
                    }


                    console.log("this is my forum list 1111");
                    //var user_id = "000000000000000000000018";
                    var postData = {app_user_id: getUserInfoService.getApp_user_id()};
                    console.log(" My List : getUserInfoService.getApp_user_id()" + getUserInfoService.getApp_user_id());
                    getForumListService.getMyForumListRequests($httpParamSerializerJQLike(postData)).then(function (result) {
                        // getForumListService.getMyForumListRequests(postData).then(function(result){
                        console.log("this is my forum list 1 result: " + result);
                        $scope.forumlist = result;
                        //$scope.iden_type_code = getUserInfoService.getIden_type_code();
                        //console.log("iden_type_code"+iden_type_code);
                    }, function (error) {
                        //$scope.items = "error!";
                        //alert('get list error');
                        //$scope.forumlist =[{"subject_id":"1","subject_title":"my巨峰葡萄成长的不同时期应打那些农药？应注意些甚么问题？","subject_content":"眼下，露地巨峰葡萄已经进入了果实膨大的关键时期再有不到一个月的时间就该收了\r\n眼下，露地巨峰葡萄已经进入了果实膨大的关键时期再有不到一个月的时间就该收了","pic_Path":"b","pic_Name":"a2","reply_Num":"5","send_Time":"2016-03-06 12:14:44.0"},{"subject_Id":"2","subject_Title":"庄稼遭了蝗虫，该怎么办？","subject_Content":"狗日的蝗虫来吃粮食了\r\nhow to do","pic_Path":"","pic_Name":"","reply_Num":"10","send_Time":"2016-03-08 14:51:32.0"}]
                        $scope.forumlist = []
                    }, function (progress) {

                    });
                };

                /**
                 * 提问板块  list中页面
                 // */
                //$scope.doQuestions = function(){
                //    //$scope.app_user_id = getUserInfoService.getApp_user_id();
                //   // console.log("getUserInfoService.getApp_user_id"+getUserInfoService.getApp_user_id());
                //    //alert("doQuestions user id"+ getUserInfoService.getApp_user_id());
                //    //alert("will go to forum details page");
                //    $state.go("forumhome.add");
                //}


        }])




    .controller('forumDetailsContrl',['$scope','$state','$stateParams','getForumDetailService','getUserInfoService','$httpParamSerializerJQLike',
        function($scope,$state,$stateParams,getForumDetailService,getUserInfoService,$httpParamSerializerJQLike) {
            //console.log($stateParams.forum_id);
            //alert($stateParams.forum_id);
            $scope.pogress_bar ="width:80%";
            console.log($scope.pogress_bar);
            var postData={subject_id:$stateParams.forum_id};
            $scope.login_app_user_id = getUserInfoService.getApp_user_id();
            console.log("login_app_user_id controller : "+getUserInfoService.getApp_user_id() );
            getForumDetailService.getForumDetailByIdRequests($httpParamSerializerJQLike(postData)).then(function(result){
                console.log(result);
                //$scope.subject_content=result.subject_con.subject_content;
                //$scope.subject_user_name= result.subject_con.app_user_name;
                //$scope.subject_send_time=result.subject_con.send_time;
                //$scope.reply_num=result.subject_con.reply_num;
                //$scope.subject_images=result.subject_con.subject_pic;
                //$scope.subject_user_pic=result.subject_con.user_pic;
                //$scope.subject_id=result.subject_con.subject_id;
                $scope.subject=result.subject_con;
                $scope.subject_relpys=result.reply_con;
            },function(error){


            },function(progress){

            });




            $scope.goToReplyOrEditPage = function() {

                //alert("goToReplyOrEditPage");
                //var postData={subject_content:$scope.subject_content,app_user_id:getUserInfoService.getApp_user_id(),imageCount:0};
                //alert(postData);
                //addNewForumService.addNewForumRequests(postData).then(function (result) {
                //    alert (postData);
                //    alert("and new forum success");
                //    $state.go("forumhome");
                //}, function (error) {
                //    alert("add new forum failed");
                //});
                $state.go("forumhome.detail.reply", null, {reload: true});
            }


        }])

    .controller('forumAddContrl',['$scope','$state','getUserDetailService','addNewForumService','getUserInfoService','uploadService',
                           function($scope,$state,getUserDetailService,addNewForumService,getUserInfoService,uploadService) {
            //subject_Title , subject_Content , imges[]
            if (getUserInfoService.getApp_user_id()=="undefined" ||getUserInfoService.getApp_user_id()=="" || getUserInfoService.getApp_user_id()== null) {

                $state.go("loginhome");
            }
            $scope.landadd_pic_paths=getUserInfoService.getlandadd_pic_path();


            $scope.idimgs=[];

            $scope.takePicture = function(type){
                alert("takePicture");
                alert("the take picture type is : "+type);
                if (!navigator.camera) {
                    // alert("Camera API not supported", "Error");
                    return;
                }
                var options =   {   quality: 50,allowEdit: true,
                    //                                    destinationType: Camera.DestinationType.DATA_URL,
                    destinationType : Camera.DestinationType.DATA_URL,
                    //                                    sourceType : Camera.PictureSourceType.CAMERA,
                    sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Album
                    encodingType: 0     // 0=JPG 1=PNG
                };

                navigator.camera.getPicture(
                    function(imgData) {
                        if(angular.equals("id",type)){
                            $scope.idimgs.push(imgData);
                        }else{
                            //alert("imgData error!");
                            //$scope.landimgs.push(imgData);
                        }

                    },
                    function() {
                        // alert('Error taking picture', 'Error');
                    },
                    options);
            }

            $scope.addNewForum = function() {

                //alert("addNewForum");
                var postData={
                     subject_content:$scope.subject_content,
                      app_user_id:getUserInfoService.getApp_user_id()
                };
                //alert(postData);
                addNewForumService.addNewForumRequests(postData).then(function (result){
                    //console.log("jion order result key is : "+result.insert_key_id);
                    var insert_key_id = result.insert_key_id;
                    if($scope.idimgs != null && $scope.idimgs != "" && $scope.idimgs != undefined && $scope.idimgs.length > 0){
                        var idfd = new FormData();
                        angular.forEach($scope.idimgs, function (data, index, array) {
                            idfd.append(index, data);
                        });
                        alert("for each");
                       // getUserInfoService.setlandadd_pic_path($scope.idimgs);
                        var strUrlParam="&app_user_id="+getUserInfoService.getApp_user_id()+"&file_type=B0&target_id="+insert_key_id;
                        alert("upload image success"+strUrlParam);
                        uploadService.uploadImags(strUrlParam, idfd)
                            .then(function (result) {
                                alert("upload image success");
                                //getUserInfoService.setlandadd_pic_path($scope.idimgs);
                                //$state.go("proorderhome");
                            }), function (error) {
                            alert('上传身份证失败');
                        };
                    }

                    $state.go("forumhome", null, {reload: true});
                }, function (error) {
                    alert("add new forum failed");
                });

                    if($scope.idimgs != null && $scope.idimgs != "" && $scope.idimgs != undefined && $scope.idimgs.length > 0){
                        var idfd = new FormData();
                        angular.forEach($scope.idimgs, function (data, index, array) {
                            idfd.append(index, data);
                        });
                        getUserInfoService.setCard_pic_path($scope.idimgs);
                        var strUrlParam="&app_user_id="+getUserInfoService.getApp_user_id()+"&file_type="+type+"&target_id="+getUserInfoService.getApp_user_id();
                        alert(strUrlParam);
                        uploadService.uploadImags(strUrlParam, idfd)
                            .then(function (result) {
                                //alert("upload image success");
                                getUserInfoService.setCard_pic_path($scope.idimgs);
                                //$state.go("proorderhome");
                            }), function (error) {
                            alert('上传身份证失败');
                        };
                    }





            }

            $scope.checkText = function () {
                if ($scope.subject_content.length > 200) {
                    //alert("text is too long");
                    $scope.subject_content = $scope.subject_content.substr(0, 200);
                }
            };


            //$scope.doQuestions = function(){
            //    //getForumPublicInfoService.setSelectedSubjectId(subjectId);
            //    //alert("doQuestions user id"+ getUserInfoService.getApp_user_id());
            //    //alert("will go to forum details page");
            //    $state.go("forumhome.add");
            //}




        }])

    /**
     *    精华问答
     */

    .controller('forumEssenceListContrl',['$scope','$state','getForumListService','getForumPublicInfoService','getUserInfoService',
        function($scope,$state,getForumListService,getForumPublicInfoService,getUserInfoService) {

            getForumListService.getForumListRequests().then(function(result){


                // console.log(result[1].app_user_id);
                // alert(result[0].app_user_id);
                //alert("result"+result);
                $scope.formlist = result;
                $scope.iden_type_code = getUserInfoService.getIden_type_code();
                $scope.iden_type_id = getUserInfoService.getIden_type_id();
                //alert("ok  精华问答");
            },function(error){
                //$scope.items = "error!";
                //alert('get list error');
                $scope.formlist =[{"subject_Id":"1","subject_Title":"巨峰葡萄成长的不同时期应打那些农药？应注意些甚么问题？","subject_Content":"眼下，露地巨峰葡萄已经进入了果实膨大的关键时期再有不到一个月的时间就该收了\r\n眼下，露地巨峰葡萄已经进入了果实膨大的关键时期再有不到一个月的时间就该收了","pic_Path":"b","pic_Name":"a2","reply_Num":"5","send_Time":"2016-03-06 12:14:44.0"},{"subject_Id":"2","subject_Title":"庄稼遭了蝗虫，该怎么办？","subject_Content":"狗日的蝗虫来吃粮食了\r\nhow to do","pic_Path":"","pic_Name":"","reply_Num":"10","send_Time":"2016-03-08 14:51:32.0"}]
                //alert("error formlist");
            },function(progress){

            });

            /**
             * 精华问答 --> About Me
             */
            $scope.goToAboutMe = function(){
                //getForumPublicInfoService.setSelectedSubjectId();
                //alert("result"+result);
                //alert("精华问答 --> " +
                //    "About" +
                //    " Me page");
                $state.go("forumhome.aboutme");
            }

            /**
             * 精华问答 --> 所有帖子
             */
            $scope.goAllListPage = function(){
                //getForumPublicInfoService.setSelectedSubjectId();
                //alert("result"+result);
               // alert("精华问答 --> 所有帖子");
                $state.go("forumhome");
            }

            /**
             *  问答
             */

            $scope.doQuestions = function(){
                //getForumPublicInfoService.setSelectedSubjectId(subjectId);
                //alert("doQuestions user id"+ getUserInfoService.getApp_user_id());
                //alert("will go to forum details page");
                $state.go("forumhome.add");
            }




        }])

    /**
     *  About Me : forumAboutMeContrl
     */


    .controller('forumAboutMeContrl',['$scope','$state','getForumListService','getForumPublicInfoService','getUserInfoService',
        function($scope,$state,getForumListService,getForumPublicInfoService,getUserInfoService) {

            getForumListService.getForumListRequests().then(function(result){
                console.log(result[1].app_user_id);
                // alert(result[0].app_user_id);
                // alert("result"+result);
                $scope.formlist = result;
                $scope.iden_type_code = getUserInfoService.getIden_type_code();
                $scope.iden_type_id = getUserInfoService.getIden_type_id();
                //alert("ok  About me");
            },function(error){
                //$scope.items = "error!";
                //alert('get list error');
                $scope.formlist =[{"subject_Id":"1","subject_Title":"巨峰葡萄成长的不同时期应打那些农药？应注意些甚么问题？","subject_Content":"眼下，露地巨峰葡萄已经进入了果实膨大的关键时期再有不到一个月的时间就该收了\r\n眼下，露地巨峰葡萄已经进入了果实膨大的关键时期再有不到一个月的时间就该收了","pic_Path":"b","pic_Name":"a2","reply_Num":"5","send_Time":"2016-03-06 12:14:44.0"},{"subject_Id":"2","subject_Title":"庄稼遭了蝗虫，该怎么办？","subject_Content":"狗日的蝗虫来吃粮食了\r\nhow to do","pic_Path":"","pic_Name":"","reply_Num":"10","send_Time":"2016-03-08 14:51:32.0"}]
                alert("error formlist");
            },function(progress){

            });

            /**
             * About --> 精华问答
             */

            $scope.goToEssencePage = function(){
                //getForumPublicInfoService.setSelectedSubjectId();
                //alert("result"+result);
                //alert("About --> 精华问答");
                $state.go("forumhome.essence");
            }

            /**
             * About --> 所有帖子
             */
            $scope.goAllListPage = function(){
                //getForumPublicInfoService.setSelectedSubjectId();
                //alert("result"+result);
               // alert("About --> 所有帖子");
                $state.go("forumhome");
            }

            /**
             *   About --> 问答
             */

            $scope.doQuestions = function(){
                //getForumPublicInfoService.setSelectedSubjectId(subjectId);
                //alert("doQuestions user id"+ getUserInfoService.getApp_user_id());
                //alert("will go to forum details page");
                $state.go("forumhome.add");
            }

        }])



    /**
     *  About Me : forumAboutMeContrl
     */


    .controller('forumAboutMeContrl1',['$scope','$state','getForumListService','getForumPublicInfoService','getUserInfoService',
        function($scope,$state,getForumListService,getForumPublicInfoService,getUserInfoService) {

            getForumListService.getForumListRequests().then(function(result){


                console.log(result[1].app_user_id);
                // alert(result[0].app_user_id);
                // alert("result"+result);
                $scope.formlist = result;
                $scope.iden_type_code = getUserInfoService.getIden_type_code();
                $scope.iden_type_id = getUserInfoService.getIden_type_id();
               // alert("ok  About me");
            },function(error){
                //$scope.items = "error!";
                //alert('get list error');
                $scope.formlist =[{"subject_Id":"1","subject_Title":"巨峰葡萄成长的不同时期应打那些农药？应注意些甚么问题？","subject_Content":"眼下，露地巨峰葡萄已经进入了果实膨大的关键时期再有不到一个月的时间就该收了\r\n眼下，露地巨峰葡萄已经进入了果实膨大的关键时期再有不到一个月的时间就该收了","pic_Path":"b","pic_Name":"a2","reply_Num":"5","send_Time":"2016-03-06 12:14:44.0"},{"subject_Id":"2","subject_Title":"庄稼遭了蝗虫，该怎么办？","subject_Content":"狗日的蝗虫来吃粮食了\r\nhow to do","pic_Path":"","pic_Name":"","reply_Num":"10","send_Time":"2016-03-08 14:51:32.0"}]
                //alert("error formlist");
            },function(progress){

            });

            /**
             * About --> 精华问答
             */

            $scope.goToEssencePage = function(){
                //getForumPublicInfoService.setSelectedSubjectId();
                //alert("result"+result);
                //alert("About --> 精华问答");
                $state.go("forumhome.essence");
            }

            /**
             * About --> 所有帖子
             */
            $scope.goAllListPage = function(){
                //getForumPublicInfoService.setSelectedSubjectId();
                //alert("result"+result);
                //alert("About --> 所有帖子");
                $state.go("forumhome");
            }

            /**
             *   About --> 问答
             */

            $scope.doQuestions = function(){
                //getForumPublicInfoService.setSelectedSubjectId(subjectId);
                //alert("doQuestions user id"+ getUserInfoService.getApp_user_id());
                //alert("will go to forum details page");
                $state.go("forumhome.add", null, {reload: true});
            }

        }])

    //.controller('replyChartContrl',['$scope','$state','$stateParams','getReplyChartDetailService','getUserInfoService','$httpParamSerializerJQLike',
    //    function($scope,$state,$stateParams,getReplyChartDetailService,getUserInfoService,$httpParamSerializerJQLike) {
    //        //"/reply/:subject_user_id/:reply_user_id",
    //         console.log($stateParams.subject_id+" , subject user: "+$stateParams.subject_user_id+" , reply user: "+$stateParams.reply_user_id);
    //        //var postData={
    //        //    subject_user_id:$stateParams.subject_user_id,
    //        //    reply_user_id:$stateParams.reply_user_id,
    //        //    subject_id:$stateParams.subject_id
    //        //};
    //        //console.log(postData);
    //        //getReplyChartDetailService.getReplyChartDetailByIdRequests($httpParamSerializerJQLike(postData)).then(function(result){
    //        //    $scope.subject=result.subject_con;
    //        //    $scope.replys=result.reply_con;
    //        //
    //        //},function(error){
    //        //
    //        //});
    //
    //}])

    .controller('replyChartContrl',['$scope','$state','$parse','$stateParams','getForumDetailService','getUserInfoService','$httpParamSerializerJQLike','getReplyChartDetailService','sendReplyForumService',
        function($scope,$state,$parse,$stateParams,getForumDetailService,getUserInfoService,$httpParamSerializerJQLike,getReplyChartDetailService,sendReplyForumService) {
            //alert("replyChartContrl");
            //"/reply/:subject_user_id/:reply_user_id",
            if (getUserInfoService.getApp_user_id()=="undefined" ||getUserInfoService.getApp_user_id()=="" || getUserInfoService.getApp_user_id()== null) {
                /***
                 * 访客功能
                 */
                $state.go("loginhome");
            }

            console.log("replyChartContrlreply user ID  : "+getUserInfoService.getApp_user_id() +"subject_user_id : "+$stateParams.subject_user_id +"subject_id : "+$stateParams.subject_id);
            var reply_user_id = $stateParams.reply_user_id;

            if(reply_user_id==getUserInfoService.getApp_user_id()){
                reply_user_id = getUserInfoService.getApp_user_id()
            } else{
                reply_user_id = $stateParams.reply_user_id;
            }

            var login_user_id = getUserInfoService.getApp_user_id();
            var subject_user_id = $stateParams.subject_user_id;
            var replayShowCode = true;


            if(login_user_id == reply_user_id){
                replayShowCode = true;

            } else if (login_user_id!=reply_user_id){
                if(login_user_id==subject_user_id){
                    replayShowCode = true;
                }
                if(login_user_id!=subject_user_id){
                    replayShowCode = false;
                }






            } else{
                replayShowCode = false;
            }
            var postData={subject_id:$stateParams.subject_id, subject_user_id:$stateParams.subject_user_id, reply_user_id:reply_user_id};
            $scope.login_app_user_id = getUserInfoService.getApp_user_id();

            /**
             * 生成页面的日期
             */
            $scope.today = new Date();
            var reply_id = "";
            getReplyChartDetailService.getReplyChartDetailByIdRequests($httpParamSerializerJQLike(postData)).then(function(result){
                console.log(result);
                $scope.subject=result.subject_con;
                $scope.replies=result.reply_con;
                $scope.replayShowCode = replayShowCode;
                reply_id = result.reply_con[0].app_user_id;
            },function(error){
            },function(progress){

            });

            $scope.sendReplyMsg = function() {

                //alert("sendReplyMsg");
                console.log("subject_id:"+$scope.subject.subject_id);
                console.log("app_user_id:"+getUserInfoService.getApp_user_id());
                console.log("reply_content:"+$scope.reply_content_sub);
                //



                console.log("reply_id: "+ reply_id);

                //if(angular.equals("",result.reply_con.app_user_id) || result.reply_con.app_user_id == null || result.reply_con.app_user_id == undefined){
                //    reply_id="";
                //}



                var postData={app_user_id:getUserInfoService.getApp_user_id(),subject_id:$scope.subject.subject_id,reply_content:$scope.reply_content_sub,reply_user_id:reply_id};
                // ,imageCount:0
                //alert(postData);
                console.log ("sendReplyMsg()===>"+postData.subject_id+":"+postData.app_user_id+":"+postData.reply_content);
                sendReplyForumService.sendReplyForumRequests($httpParamSerializerJQLike(postData)).then(function (result) {
                    console.log ("sendReplyMsg postData"+postData);
                    //alert("sendReplyMsg success");
                    $state.go("forumhome.detail", null, {reload: true});
                }, function (error) {
                    console.log ("sendReplyMsg postData"+postData.subject_id);
                    //alert("api 接口需要调试");
                });
            }


                $scope.checkText = function () {
                    if ($scope.reply_content_sub.length > 200) {
                        //alert("text is too long");
                        $scope.reply_content_sub = $scope.reply_content_sub.substr(0, 200);
                    }
                };



        }])


    //.controller('forumEditContrl',['$scope','$state','getUserDetailService','getUserInfoService',
    //    function($scope,$state,getUserDetailService,getUserInfoService) {
    //        //subject_Title , subject_Content , imges[]
    //
    //       alert("this ia forum edit page");
    //        //$scope.takePicture = function(){
    //        //    if (!navigator.camera) {
    //        //        alert("Camera API not supported", "Error");
    //        //        return;
    //        //    }
    //        //    var options =   {   quality: 50,allowEdit: true,
    //        //        //                                    destinationType: Camera.DestinationType.DATA_URL,
    //        //        destinationType : Camera.DestinationType.DATA_URL,
    //        //        //                                    sourceType : Camera.PictureSourceType.CAMERA,
    //        //        sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Album
    //        //        encodingType: 0     // 0=JPG 1=PNG
    //        //    };
    //        //
    //        //    navigator.camera.getPicture(
    //        //        function(imgData) {
    //        //
    //        //            alert(imgData);//"data:image/jpeg;base64," +
    //        //
    //        //        },
    //        //        function() {
    //        //            alert('Error taking picture', 'Error');
    //        //        },
    //        //        options);
    //        //}
    //        //
    //        //
    //        //$scope.addNewForum = function() {
    //        //
    //        //    alert("addNewForum");
    //        //    var postData={subject_content:$scope.subject_content,app_user_id:getUserInfoService.getApp_user_id(),imageCount:0};
    //        //    alert(postData);
    //        //    addNewForumService.addNewForumRequests(postData).then(function (result) {
    //        //        alert (postData);
    //        //        alert("and new forum success");
    //        //        $state.go("forumhome");
    //        //    }, function (error) {
    //        //        alert("add new forum failed");
    //        //    });
    //        //
    //        //
    //        //
    //        //
    //        //
    //        //
    //        //}
    //        //
    //        ////$scope.doQuestions = function(){
    //        ////    //getForumPublicInfoService.setSelectedSubjectId(subjectId);
    //        ////    //alert("doQuestions user id"+ getUserInfoService.getApp_user_id());
    //        ////    //alert("will go to forum details page");
    //        ////    $state.go("forumhome.add");
    //        //}
    //
    //
    //
    //
    //    }


    .controller('forumEditContrl',['$scope','$state','$stateParams','getForumEditorAccordIDService','getUserInfoService','$httpParamSerializerJQLike','updateForumService',
        function($scope,$state,$stateParams,getForumEditorAccordIDService,getUserInfoService,$httpParamSerializerJQLike,updateForumService) {
            if (getUserInfoService.getApp_user_id()=="undefined" ||getUserInfoService.getApp_user_id()=="" || getUserInfoService.getApp_user_id()== null) {
                /***
                 * 访客功能
                 */
                $state.go("loginhome");
            }

            console.log($stateParams.subject_id);
            //alert($stateParams.forum_id);
            $scope.pogress_bar ="width:80%";
            var postData={subject_id:$stateParams.subject_id};
            $scope.login_app_user_id = getUserInfoService.getApp_user_id();
            console.log("login_app_user_id controller : "+getUserInfoService.getApp_user_id() );
            getForumEditorAccordIDService.getForumEditByIdRequests($httpParamSerializerJQLike(postData)).then(function(result){
                console.log("editsubject"+result.subject_content);
                //$scope.subject_content=result.subject_con.subject_content;
                //$scope.subject_user_name= result.subject_con.app_user_name;
                //$scope.subject_send_time=result.subject_con.send_time;
                //$scope.reply_num=result.subject_con.reply_num;
                //$scope.subject_images=result.subject_con.subject_pic;
                //$scope.subject_user_pic=result.subject_con.user_pic;
                //$scope.subject_id=result.subject_con.subject_id;
                $scope.editsubject=result;

            },function(error){


            },function(progress){

            });

            //updateForum
            $scope.updateForum = function() {

               // alert("Update Forum");
                //editsubject.subject_id
                var postData={subject_content:$scope.editsubject.subject_content,subject_id:$scope.editsubject.subject_id};
                console.log("$scope.editsubject.subject_content"+$scope.editsubject.subject_content);
                console.log("$scope.editsubject.subject_id"+$scope.editsubject.subject_id);
               // alert(postData);
                updateForumService.updateForumRequests(postData).then(function (result) {
                    console.log("Update code  : "+result);
                   // alert("update  success");
                     $state.go("forumhome.detail", null, {reload: true});

                }, function (error) {
                    alert("add new forum failed");
                });
            }
            $scope.checkText = function () {

                if ($scope.editsubject.subject_content.length > 200) {
                    //alert("text is too long");
                    $scope.editsubject.subject_content = $scope.editsubject.subject_content.substr(0, 200);
                }
            };



        }])

    /**
     * 访客功能
     */

    .controller('guestForumContrl',['$scope','$state','getUserInfoService',
        function($scope,$state,getUserInfoService){

            $scope.guestLogin= function(roleType){

                getUserInfoService.setIden_type_code(roleType);
                 //getUserInfoService.setAppMobileNo($scope.appMobileNo);
                if(angular.equals("A",getUserInfoService.getIden_type_code())){
                    $state.go("forumhome");


                }else if ("B",getUserInfoService.getIden_type_code()){
                    $state.go("personalagrhome");

                }else {
                    $state.go("personalagrhome");

                }

            }
        }])


//$scope.goToInfoPage = function(roleType){
//    //alert("signupIdentityContrl");
//    console.log("login roleType"+roleType);
//    // alert("Before  set the user info :  and the RoleType is : " + getUserRegDetailService.getRoleType() + "the user mobile no is : "+ getUserRegDetailService.getAppMobileNo()+" and the pwd is : " + getUserRegDetailService.getAppPwd() );
//    getUserRegDetailService.setRoleType(roleType);
//    // alert("getUserRegDetailService.getRoleType()"+getUserRegDetailService.getRoleType());
//    // alert("After set the user info :  and the RoleType is : " + getUserRegDetailService.getRoleType() + " the user mobile no is : "+ getUserRegDetailService.getAppMobileNo()+" and the pwd is : " + getUserRegDetailService.getAppPwd() );
//    // alert("getRoleType: "+getUserRegDetailService.getRoleType())
//    //alert("signup.html success");
//    //alert(roleType);
//    $state.go("signuphome.identity.signupinfo");
//}
//}])









