function compareObjects(object1, object2) {

    // if (Object.keys(object1) === Object.keys(object2) && Object.values(object1) === Object.values(object2)){
    //      return true;
    // } -----------> This approach doesn't work because a new array is being created in each of these statements, 
    //each being a brand new array object with just identical contents. If you create two new objects:
    /*var a = {};
    var b = {};
    a === b //----> false;*/

    //better solution would be to convert the objects to string using JSON.stringify

    let stringObject1 = JSON.stringify(object1);
    let stringObject2 = JSON.stringify(object2);

    if(stringObject1 === stringObject2){
        return true;
    }

    return false;
}
console.log(compareObjects({a: 1, b: 2}, {a: 1, b: 2}));

