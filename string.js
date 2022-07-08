var firstName = "Sunset " //String literals
var lastName = "Jesus"
//adding strings together
console.log(firstName+lastName);
//adding strings using the plus equals sign
var myString= "Sunset ";
myString += "Jesus ";
console.log("My name is " +myString +"nice to meet you!");

//how to escape String literals
var fullName = "I am the \"One\" and \"only\" Jesus";
console.log(fullName); 

var myLink = '<a href="https://www.youtube.com" target="_blank">Link</a>';
console.log(myLink);
//escaping sequences in strings

/*
\' - escaping a single quote
\" escaping a double quote
\\ escaping a backslash
\n new line
\r carriage return
\t tab
\b back space
\f form feed
*/
var str = "FirstLine\n\t\\secondline\nThirdLine";
console.log(str);

//appending variables to a string
var myVar = "My name is Sunset ";
myVar+="Jesus"
console.log(myVar);

//finding the length of a string
var firstnameLength = 0;
var firstname ="sunset";
firstnameLength = firstname.length;
console.log(firstnameLength);

var lastnameLength = 0;
var lastname = "Jesus";

lastnameLength=lastname.length;
console.log(lastnameLength);
