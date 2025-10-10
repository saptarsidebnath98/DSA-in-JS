function permutationEquation(p) {
    // Write your code here
   const result = [];
   for(let i = 1; i <= p.length; i++){
     const x = p.indexOf(i);
     const y = p.indexOf(x + 1);
     result.push( y + 1)
   }
  return result
}

const p = [5,2,1,3,4]
// console.log(permutationEquation(p))