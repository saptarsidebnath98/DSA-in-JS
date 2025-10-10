function findDigits(n) {
    // Write your code here
  let count = 0;
  const actualNumber = n;
  for(let i = 0; i < actualNumber.toString().length ;i++){
    const remeinder = n % 10;
    if(actualNumber % remeinder === 0){
      count++
    }
    n = Math.floor(n / 10);
  }
  return count
}

// console.log(findDigits(1012));