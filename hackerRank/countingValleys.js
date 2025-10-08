//one of the best fun to do problems

function countingValleys(steps, path) {
    // Write your code here
  let valleyCount = 0;
  let mountainCount = 0;
  let upDown = 0;
  
  for(let i = 0; i < steps; i++){
    if(path[i] === "U"){
      upDown += 1
    }else{
      upDown -= 1
    }
    
    if(upDown === 0 && path[i] === "U"){
        valleyCount += 1
    }else if(upDown === 0 && path[i] === "D"){
        mountainCount += 1
    }
  }
   return valleyCount
}

const path = "UDDDUDUU";
// console.log(countingValleys(8, path))