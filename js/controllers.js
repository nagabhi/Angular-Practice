var myApp = angular.module("myApp");

myApp.controller("homeController",['$scope','$log','$route',function($scope, $log, $route){
	console.log("inside homeController controller");

	$scope.slNum = "Commen 1";

	$scope.name = "abhishek";
	$scope.age = 100;
	$scope.alertName = function(){
		alert($scope.name);
	}

	$scope.arr = ["Abhishek","Golu","Prisha","Brishti"];
	$scope.otherArr = ["abhi","gaurav","pris"];
	$scope.obj = [{
		name: "Abhishek",
		age: 27,
	},{
		name: "gaurav",
		age: 22
	}];

	angular.forEach($scope.arr,function(value,key){
		console.log("Arr loop :",key, value);
	});

	var nameList = [];
	angular.forEach($scope.obj,function(value,key){
		//$log.info("Arr loop :",key, value);
		this.push(value.name);
	},nameList);
	console.log(nameList);

	$scope.a = angular.merge($scope.arr,$scope.otherArr);
	console.log($scope.a);
	console.info(angular.version);


	console.log("----------------");
	console.log("DATA FROM ROUTE",$route.current.data);
	console.log("DATA FROM ROUTE",$route.routes);

}]);

myApp.controller("formController",function($scope){
	console.info("inside form controller");
	$scope.userForm = {};
});

myApp.controller("anchorController",['$scope','$location','$anchorScroll',function($scope, $location, $anchorScroll){
	console.log("inside anchorController");

		$scope.scrollPage = function(toLocation){
		$location.hash(toLocation);
		$anchorScroll();
		$anchorScroll.yOffset = 50;
	}
}]);

myApp.controller("eventController", ['$scope',function($scope){

	console.log("inside eventController");
	$scope.list = [1, 2, 3 ,4];


}]);