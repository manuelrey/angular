// Code goes here

angular.module('myApp', ['ui.bootstrap']);

function TestCtrl($rootScope, $scope, $dialog, $http){
  $scope.test = function(){
   // $dialog.dialog({}).open('modalContent.html');
    
    $http.get('angular.json')
        .success(function(data) {
           $dialog.dialog({}).open('modal.html');
           $rootScope.items=data;
           console.log(data);
            //alert(JSON.stringify(data));
        });
    
    }

  };
  

