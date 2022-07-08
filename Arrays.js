//storing data in Arrays
var ourArray = ["John", 23];//elements can be any dataType
console.log(ourArray);


var myArray = ["Quincy", 1];

//nested Arrays
var theArray = [["Marvel", 3], ["Studios", 4]];//arrays within arrays
console.log(theArray);
var majorArray = [["Army", 19], ["Money", 45]];

//using indexes to find arrays
var firstArray = [20, 30, 70];
var lowest = firstArray[0];
console.log(lowest);

var lastArray = ["Monday", "Tuesday", "wednesday",12,15, 23];
var lastDigit = lastArray[lastArray.length -1];
var thirdLast = lastArray[lastArray.length -3];
console.log(lastDigit);
console.log(thirdLast);

//Modify Array data using indexes

var changeArray = [23, 45, 67, 89];
changeArray[3] = 45;
console.log(changeArray);

var setArray = [34,67,45,78,90];
setArray [0] = 1;
console.log(setArray);