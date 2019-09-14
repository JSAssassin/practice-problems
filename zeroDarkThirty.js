function zeroDarkThirty(number) {
    debugger;
    if(number === 0){
        return NaN;
    }
    let result = '';
    let numberString = String(number);
    console.log(numberString);
    for (let i = 0; i < numberString.length; i++) {
        let currentDigit = numberString[i];
        if(currentDigit != 0) {
            result += currentDigit;
        } 
    }
    return parseInt(result);
}


console.log(zeroDarkThirty(102302));