
//---------------------------------  PART ONE -----------------------------

let getRow = function (sudokuGrid, rowIdx) {
    let result = [];

    for (let i = 0; i < sudokuGrid.length; i++) {
        let rowElements = sudokuGrid[rowIdx][i];
        result.push(rowElements);
    }

    return result;
}


let getColumn = function (sudokuGrid, columnIdx) {
    let result = [];

    for (let i = 0; i < sudokuGrid.length; i++) {
        let columnToBeChecked = columnIdx;
        let columnElements = sudokuGrid[i][columnToBeChecked];
        result.push(columnElements);
    }

    return result;
}


// getSection should get 3 by 3 subgrid from the sudokuGrid. 
//elements in column 0 to 2 and row 0 to 2 in sudokuGrid will make one subgrid 
let getSection = function (sudokuGrid, x, y) {
    let result = [];

    // x = 0, start = 0
    // x = 1, start = 3
    // x = 2, start = 6

    let startX = 3 * x;
    let endX = startX + 2;
    let startY = 3 * y;
    let endY = startY + 2;

    for (let i = startY; i <= endY; i++) {
        for (let j = startX; j <= endX; j++) {
            let elementsInSection = sudokuGrid[i][j];
            result.push(elementsInSection);
        }
    }

    return result;

}

//-------------------------------------- PART TWO ---------------------------------------------

function includes1to9(array) {
    // check if an array 3X3 has number from 1-9 with no repeats
    let expectedResult = '1,2,3,4,5,6,7,8,9';
    let copy = array.slice().sort().toString();
    // -----> let stringCopy = JSON.stringify(copy); if we use this instead of .toString(), 
    // expectedResult should be '[1,2,3,4,5,6,7,8,9]' & change copy to stringCopy in if statement below

    if (copy === expectedResult) {
        return true;
    }

    return false;
}

// Another way we can do this:

function includes1to9Two(getSectionArray) {
    let sortedArray = getSectionArray.sort();
    for (let i = 1; i <= 9; i++) {
        if (sortedArray[i - 1] !== i) {
            return false;
        }
    }
    return true;
}


// return true if grid is valid
// return false if it's not valid

function sudokuIsValid(sudokuGrid) {
    for (let i = 0; i < 9; i++) {
        let row = getRow(sudokuGrid, i);
        let column = getColumn(sudokuGrid, i);
        if (includes1to9(row) === false && includes1to9(column) === false) {
            return false;
        }
    }

    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            let section = getSection(sudokuGrid, x, y);
            if (includes1to9(section) === false) {
                return false;
            }
        }
    }

    return true;

}
let puzzle = [
    //         4  5  6
    [8, 9, 5, 7, 4, 2, 1, 3, 6], // 0
    [2, 7, 1, 9, 6, 3, 4, 8, 5], // 1
    [4, 6, 3, 5, 8, 1, 7, 9, 2], // 2

    [9, 3, 4, 6, 1, 7, 2, 5, 8],
    [5, 1, 7, 2, 3, 8, 9, 6, 4],
    [6, 8, 2, 4, 5, 9, 3, 7, 1],

    [1, 5, 9, 8, 7, 4, 6, 2, 3],
    [7, 4, 6, 3, 2, 5, 8, 1, 9],
    [3, 2, 8, 1, 9, 6, 5, 4, 7]];


let puzzle2 = [
    [8, 9, 5, 7, 4, 2, 1, 3, 6],
    [2, 7, 1, 9, 6, 3, 4, 8, 5],
    [4, 6, 3, 5, 8, 1, 7, 9, 2],
    [9, 3, 4, 6, 1, 7, 2, 5, 8],
    [5, 1, 7, 2, 3, 8, 9, 6, 4],
    [6, 8, 2, 4, 5, 9, 3, 7, 1],
    [1, 5, 9, 8, 7, 4, 6, 2, 3],
    [7, 4, 6, 3, 2, 5, 8, 1, 9],
    [3, 2, 8, 1, 9, 6, 5, 4, 7]];

