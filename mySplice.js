function mySplice(arr, str, del, val){
    let removeArr=[];
    let keepArr = (arr.slice(0,str));
    if (val) keepArr.push(val);
   removeArr = arr.slice(str, str+del)
    for(i=str+del;i<arr.length;i++){
      keepArr.push(arr[i]);
    }
    while(arr.length){
      arr.pop();
    }
   keepArr.forEach((keepItem)=>arr.push(keepItem));
    return removeArr;
   }