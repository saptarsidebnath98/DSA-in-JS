const findSecondLargestNumber = (arr) => {
  let largest = arr[0]
  let secondLargest = arr[0];
  
  for(let i = 1; i < arr.length; i++){
    if(arr[i] > largest){
      secondLargest = largest;
      largest = arr[i]
    }else if(arr[i] !== secondLargest && arr[i] > secondLargest){
      secondLargest = arr[i] 
    }
  }
  return secondLargest
}

// findSecondLargestNumber([3, 9, 2, 7, 4, 8])