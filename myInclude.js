function myIncludes(anArray, searchValue) {
    for (let i = 0; i < anArray.length; i++) {
        if (searchValue === anArray[i]) {
            return true;
        }
    }
    return false;
}