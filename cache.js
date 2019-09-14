function adds10(num) {
    let start = Date.now();
    let end = Date.now();

    // pause for 3 seconds, to make the function expensive!
    while (end - start < 3000) {
        end = Date.now();
    }

    return num + 10;
}

// adds10(39);adds10(39);adds10(39);

function cache(callback) {
    let memoryCache = {}
    return function(arg) {
        if(memoryCache[arg]){
            return memoryCache[arg];
        } else{
            let answer = callback(arg)
            memoryCache[arg] = answer;
            console.log(typeof(answer));
            return answer;
        }

    }
}

let cachingAdd = cache(adds10);
cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);cachingAdd(39);

/*
function cacheSavings(callback) {
    let cache = { };

  return function(arg) {
    if (cache[arg]) {
      return cache[arg];
    } else {
      let answer = callback(arg);
      cache[arg] = answer;
      return cache[arg];
    }
  };
} */