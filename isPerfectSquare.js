// Solve a problem that determines if an integer is a perfect square.

// A perfect square is an integer that can be expressed as the product of an integer with itself. For example, 9 is a perfect square because it's the result of 3 × 3. You can't use built-in functions like Math.sqrt() or Math.pow().

const isPerfectSquare = (num) => {
  if(num <= 0) return "input cannot be negative or zero";
  let i = 1;
  while(i * i <= num){
    if(i * i === num){
      return true
    }else{
      i++;
    }
  }
  return false
}

// console.log(isPerfectSquare(16)) //true