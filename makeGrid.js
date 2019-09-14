function makeGrid(numColumns, numRows) {
    let result = [];
    for (let i = 0; i < numRows; i++) {

        let newArray = [];
        for (let j = 1; j <= numColumns; j++) {
            newArray.push(j)
        }

        result.push(newArray);
    }

    console.log(result);
    return result;
}


