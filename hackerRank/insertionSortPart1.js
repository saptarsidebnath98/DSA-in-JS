function insertionSort1(n, arr) {
    // Write your code here
  const lastVal = arr[n-1];
  let lessValFound = false;
  for(let i=n-2; i >= 0; i--){
   if(arr[i]>lastVal){
      const temp = arr[i];
      arr[i+1] = temp;
      console.log(arr.join(" "))
    }else if(!lessValFound && arr[i]<lastVal){
      arr[i+1] = lastVal;
      lessValFound = true
      console.log(arr.join(" "))
    }
    
    if(i === 0 && arr[i] > lastVal){
      arr[1] = arr[i];
      arr[0] = lastVal;
      console.log(arr.join(" "))
    }
  }
}

const arr = [2,3,4,5,6,7,8,9,10,1];
// console.log(insertionSort1(10, arr));
