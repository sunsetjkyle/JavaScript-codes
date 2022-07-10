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