let p8zzle = [
    [8, 9, 5, 7, 4, 2, 1, 3, 6],
    [8, 7, 1, 9, 6, 3, 4, 8, 5],
    [4, 6, 3, 5, 8, 1, 7, 9, 2],
    [9, 3, 4, 6, 1, 7, 2, 5, 8],
    [5, 1, 7, 2, 3, 8, 9, 6, 4],
    [6, 8, 2, 4, 5, 9, 3, 7, 1],
    [1, 5, 9, 8, 7, 4, 6, 2, 3],
    [7, 4, 6, 3, 2, 5, 8, 1, 9],
    [3, 2, 8, 1, 9, 6, 5, 4, 7]];

console.log(getRow(puzzle, 8));
// -> [ 3,2,8,1,9,6,5,4,7 ]

console.log(getRow(puzzle, 0));
// -> [ 8,9,5,7,4,2,1,3,6 ]

console.log(getColumn(puzzle, 0));
// -> [ 8,2,4,9,5,6,1,7,3 ]

console.log(getColumn(puzzle, 8));
// -> [ 6,5,2,8,4,1,3,9,7 ]

console.log(getSection(puzzle, 0, 0));
// // -> [ 8,9,5,2,7,1,4,6,3 ]

console.log(getSection(puzzle, 1, 0));
// // -> [ 7,4,2,9,6,3,5,8,1 ]

console.log(includes1to9([1, 2, 3, 4, 5, 6, 7, 8, 9])); // => true
console.log(includes1to9([1, 1, 2, 3, 4, 5, 6, 7, 8])); // => false (No 9)

console.log(sudokuIsValid(puzzle)); // true
console.log(sudokuIsValid(puzzle2)); //true
console.log(sudokuIsValid(p8zzle)); // false

//-------------------------------------- PART THREE ---------------------------------

let puzzle3 = [
    [8, 9, 5, 7, 4, 2, 1, 3, 6],
    [2, 7, 1, 9, 6, 3, 4, 8, 5],
    [4, 6, 3, 5, 8, 1, 7, 9, 2],
    [9, 3, 4, 6, 1, 7, 2, 5, 8],
    [5, 1, 7, 2, 3, 8, 9, 6, 4],
    [6, 8, 2, 4, 5, 9, 3, 7, 1],
    [1, 5, 9, 8, 7, 4, 6, 2, 3],
    [7, 4, 6, 3, 2, 5, 8, 1, 9],
    [3, 2, 8, 1, 9, 6, 5, 4, 7]];

let puzzleCopy = [
    [8, 9, 5, 7, 4, 2, 1, 3, 6],
    [2, 7, 1, 9, 6, 3, 4, 8, 5],
    [4, 6, 3, 5, 8, 1, 7, 9, 2],
    [9, 3, 4, 6, 1, 7, 2, 5, 8],
    [5, 1, 7, 2, 3, 8, 9, 6, 4],
    [6, 8, 2, 4, 5, 9, 3, 7, 1],
    [1, 5, 9, 8, 7, 4, 6, 2, 3],
    [7, 4, 6, 3, 2, 5, 8, 1, 9],
    [3, 2, 8, 1, 9, 6, 5, 4, 7]];

let p8zzle2 = [
    [8, 9, 5, 7, 4, 2, 1, 3, 6],
    [8, 7, 1, 9, 6, 3, 4, 8, 5],
    [4, 6, 3, 5, 8, 1, 7, 9, 2],
    [9, 3, 4, 6, 1, 7, 2, 5, 8],
    [5, 1, 7, 2, 3, 8, 9, 6, 4],
    [6, 8, 2, 4, 5, 9, 3, 7, 1],
    [1, 5, 9, 8, 7, 4, 6, 2, 3],
    [7, 4, 6, 3, 2, 5, 8, 1, 9],
    [3, 2, 8, 1, 9, 6, 5, 4, 7]];

let isSame = function (sudokuGrid1, sudokuGrid2) {
    if (sudokuIsValid(sudokuGrid1) === sudokuIsValid(sudokuGrid2)) {
        return true;
    }

    return false;
}

console.log(isSame(puzzle3, puzzleCopy)); //returns true
console.log(isSame(puzzle3, p8zzle2)); //returns false