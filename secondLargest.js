// find the second largest in an array:

function findSecondLargest(arr){ // this function is not optimized
    const uniqueArr = Array.from(new Set(arr));

    uniqueArr.sort((a, b) => b - a);

    if(uniqueArr.length >= 2){
        return uniqueArr[1]
    }else{
        return -1
    }
}

// console.log(findSecondLargest([24, 98, 10, 5, 60, 32, 101]));

//optimized way
function findSecondLargestOptimized(arr){
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i]
        }else if(arr[i] != largest && arr[i] > secondLargest){
            secondLargest = arr[i]
        }
    }

    return secondLargest;
}

console.log(findSecondLargestOptimized([24, 98, 10, 5, 60, 32, 101])) 