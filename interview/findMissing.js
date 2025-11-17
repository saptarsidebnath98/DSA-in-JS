// if sorted
const findMissingIfSorted = (arr) => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== i){
      return i
    }
  }  
}

// findMissingIfSorted([0, 1, 3]);          // 2
// findMissingIfSorted([1, 2, 3, 4, 5, 6]); // 0
// findMissingIfSorted([0, 2]);             // 1

// if not sorted
const findMissing = (arr) => {
  const n = arr.length;
  const expectedSum = (n *(n + 1))/2;
  const actualSum = arr.reduce((total, curr) => total + curr, 0);
  return expectedSum - actualSum;
}

// findMissing([0, 1, 3]);          // 2
// findMissing([1, 2, 3, 4, 5, 6]); // 0
// findMissing([0, 2]);             // 1

