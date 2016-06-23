
/**
 * Created by Alvin on 3/3/2016.
 */
angular.moudle('routerApp',['uirouter'])
.controller('mainCtrl',function(){

})
    .controller('NotificationController', function ($scope) {
        $scope.openDialog = function () {

            ons.createDialog('material.html').then(function (alertDialog) {
                console.log(alertDialog);
                alertDialog.show();
            });


        }
    })