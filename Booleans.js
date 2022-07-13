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