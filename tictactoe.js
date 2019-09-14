let ticTacToe = {
    //board property is a grid of arrays (2 Dimensional)
    // each cell is initially null
    board: [[null, null, null], [null, null, null], [null, null, null]],
  
    //move method receives a char, x and y
    move: function(char, x, y) {
      //checks if board[x][y] is occupied
      if (!this.board[x][y]) {
        //add char to grid board [x], [y]
        this.board[x][y] = char;
      }
      //return board
      return this.board;
    },
  
    //clear method resets the board to all nulls
    clear : function () {
      //run for each array in this.board
      for (i=0; i<this.board.length; i++) {
        //run through each element in this array
        let elementOfThisBoard = this.board[i];
        for (j=0; j<elementOfThisBoard.length; j++) {
          //set current element of this.board[i][j]to null
          this.board[i][j] = null;
        }
      }
      //tests again
      return this.board;
    }
  };