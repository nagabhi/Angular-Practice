var myApp = angular.module("myApp");

myApp.directive("myElement", function(){

	return{
		restrict: "AE",
		transclude: true,
		compile: function(scope, element, attrs){
			console.log("inside compile function");
		},
		scope:{
			name: "@",
			age: "=",
			sayName: "&"
		},
		link: function(scope, element, attrs, ctrl, transclude){
			console.log("inside link function");
		},
		template: 	"<p>My custom directive :</p>"+
					"<p>Name : {{name}}</p>"+
					"<p ng-transclude>Age : {{age}}</p>"+
					"<p>Enter new age :<input type='text' ng-model='age'></p>"+
					"<input type='button' class='button btn' value='Alert name' ng-click='sayName()' >"
	}
});

myApp.directive("myDir", function(){
	return {
		restrict : "A",
		template: "<div>directive content</div>",
		transclude: true,
		link : function(scope, element, attrs, controller, transclude){
				transclude(scope.$new(),function(clone, scope){
					//scope.slNum = 1;
					element.append(clone);
				})

				transclude(scope.$new(),function(clone, scope){
					//scope.slNum = 2;
					element.append(clone);
				});

				transclude(scope.$new(),function(clone, scope){
					scope.slNum = "Child scope new value";
					element.append(clone);
				})
		}
	};
});

myApp.directive("myEvent", function(){
	return {
		restrict: 	"AE",
		transclude: true,
		scope: {
			events: "=",
			addEvents: "&"
		},
		controller: function($scope){
			$scope.addNew = function(){
				console.log("Adding new event");
				if (!$scope.events) $scope.events = [];
				$scope.events.push($scope.name);
				$scope.name = null;
			}

			$scope.removeAll = function(){
				$scope.events = [];
			}

		},
		link : function(scope, element, attrs, ctrl, transclude){
			transclude((clone) => (element.append(clone)));
		},
		template: 	"<div>"+
						"<input type='text' placeholder='Enter event name' ng-model='name'>&nbsp;&nbsp;&nbsp;"+
						"<input type='button' value='Add event' ng-click='addNew()'>"+
						"<input type='button' value='Remove All' ng-click='removeAll()'<br>"+
					"</div>"

	}
});