function palindrome(str) {
    let newStr = str.toLowerCase();
    let reversedStr = newStr.split("").reverse().join("");
    console.log(reversedStr);
    if(newStr === reversedStr){
        return "true";
    } else {
        return "false";
    }
}

palindrome('Grace Hopper');