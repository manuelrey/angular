var  app = 	angular.module('app', ['ui.router']);
	app.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('employees', {
				url: '/employees',
				templateUrl: 'pages/employees.html', 
				controller: 'ctrlEmployees' 
			})
			.state('clients', {
				url: '/clients', 
				templateUrl:'pages/clients.html',
				controller: 'ctrlClients'
			});
			$urlRouterProvider.otherwise('employees');
	});
	app.factory('common', function(){
		var common = {};
		common.test = {
			name:''
		};
		return common;	
	});
	app.controller('ctrlEmployees', function($scope, $state, $http, common){

		$scope.users = [];
		$http.get("http://jsonplaceholder.typicode.com/posts/").success(function(response){

			$scope.users = response;
			console.log(response);

			$scope.login = function(login){
				$scope.login = login;
				$scope.test = {};
				$scope.test = common.test;
			 	$scope.test.name = $scope.login;
				$state.go('clients');

			}

		})

	});
	app.controller('ctrlClients', function($scope, $state, common, $http){

		test = common.test;
		$scope.log = test.name;

		console.log(test.name);

		$scope.clients = [];
		$http.get("http://jsonplaceholder.typicode.com/posts/" + test.name).success(function(response){

		$scope.clients = response;
		console.log(response);

		})

		$scope.emp = {};

		$scope.emp = common.emp;

		console.log(JSON.stringify(common));
		console.log(common);
		
	});