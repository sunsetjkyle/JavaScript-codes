const moment = require("moment");
const _ = require("lodash");
const axios = require("axios").default;

//storing data in Arrays
var ourArray = ["John", 23]; //elements can be any dataType
console.log(ourArray);

var myArray = ["Quincy", 1];

//nested Arrays
var theArray = [
  ["Marvel", 3],
  ["Studios", 4],
]; //arrays within arrays
console.log(theArray);
var majorArray = [
  ["Army", 19],
  ["Money", 45],
];

//using indexes to find arrays
var firstArray = [20, 30, 70];
var lowest = firstArray[0];
console.log(lowest);

var lastArray = ["Monday", "Tuesday", "wednesday", 12, 15, 23];
var lastDigit = lastArray[lastArray.length - 1];
var thirdLast = lastArray[lastArray.length - 3];
console.log(lastDigit);
console.log(thirdLast);

//Modify Array data using indexes

var changeArray = [23, 45, 67, 89];
changeArray[3] = 45;
console.log(changeArray);

var setArray = [34, 67, 45, 78, 90];
setArray[0] = 1;
console.log(setArray);

//Multi-dimensional array using indexes
var allArrays = [
  [1, 2, 3],
  [4, 4, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
];
var thirdArray = allArrays[2][2];
console.log(thirdArray);

//manipulating arrays data using push

var ourNouns = ["John", "wah", "Bycicle"];
ourNouns.push(["Ride", "happy"]);
console.log(ourNouns);

var allNouns = [
  ["John", 23],
  ["Cat", 0],
];
allNouns.push(["dog", 3]);
console.log(allNouns);

//manipulating Arrays using pop

var numArray = [7, 8, 9];
var rmvArry = numArray.pop();
//if you console.log the rmvarray, it will show the removed character
console.log(numArray);

var allNumArrays = [
  ["Mabati", 34],
  ["mbwa", 45],
  ["simiti", 54],
];
var rmAllNumArrays = allNumArrays.pop();
console.log(allNumArrays);

// manipulating arrays with shift(); opposite to pop, removes the first data in array
var shiftArray = ["mabati", "MRM", 80];
var rmShiftArray = shiftArray.shift();
console.log(shiftArray);

var otherShiftArray = [
  ["Mabati Rolling Mills", 80],
  ["simiti", 40],
  ["matope", 43],
];
var rmotherShiftArray = otherShiftArray.shift();
console.log(otherShiftArray);

//manipulating arrays using unshift(); unshifts adds an array to the start of the arrays

var unshiftArray = ["String", "C", 34];
unshiftArray.shift();
console.log(unshiftArray);

unshiftArray.unshift("Variable");
console.log(unshiftArray);

//TODO:  just write code

var nestedArrays = [
  ["a string", 45],
  ["Cat", 45],
  ["man", 100],
];
nestedArrays.unshift(["Woman", 20]);
console.log(nestedArrays);

nestedArrays.shift();
console.log(nestedArrays);

//shopping bag
var myList = [
  ["cereal", 3],
  ["milk", 2],
  ["bread", 3],
]; //shopping items and their quantities
