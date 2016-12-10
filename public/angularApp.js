var app = angular.module("myApp", []);

app.controller('counter', function($scope, $http){	
	$scope.count = 0;
	
	$scope.counter = function(){
		$scope.count = $scope.count + 1;
	};
	
	$scope.load = function(){
		$http.get('/todos')
			.then(function(res){
				$scope.todos = res.data; 
			});
	};
	
	$scope.add = function(){
		var todo = $scope.new_todo;

		console.log('Todo: ' + todo);
				
		$http({
				url: '/todo', 
				method: "POST",
				data: "todo="+todo,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}).then(function(res){
				console.log('response = ' + JSON.stringify(res.data));
			});
			
	};
});