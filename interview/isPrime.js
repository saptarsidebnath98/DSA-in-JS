const isPrime = (n) => {
    if(n <= 1) return false;
    if(n === 2) return true;
    if(n % 2 === 0) return false;
    for(let i = 3; i <= Math.sqrt(n); i += 2){
        if(n % i === 0){
            return false
        }
    }
    return true;
}

// const arr = [1,2,3,4,5,6,7,8,9];
// console.log( arr.filter((num) => isPrime(num)))