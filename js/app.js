var myApp = angular.module("myApp",['ngRoute']);

myApp.run(function(){
	console.info("RUN BLOCK EXECUTING");
});

myApp.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){
	console.info("CONFIG BLOCK EXECUTING");

	//$locationProvider.html5Mode(true);

	$routeProvider
		.when('/home', {
            templateUrl: "templates/home.html",
            controller: "homeController",
            data: {
            	firstName: "Abhishek",
            	lastName : "Nag"
            }
        })
        .when('/anchor', {
            templateUrl: "templates/anchor.html",
            controller: "anchorController",
            data: {
                name: "Abhishek"
            }
        })
        .when('/event', {
        	templateUrl: "templates/events.html",
        	controller: "eventController"
        })
        .when('/test', {
        	templateUrl: "templates/test.html"
        })
        .when('/form',{
        	templateUrl: "templates/forms.html",
        	controller: "formController"
        })
		.otherwise({
			redirectTo: "/home"
		})
}]);

function test(){
    alert('1'); alert('2');
    var respo = getData();
    alert(respo); alert('4');

    function respo(){
        return '3';
    }
}