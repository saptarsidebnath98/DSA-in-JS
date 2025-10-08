function catAndMouse(x, y, z) {
  const distanceFromCatA = Math.abs(z - x);
  const distanceFromCatB = Math.abs(z - y);
  if(distanceFromCatA < distanceFromCatB){
    return "Cat A"
  }else if(distanceFromCatB < distanceFromCatA){
    return "Cat B"
  }else{
    return "Mouse C"
  } 
}
const x = 1;
const y = 2;
const z = 3;

// console.log(catAndMouse(x, y, z))