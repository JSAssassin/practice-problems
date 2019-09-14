function mySlice(originalString, startIdx, endIdx) {
    let result = '';
    if (startIdx === undefined) {
        startIdx = 0;
        return originalString;
    }
    if (endIdx === undefined) {
        endIdx = originalString.length;
    }

    for (let i = startIdx; i < endIdx; i++) {
        result += originalString[i];
    }

    return result;
}

console.log(mySlice('this is an original string', 2, 20));