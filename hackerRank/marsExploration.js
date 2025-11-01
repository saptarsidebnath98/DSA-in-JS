function marsExploration(s) {
    // Write your code here
  const emergecyWord = "SOS"
  const expectedMessage = emergecyWord.repeat(s.length/3);
  let difference = 0;
  for(let i = 0; i < s.length; i++){
    if(s[i] !== expectedMessage[i])difference++
  }
  return difference;
}

const s = "SOSSOT"
// marsExploration(s)