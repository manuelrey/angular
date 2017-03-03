angular.module('appTasks', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('alta', {
                    url: '/alta',
                    templateUrl: 'views/alta.html',
                    controller: 'ctrlAlta'
                })
                .state('editar', {
                    url: '/editar/{id}',
                    templateUrl: 'views/editar.html',
                    controller: 'ctrlEditar'
                });

            $urlRouterProvider.otherwise('alta');
        })
    .factory('common', function(){
        var common ={}
        common.tasks =[{
            name: 'buy', 
            priority: '0'
        }, {
            name: 'sell', 
            priority: '1'
        }, {
            name: 'nothing',
            priority: '2'  
        }]

        common.task = {};
        
        common.delete = function(task){
            var indice = common.tasks.indexOf(task);
            common.tasks.splice(indice , 1);
        }

        return common;
    })
    .controller('ctrlAlta', function($scope, $state, common){
        $scope.task ={}
        //$scope.tasks = []; //array
        
        $scope.tasks = common.tasks;

        $scope.prioritys = ['Low', 'Normal', 'High']

        $scope.insert =function(){
            $scope.tasks.push({
                name: $scope.task.name, 
                priority: parseInt($scope.task.priority)
            })

        $scope.task.name = '';
        $scope.task.priority = '';

        }

        $scope.morePriority = function(task){
            task.priority +=1;
        }

        $scope.lessPriority = function(task){
            task.priority -=1;
        }

        $scope.delete = function(task){
            common.delete(task)
        }

        $scope.processObject = function(task){
            common.task = task;
            $state.go('editar');
        }
    })

    .controller('ctrlEditar', function($scope, $state, common){
        $scope.task = common.task;

        $scope.update = function(){
            var indice =common.tasks.indexOf(common.task);
            common.tasks[indice] = $scope.task;
            $state.go('alta');
        }

        $scope.delete = function(){
            common.delete($scope.task);
            $state.go('alta');
        }

    })