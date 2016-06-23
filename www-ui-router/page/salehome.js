/**
 * Created by Alvin on 6/21/2016.
 *
 *
 */
angular.module('salehomeModule',['ui.bootstrap'])
    .controller("salehomeContrl",['$scope','$modal',function($scope,$modal){
        $scope.showalert=function(){
                 console.log("asfd");

               };

        $scope.showpage = function(page){
           alert(page);
        };

        $scope.items = ['html5','jq','FE-演示平台','平台'];
        $scope.open = function(size){  //打开模态
            var modalInstance = $modal.open({
                templateUrl : 'page/common/myModelContent.html',  //指向上面创建的视图
                controller : 'ModalInstanceCtrl',// 初始化模态范围
                size : size, //大小配置
                resolve : {
                    items : function(){
                        return $scope.items;
                    }
                }
            })
            modalInstance.result.then(function(selectedItem){
                $scope.selected = selectedItem;

            },function(){
                console.log('Modal dismissed at: ' + new Date())
            })
        }

    }])
    .controller('ModalInstanceCtrl',function($scope,$modalInstance,items){ //依赖于modalInstance
    $scope.items = items;
    $scope.selected = {
        item : $scope.items[0]
    };
    $scope.ok = function(){
        $modalInstance.close($scope.selected.item); //关闭并返回当前选项
    };
    $scope.cancel = function(){
        $modalInstance.dismiss('cancel'); // 退出
    }
})
