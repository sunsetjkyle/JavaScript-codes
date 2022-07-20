
//welcome to booleans true or false statements
function welcomeToBooleans() {
    return false;
    
}
//use of conditional statements using if
function Ronaldo(isTheGoat) {
    if (isTheGoat) {
        return "Yes, he is de goat";
        
    }
    return "No, es ist falsch";
    
}
console.log(Ronaldo(false));

function isItTrue(FalschOderRichtig) {
    if (FalschOderRichtig) {
        return "Ja, es war richtig";
    }
    return "es war nicht richtig";
    
}
console.log(isItTrue(true));
console.log(isItTrue(false));

function willManUtdWinTheleague(yesTheyWill) {
    if (yesTheyWill) {
        return "Glory glory man united";

        
    }
    return "Glazers out";
    
}
console.log(willManUtdWinTheleague(true));
//using the equality function

function testEqual(val) {
    if (val == 10) {
        return "equal";
        
    }
    return "unequal";
}
console.log(testEqual(15));
/*console.log(testEqual(true));
console.log(testEqual(false));*/

//Comparison using then strict equality operator triple equal sign - doesnt convert into a number
//converts string into a number

function testStrict(value) {
    if (value === 15) {//equality sign
        return "Equal";
    }
    return "Not equal";
    
}
console.log(testStrict(15));

function testAgain(variable) {
    if (variable === 'Sunset') {
        return "Sunset Jesus";
        
    }
    return "Not applicable";
    
}

console.log(testAgain('maembe'));
console.log(testAgain('Sunset'));

//differences between the equality operator and the strict equlaity operator
function compareEquality(a, b) {
    if (a ===b) {
        return "equal";
        
    }
    return "Not Equal";
    
}
console.log(compareEquality(10, "10"));

//inequality operator
function notEqual(anadaValue) {
    if (anadaValue != 200) {

        return "not 200";
    }
    return "yes, it is 200";
    
}
console.log(notEqual(150));

//with a string number

function unequalAgain(theValue) {
    if (theValue != 45) {
        return "not the same"
        
    }
    return "Same"
}
console.log(unequalAgain("45"));

//strict inequality operator

function strictInequality(theOnlyValue) {
    if (theOnlyValue !== 7) {
        return "Unequal"
        
    }
    return "equal"
    
}
console.log(strictInequality(7));
console.log(strictInequality("7"));

//comparison using greater than 

function testGreaterThan(greaterValue) {
    if (greaterValue > 100) {
        return "over 100";
        
    }
    if (greaterValue > 10) {
        return "over 10";
        
    }
    return "10 or under";
    
}
console.log(testGreaterThan(10));
console.log(testGreaterThan(200));
console.log(testGreaterThan(12));

//Comparison using the greater than or equal to operator;
function greaterEqualTo(theRealValue) {
    if (theRealValue >= 50) {
        return "50 or over";
        
    }
    if (theRealValue >= 30) {
        return "30 or Greater";
        
    }
    return "less than 20";
    
}

console.log(greaterEqualTo(100));
console.log(greaterEqualTo(40));
console.log(greaterEqualTo(10));

//comparison using the less than operator

function lessThan(lessValue) {
    if (lessValue < 6) {
        return "Less than 6";
        
    }
    if (lessValue < 15) {
        return "less than 15";
        
    }
    return "more than 15";
    
}
console.log(lessThan(5));
console.log(lessThan(13));
console.log(lessThan(39));


//comparison using the less than or equal to operator
function lessOrEqual(lessEqualValue) {
    if (lessEqualValue <= 16) {
        return "Value is 16 or less";
        
    }
    if (lessEqualValue <= 50) {
        return "Value is 50 or less";
    }
    return "Value is larger than 50";
}
console.log(lessOrEqual(16));
console.log(lessOrEqual(45));
console.log(lessOrEqual(100));

//comparisons using the logical operators >if two things are true at the same time
//first option
function testLogicalAnd(allValue) {
    if (allValue >=15) {
        if (allValue<=50) {
            return "yes";
            
        }
        
    }
    return "no"
    
}console.log(testLogicalAnd(30));

//second option

function wayTwo(compareValue) {
    if (compareValue >= 50 && compareValue <= 100) {
        return "Great";
        
    }
    return "poor";
    
}
console.log(wayTwo(45));

//using the or operator option 1

function testLogicalOr(orValue) {
    if (orValue > 30) {
        return "outside";  
    }
    if (orValue<20) {
        return "Outside";
    }
    return "Inside";
}

console.log(testLogicalOr(25));
console.log(testLogicalOr(10));

//option 2
function orLogicalOperator(orValue2) {
    if (orValue2 < 16 || orValue2 > 32) {
        return "Either Young or old";

    }
    return "Right age"
    
}
console.log(orLogicalOperator(15));
console.log(orLogicalOperator(25));
