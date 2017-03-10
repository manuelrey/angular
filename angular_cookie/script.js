App = angular.module('App', ['ui.bootstrap', 'ngResource', 'ngCookies']);

App.controller('test', ['$scope', '$resource', '$http', '$cookieStore', function($scope, $resource, $http, $cookieStore){



	console.log('test');
	$scope.users = [];
	$http.get("http://jsonplaceholder.typicode.com/posts/").success(function(response){

		$scope.users = response;
		console.log(response);

	   $scope.totalItems = $scope.users.length;
       $scope.predicate = 'id';  
       $scope.reverse = true;  
       $scope.currentPage = 1; 

       $scope.login = function(login){

			$cookieStore.put('test', '1');
			console.log('test2');
		}

		var favoriteCookie = $cookieStore.get('test');

		console.log(favoriteCookie);
				
	})

	$scope.order = function (predicate) {  
	    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;  
	    $scope.predicate = predicate;  
	  };    
	 $scope.numPerPage = 5;  
	 $scope.paginate = function (value) {  
	   var begin, end, index;  
	   begin = ($scope.currentPage - 1) * $scope.numPerPage;  
	   end = begin + $scope.numPerPage;  
	   index = $scope.users.indexOf(value);  
	   return (begin <= index && index < end);  
	 }; 
	
}]);