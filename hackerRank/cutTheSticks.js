function cutTheSticks(arr) {
    // Write your code here
  const result = [];
  let copyArr = [...arr];
  while(copyArr.length > 0){
    result.push(copyArr.length)
    // console.log(copyArr)   
    let leastVal = copyArr.reduce((final, curr) => final < curr ? final : curr);
    for(let j = 0; j < copyArr.length; j++){
    copyArr[j] = copyArr[j] - leastVal;
    }
    copyArr = copyArr.filter((item) => item !== 0)
  }
 return result
}

const arr = [1, 2, 3]
// cutTheSticks(arr)