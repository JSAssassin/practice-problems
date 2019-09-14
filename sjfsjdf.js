function myIndexOf(source, searchValue, startIdx) {
    if (startIdx === undefined) {
        let startIdx = 0;
    }

    for (let i = source.length - 1; i >= 0; i--) {
        let characterInString = source[i];
        if (characterInString === searchValue) {
            return i;
        }
    }

    return -1;
}