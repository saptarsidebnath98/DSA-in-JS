// rotate an array by K steps

function rotateArray(nums, k){
    if(k <= nums.length){
        const rotateElements = nums.slice(-k);
        nums.splice(0, 0, rotateElements)
        return nums.flat().slice(0, nums.length - k + 2);
    }

}

console.log(rotateArray([1,2,3], 2))
