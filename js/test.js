

console.log("====================================");
/*function test(){
    console.log('1'); console.log('2');
    var respo = getRespo();
    console.log(respo); console.log('4');
};

function getData(){
    return '3';
}

function getRespo(){
    $.ajax({url: "app.js", success: function(result){
        return '3';
    }});
}


function test(){
    console.log('1'); console.log('2');
    var respo = getData();
    console.log(respo); console.log('4');
};

test();*/
/*var b = 10;
test1();
test2();
var a=10;b=12;
var test2 = function(){
	console.log(a + b);
}

function test1(){
	console.log(a + b);
}
test1();
test2();*/


/*$('#outer li').on("click", function(){
	console.log(this.id);
});*/
function Person(age,weight){
 this.age = age;
 this.weight = weight;
}

Person.prototype.getInfo = function(){
 return "I am " + this.age + " years old " +
    "and weighs " + this.weight +" kilo.";
};

function Employee(age,weight,salary){
 this.age = age;
 this.weight = weight;
 this.salary = salary;
}

Employee.prototype = new Person();
Employee.prototype.getInfo = function(){
 return "I am " + this.age + " years old " +
    "and weighs " + this.weight +" kilo " +
    "and earns " + this.salary + " dollar.";  
};

var person = new Person(50,90);
var employee = new Employee(43,80,50000);

console.log("Persons Info :",person.getInfo());
console.log("Employee info",employee.getInfo());


console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");


/*------------------------------------------------*/

var Car2 = Object.create(null); //this is an empty object, like {}
Car2.prototype = {
  getInfo: function() {
    return 'A ' + this.color + ' ' + this.desc + '.';
  }
};
 
var car2 = Object.create(Car2.prototype, {
  //value properties
  color:   { writable: true,  configurable:true, value: 'red' },
  //concrete desc value
  rawDesc: { writable: false, configurable:true, value: 'Porsche boxter' },
  // data properties (assigned using getters and setters)
  desc: { 
    configurable:true, 
    get: function ()      { return this.rawDesc.toUpperCase();  },
    set: function (value) { this.rawDesc = value.toLowerCase(); }  
  }
}); 
car2.color = 'blue';
console.log(car2.getInfo()); //displays 'A RED PORSCHE BOXTER.'

/*--------------------------------------------*/


var nos = [1,6, 8, 65, 33, 8, 65];

function getNo(arr){
	for (var i = 0; i < arr.length; i++) {
		for (var j = i+1 ; j < arr.length; j++) {
			if(arr[j] == arr[i]){
				return arr[i];
			}
		};

	};
}

console.log("No is ::::::::::::::::",getNo(nos));



/*---------------------------------------------*/
/* This is not a clouser, but chaining*/

function math(){

	this.i = 0;
	this.add = function(num){
		this.i = this.i + num;
		return this;
	}

	this.sub = function(num){
		this.i = this.i - num;
		return this;
	}

	this.print = function(){
		console.log("Chanined method ::::",this.i);
		return this;
	}

}
var a = new math();
a.add(6).sub(2).print();


/*---------------------------------------------*/
/* Clouser */
function cMath(outer){
  return function add(inner){
    return outer + inner;
  }
}

var aa = cMath(5);
console.dir(aa(2));

function oMath(){
  var i = 0;
  var add = function(j){
    i = i+j;
    return this;
  }
   var sub = function(j){
    i = i-j
    return this;
  }
  var print = function(){
    console.log(i);
  }
  return {
    add : add,
    sub : sub,
    print : print
  }
}

var clouserFn = oMath();
console.dir(clouserFn);
clouserFn.add(5).sub(1).print();

/*------------------------------------*/


