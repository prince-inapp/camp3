// var for declaring variable
// var myname;
/*
var age;

//var myname = "Tom"; //use quotes for string
var age = 15;
// variable types
const myname = "Const Name " // block scope, can't change value
alert(myname)
let myname = "Let Name"; // block scope and can be changed
alert(myname)
var myname = "var Name"; // global scope and function scope
alert(myname)
const a = 29;
alert(a)
*/
// string functions and slicing
// let mytext = "Hello World amd Welcome"
// let partext = mytext.slice(4,10);
// alert(partext)

// conditional operators
var a = 5;
// var b = 10;
// if(a<b) {
//     alert(b+'is greater than' +a)
// }
// else{
//     alert(a+'is greater than'+b)
// }

switch(new Date().getDay()){
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday"
        break;
    case 3:
        day = "Wenesday"
        break;
    case 4:
        day = "Thursday"
        break;
    case 5:
        day = "Friday"
        break;
    
}
//alert(day)

// looping statements

var a = 0;
while(a < 10){
    //alert(a);
    a = a +1;
}
for (var i = 1; i <10; i++){
    //alert(i)
}

// js function

add = function (a, b){
    return a+b
};

var result = add(3,4);
//alert(result);

var sq = a => {
    console.log("NUmber :"+a);
    return a*a;
};

var res = sq(4)
console.log(res)

var student = {
    stud_name : 'Prince',
    age : 21,
    talk:function(){
        alert("hello")
    }
}

//alert(student.stud_name)
//student.talk();
student.location = 'TVM'
//alert(student.location)
student.something = ''
