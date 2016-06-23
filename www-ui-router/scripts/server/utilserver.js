/*
 * Created by Alvin on 3/12/2016.
 */



var uirouterhistory=new Array();
 /*
 *
 * this function use to change the json object to form data like ajax request
 * */
  var tranjsontoparam = function(obj) {
        var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

        for(name in obj) {
            value = obj[name];

            if(value instanceof Array) {
                for(i=0; i<value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if(value instanceof Object) {
                for(subName in value) {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if(value !== undefined && value !== null)
                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }

        return query.length ? query.substr(0, query.length - 1) : query;
    };
var getVersionCode=function(type){
    if('IOS' == type){
        return "测试1.1.02";
    }else {
        return "101000";
    }
}

var getPictureDoman=function(){


};
var getUrlByKey=function(urlkey){



    var urls={
        //"sendMessage":"http://106.ihuyi.cn/webservice/sms.php?method=Submit",
        "checkNewVersion":"/?action=AppVer&cmd=getLastVer",
        "login":"/?action=User&cmd=login",
        "resetPwdLoginURL":"/?action=User&cmd=resetPassword",
        "getUserTypeInfo":"/?action=User&cmd=getUserType",
        "landlist":"/?action=CroplandMgr&cmd=init",
        "address":"/?action=ZoneInfo&cmd=getZoneInfoByParentId",
        "dubblemarkUrl":"/?action=AdAlert&cmd=getAlertReadStatus",
        "proOrderList":"/?action=Order&cmd=getListForRealTime",
        "proOrderDetail":"/?action=Order&cmd=getOrderDetail",
        "proMyOrderList":"/?action=Order&cmd=getMyOrderList",
        "proMyOrderDetail":"/?action=Order&cmd=getMyOrderDetail",
        "proJoinOrder":"/?action=Order&cmd=saveOrder",
        "addNewLand":"/?action=CroplandMgr&cmd=saveCropLand",
        "farmAlertInfo":"/?action=AdAlert&cmd=getAlert",
        "editLand":"/?action=CroplandMgr&cmd=updateCorpLand",
        "deleteLand":"/?action=CroplandMgr&cmd=deleteCorpLand",
        "getCorpLandInfor":"/?action=CroplandMgr&cmd=getCorpLandInfor",
        "farmLandDetails":"/?action=CroplandMgr&cmd=getPlantDaily",
        "firstLevelCrops":"/?action=CroplandMgr&cmd=getProductTypeForLvl1",
        "cropsInfo":"/?action=CroplandMgr&cmd=getAgriInfo",
        "sendLevelCrops":"/?action=CroplandMgr&cmd=getProductTypeForLvl2",
        "newLandAction":"/?action=CroplandMgr&cmd=saveNewOperation",
        "actionDetails":"/?action=CroplandMgr&cmd=getOptionDetail",
        "editLandAction":"/?action=CroplandMgr&cmd=updateOperation",
        "deleteLandAction":"/?action=CroplandMgr&cmd=deleteOption",
        "allForumList":"/?action=Forum&cmd=getAllForumInfo",
        "essenceForumList":"/?action=Forum&cmd=getEssenceForum",
        "myForumList":"/?action=Forum&cmd=getForumWithMe",
        "forumDetail":"/?action=Forum&cmd=getForumDetail",
        "searchForum":"/?action=Forum&cmd=search",
        "unreadInfo":"/?action=Forum&cmd=getMyUnReadInfo",
        "replyChartDetail":"/?action=Forum&cmd=getRealtimeQA",
        "forumEditorAccordID":"/?action=Forum&cmd=getForumBySubjectId",
        "updateForum":"/?action=Forum&cmd=updateSubjectInfor",
        "sendReplyForum":"/?action=Forum&cmd=saveReplySubject",
        "deletePicForum":"/?action=File&cmd=delete",
        "checkMobileUrl":"/?action=User&cmd=checkMobileNo",
        "getForumById":"/?action=Forum&cmd=getReplyInfoById",
        "addNewForumUrl":"/?action=Forum&cmd=saveNewSubject",
        "signUpUrl":"/?action=User&cmd=register",
        "personalAgrUrl":"/?action=User&cmd=getPersonalInfo",
        "personalCooperationUrl":"/?action=User&cmd=getPersonalInfo",
        "personalSupplierUrl":"/?action=User&cmd=getPersonalInfo",
        "getPersonalInfoUrl":"/?action=User&cmd=getPersonalInfo",
        "resetPasswordUrl":"/?action=User&cmd=resetPassword",
        "changePasswordUrl":"/?action=User&cmd=changePassword",
        "logoutUrl":"/?action=User&cmd=logout",
        "uploadfile":"/?action=File&cmd=doFile",
        "userPics":"/?action=File&cmd=getFileById",
        "getAdInfo":"/?action=AdAlert&cmd=getAd",
        "getAllCategoryUrl":"/?action=Kbs&cmd=getAllCategory",
        "getPestListUrl":"/?action=Kbs&cmd=getPestList",
        "getAllPlantingUrl":"/?action=Kbs&cmd=getAllTech",
        "getPlantingListUrl":"/?action=Kbs&cmd=getKnowList",
        "getPlantingDetailUrl":"/?action=Kbs&cmd=getKnowDetail",
        "getPestDetailUrl":"/?action=Kbs&cmd=getPestDetail",
        "changepersonalfarmUrl":"/?action=User&cmd=changePerDetail",
        "getPersonalFarmDetailUrl":"/?action=User&cmd=getPerDetail",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",



        "userZoneInfo":"/?action=User&cmd=getUserZoneInfo"
    };

    return (doman+eval('urls.'+urlkey));
};

var getHeaders=function(key){
    var headers={

    };

    if(headers.key == null || ""==headers.key || headers.key == undefined){
        return {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
    }

};

var createCode=function ()
{
    code = "";
    var codeLength = 4;//验证码的长度
    var selectChar = new Array(0,1,2,3,4,5,6,7,8,9);//,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//所有候选组成验证码的字符，当然也可以用中文的

    for(var i=0;i<codeLength;i++)
    {
        var charIndex = Math.floor(Math.random()*10);
        code +=selectChar[charIndex];

    }
    return code;
};

var toDecimal=function(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return;
    }
    f = Math.round(x*100)/100;
    return f;
}

var shareWeChart = function(args) {

    /******************检查微信是否安装***********/

    Wechat.isInstalled(function (installed) {
        WEIXININSTALL=installed;
    });

    /***************微信登录**************/
        //var scope = "snsapi_userinfo";
    Wechat.auth("snsapi_userinfo", function (response) {
        // you may use response.code to get the access token.
        alert(JSON.stringify(response));
    }, function (reason) {
        alert("Failed: " + reason);
    });

    Wechat.share(
    //    {
    //    message: {
    //        title: "分享",
    //        description: "描述",
    //        mediaTagName: "分享",
    //        thumb: "分享的时候的图片链接",
    //        media: {
    //            type: Wechat.Type.WEBPAGE, //类型是一个webpage，就是一个网页？
    //            webpageUrl: "www.baidu.com"
    //        }
    //    },
    //    scene: Wechat.Scene.TIMELINE   // 分享到朋友圈
    //
    //}
        args, function () {
        alert("分享成功");
    }, function (reason) {
        alert("分享失败"+reason);
    });



}

var shareToQQ=function(message, subject, img, url) {
    QQ.setOptions({
        appId: '1105397788',
        appName: '劳道',
        appKey: 'TxukPeHRy7vBCTDk'
    });

    QQ.share(
        message,//'这是QQ分享的内容',
        subject,//'标题',
        img,//'http://img3.cache.netease.com/photo/0005/2013-03-07/8PBKS8G400BV0005.jpg',
        url,//'https://github.com/floatinghotpot/cordova-plugin-qq',
        function (ok) {
            alert('share: ' + (ok ? 'okay' : 'cancelled'));
        }, function (err) {
            alert('share fail, err:' + err);
        });
}
var nativeBigImgView = function (img,imgs) {
    //Use native method to show big img s
    var urls = [];
    for(var i=0;i<imgs.length;i++){
        urls.push({"pic_path":imgs[i].max_pic_path,"pic_title":"pic-"+i});
    }
    var initIndex = 0;
    if (imgs) {
        initIndex = imgs.indexOf(img);
    }
    PhotoViewer.show(urls, initIndex);
    //Use native method to show big img e
}


//var  myKeyup = function(e){
//    var keycode = window.event?e.keyCode:e.which;
//    if(keycode==13){
//        $scope.myClass = 'green';
//        $scope.myClick();
//    }





