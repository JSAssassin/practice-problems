function sumDigits(num) {
    let sum = 0;
    if (num < 0) {
        console.log('this is the sum if num < 0', sum);
        return sum;
    }
    let str = num.toString();
    let lastDigitInStr = str[str.length - 1];
    let lastDigitToNumber = Number(lastDigitInStr);

    sum += lastDigitToNumber;
    console.log(sum);
    let newStr = str.substring(0, str.length - 1);
    let newNum = Number(newStr)
    return sumDigits(sum + newNum);
}
sumDigits(333);