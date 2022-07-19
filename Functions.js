//function is a re-usable code in js
function ourReusableFunction() {
    console.log("Sunset Jesus");
    
}

ourReusableFunction();
ourReusableFunction();
ourReusableFunction();
ourReusableFunction();

function postMyNumber() {
    console.log("My number is 0123456789");
    
}

postMyNumber();
postMyNumber();

//passing values to functions with arguments
//calling functions
function functionWithArgs(nem, namba) {
    console.log(nem + namba);   
}

functionWithArgs("SunsetJesus",34);
functionWithArgs(6, 6);

function myFunction(x,y) {
    console.log(x - y);
}
myFunction(10, 5);

//global scope variable functions

var myGlobal = 15;

function justForFun() {

    oopsGlobal = 5; //the var keyword scopes the assignment to the function, so without
    
}

function forFun() {
    var output = "";
    if (typeof myGlobal != "undefined") {//does not equal
        output+="myGlobal: " + myGlobal;
        console.log(output);
        
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
        
    }
    console.log(output);
}
justForFun();
forFun();

//local scopes and variables
function myLocalScope() {
    var myVariable= 10;
    console.log(myVariable)
    
}
myLocalScope();
//local functions can not be global

//local variables take precedence over global variables
var myClothes = "Trousers"//global variable

function outfits() {
   
    var myClothes = "shoes"
    return myClothes;
    
}
console.log(outfits());

//TODO make more examples

console.log(myClothes);//global variable returns to Trousers

//returning values from a function with return statement
//putting a method in the console.log
 function minusThree(num) {
    return num -3;
    
 }

 console.log(minusThree(15));

 function addString(string) {
    return string + "hello world"
    
 }
 console.log(addString("Welcome "));

 //understanding undefined value returned from a function

 var sum = 0;
 function addTen() {
    sum = sum + 10;
    console.log(sum);
 }

 //assignment with a returned value
 var changed=0;
 function change(num) {
    return (num+5) /3;
    
 }
 changed = change(10);
 console.log(changed);

 var processed = 0;
 function processedArg(Num) {
    return (Num+10/2);
    
 }
processed = processedArg(10);
console.log(processed);


//standing in line??
//a queue

function nextInLine(arr, item) {

    arr.push(item);

    return item
    
}
var testArr = [1,2,3,4,5,6];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 7));
console.log("After: " + JSON.stringify(testArr));