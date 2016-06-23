/**
 * Created by Alvin on 2/18/2016.
 */
  //  angular.module('todoList',[])
var app = angular.module('todoList',[])
        .controller('TaskCtrl',function($scope){
            $scope.task="";
            $scope.tasks=[];
            $scope.add=function(){
                $scope.tasks.push($scope.task);
            };
        })
        .controller('dataBand',function($scope){
            $scope.msg="Nicai Name";
        })
    .controller('ExampleController', ['$scope', function($scope) {
        $scope.counter = 0;
        $scope.change = function() {
            $scope.counter++;
        };
    }]);

angular.module('controllerAsExample', [])
    .controller('SettingsController1', SettingsController1);

function SettingsController1() {
    this.name = "John Smith";
    this.contacts = [
        {type: 'phone', value: '408 555 1212'},
        {type: 'email', value: 'john.smith@example.org'} ];
}

SettingsController1.prototype.greet = function() {
    alert(this.name);
};

SettingsController1.prototype.addContact = function() {
    this.contacts.push({type: 'email', value: 'yourname@example.org'});
};

SettingsController1.prototype.removeContact = function(contactToRemove) {
    var index = this.contacts.indexOf(contactToRemove);
    this.contacts.splice(index, 1);
};

SettingsController1.prototype.clearContact = function(contact) {
    contact.type = 'phone';
    contact.value = '';
};

app.directive('mytab',function(){
    return {
         restrict:'E',
         template:'<div>My first tab</div>'
    }
})

var moduleTianGuan = ons.bootstrap('appTianGuan', []);
moduleTianGuan.controller('itemsDataContrl', function($scope) {
       $scope.titems=[{tianName:'棉花100亩',latelyOperation:'播种 2/14'},{tianName:'葡萄100亩',latelyOperation:'播种 2/14'},{tianName:'香蕉100亩',latelyOperation:'播种 2/14'}];
        $scope.goDetails= function(item){
            alert(item.tianName + 'hhdsh');
        }

});
//var module= ons.bootstrap('appTianGuan', [])
// var app = ons.bootstrap('appTianGuan', [])
//var app = angular.module('appTianGuan',[])
//app.controller('itemsDataContrl',function($scope){
//    $scope.items=[{tianName:'棉花100亩',latelyOperation:'播种 2/14'},{tianName:'葡萄100亩',latelyOperation:'播种 2/14'},{tianName:'香蕉100亩',latelyOperation:'播种 2/14'}];
//    $scope.goDetails= function(item){
//        alert(item.tianName);
//    }
//})

    //   var module = ons.bootstrap('appTianGuan', []);
    //   module.controller('itemsDataContrl', function($scope) {
    //       ons.ready(function(){
    //           $scope.items=[{tianName:'棉花100亩',latelyOperation:'播种 2/14'},{tianName:'葡萄100亩',latelyOperation:'播种 2/14'},{tianName:'香蕉100亩',latelyOperation:'播种 2/14'}];
    //       });

    //  });
