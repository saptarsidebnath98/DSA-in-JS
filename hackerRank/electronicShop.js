function getMoneySpent(keyboards, drives, b) {
     const result = [];
  for(let i = keyboards.length - 1; i >= 0; i--){
    for(let j = drives.length - 1; j >= 0; j--){
      if(keyboards[i] + drives[j] <= b){
        result.push(keyboards[i] + drives[j]);
      }
    }
  }
  if(result.length){
    return result.reduce((final, currVal) => final > currVal ? final : currVal)
  }else{
    return -1
  }
}

const keyboards = [5]
const drives = [4]
const b = 5

// getMoneySpent(keyboards, drives, b)