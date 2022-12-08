function add(a,b){
    return a+b;
}

    const memo = (func) => {
    const cache = new Map();

    return (...args) => {
      if(typeof args[0]==='number' && typeof args[1]==='number'){
    const params = args.toString();

    if(cache.has(params)){
        return cache.get(params);
    } cache.set(params, func(...args));
    return cache.get(params);
    } else {
    throw new Error('Number Params expected');
  }
 }
}

const ans = memo(add);

console.log(ans(10,10));