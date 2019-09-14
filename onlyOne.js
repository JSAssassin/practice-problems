function onlyOne(argOne, argTwo, argThree) {
    if (argOne && argTwo && argThree) {
        return false;
    } else if (argOne && argTwo && !argThree) {
        return false;
    } else if (argOne && !argTwo && argThree) {
        return false;
    } else if (!argOne && argTwo && argThree) {
        return false;
    } else if (!argOne && !argTwo && !argThree) {
        return false;
    } else return true;
}

console.log(onlyOne(1, 0, false));

// Second solution -------------------------------------

function onlyOne(argOne, argTwo, argThree) {
    let boolArgOne = !!argOne; //true
    let boolArgTwo = !!argTwo; //false
    let boolArgThree = !!argThree; //true
    let counter = 0;
    if (boolArgOne) {
        counter++;
    }
    if (boolArgTwo) {
        counter++;
    }
    if (boolArgThree) {
        counter++;
    }
    if (counter === 1) {
        return true;
    }
    else {
        return false;
    }
}

//--------------------------------------------

function onlyOne(argOne, argTwo, argThree) {
    return (!!argOne + !!argTwo + !!argThree === 1);
}