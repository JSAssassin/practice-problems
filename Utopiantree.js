function getHeight(cycles) {
    // write code here
    let height = 1;

//   while (let i = cycles) {
//       if (i % 2) {
//           height *= 2;
//       } else {
//           height += 1;
//       }
//   }
    for (let i = 1; i <= cycles; i++) {
        if (i % 2) {
            height *= 2;
        } else {
            height +=1;
        }
    }
    console.log(height);
    return height;
}

getHeight(3);