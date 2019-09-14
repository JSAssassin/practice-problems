function rotate(arr, steps) {
    for(let i = steps; i > 0; i--){
        let lastElementRemoved = arr.pop(arr[arr.length-1]);
        arr.unshift(lastElementRemoved);
    }
    return arr;
}

rotate([1,2,3,4,5],2);