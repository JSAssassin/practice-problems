function countDuplicates(arr) {

    let map = {};
    for (let i = 0; i < arr.length; i++) {
        let count = map[arr[i]]
        if (count === undefined) {
            map[arr[i]] = 1;
        } else {
            map[arr[i]]++;
        }
        console.log(map);

    }

    let count = 0;
    for (key in map) {
        if (map[key] > 1) {
            count++;
        }
    }

    return count;
}

console.log(countDuplicates([8, 1, 3, 1, 4, 5, 6, 3, 2]));
