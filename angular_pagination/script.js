window.App = angular.module('App', ['ui.bootstrap', 'ngResource']);

App.controller('test', ['$scope', '$resource', '$http', function($scope, $resource, $http){

	console.log('test');
	$scope.users = [];
	$http.get("http://jsonplaceholder.typicode.com/posts/").success(function(response){

		$scope.users = response;
		console.log(response);

	   $scope.totalItems = $scope.users.length;
       $scope.predicate = 'id';  
       $scope.reverse = true;  
       $scope.currentPage = 1; 

				
	})
	$scope.order = function (predicate) {  
	    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;  
	    $scope.predicate = predicate;  
	  };    
	 $scope.numPerPage = 10;  
	 $scope.paginate = function (value) {  
	   var begin, end, index;  
	   begin = ($scope.currentPage - 1) * $scope.numPerPage;  
	   end = begin + $scope.numPerPage;  
	   index = $scope.users.indexOf(value);  
	   return (begin <= index && index < end);  
	 }; 


	
}]);