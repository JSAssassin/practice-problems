// YOUR CODE BELOW
function myIndexOf(source, searchValue, startIdx) {
    if (startIdx === undefined) {
        startIdx = 0;
    }

    // [this is an apple] [app]
    for(let i = startIdx; i <= source.length - searchValue.length; i++) {
        let charactersToCheck = source.slice(i, i + searchValue.length);
        if(charactersToCheck === searchValue) {
            return i;
        }
    }

    return -1;
}

myIndexOf("i love apples", "apples");
// describe("myIndexOf", () => {
//     it("is a function", () => {
//         expect(typeof myIndexOf).toEqual("function");
//     });

//     it("returns a number", () => {
//         let returnedValue = myIndexOf("i love apples", "apples");
//         expect(typeof returnedValue).toEqual("number");
//     });

//     it("returns the first instance of the searchValue in the source", () => {
//         let returnedValue = myIndexOf("here and there", "here");
//         expect(returnedValue).toEqual(0);
//     });

//     it("returns the first instance of the searchValue at or after the startIdx", () => {
//         let returnedValue = myIndexOf("here and there", "here", 4);
//         expect(returnedValue).toEqual(10);
//     });

//     it("returns -1 if the searchValue is not in the source", () => {
//         let returnedValue = myIndexOf("here and there", "nowhere");
//         expect(returnedValue).toEqual(-1);
//     });
// });

