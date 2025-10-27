function extraLongFactorials(n) {
    // Write your code here
  let result = BigInt(1);
 for(let i = n; i > 0; i--){
   result *= BigInt(i)
 }
  return result.toString()
}

// console.log(extraLongFactorials(25))