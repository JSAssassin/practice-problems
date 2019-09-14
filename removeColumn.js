function removeColumns (originalgrid, numColumns) {
    let result = [];
    console.log(originalgrid);
    console.log("length is " + originalgrid.length);
    for(let i=0; i<originalgrid.length; i++){
        console.log(originalgrid[i]);
      let newArray = [];
      for(let j=0; j<originalgrid[i].length - numColumns; j++){
          console.log(originalgrid[i][j]);
        newArray.push(originalgrid[i][j]);
      }
      result.push(newArray);
    }
    
    return result;
  }

  removeColumns([[1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]], 2);


    function removeColumns2(grid, numColumns) {

      // loop through every row in the grid
      for (let i = 0; i < grid.length; i++) {
    
        // for every column to remove...
        for (let j = 0; j < numColumns; j++) {
    
          // pop one colum/cell off of the current row
          grid[i].pop();
        }
      }
      return grid;
    }