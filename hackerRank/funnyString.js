function getAbsoluteDiff(arr){
  const result = [];
  for(let i = 1; i < arr.length; i++){
    result.push(Math.abs(arr[i] - arr[i-1]))
  }
  return result;
}

function funnyString(s) {
    // Write your code here
  const sASCII = s.split("").map((item) => item.charCodeAt(0));
  const sReverseASCII = s.split("").reverse().map((item) => item.charCodeAt(0));

  const sASCIIAbsoluteDiff = getAbsoluteDiff(sASCII);
  const sReverseASCIIAbsoluteDiff = getAbsoluteDiff(sReverseASCII);
   
  return sASCIIAbsoluteDiff.every((element, index) => element === sReverseASCIIAbsoluteDiff[index]) ? "Funny" : "Not Funny"
}


const s = "bcxz"
// funnyString(s)