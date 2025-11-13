const removeDuplicates = (arr) => {
  return [...new Set(arr)]
};

// console.log(removeDuplicates([1,2,3,4,4,4,5]))
//-------------------------------------------------------------------------------------------------------------

const countOccurrence = (arr) => {
  const hashMap = {};
  
  for(let item of arr){
    if(hashMap.hasOwnProperty(item)){
      hashMap[item] += 1
    }else{
      hashMap[item] = 1
    }
  }
  
  return hashMap
};

// console.log(countOccurrence(['apple', 'banana', 'apple']))
//-------------------------------------------------------------------------------------------------------------

const reverseWords = (sentence) => {
  return sentence.split(" ").reverse().join(" ");
}

// console.log(reverseWords("I Love React"))
//-------------------------------------------------------------------------------------------------------------

const targetSum = (arr, target) => {
  for(let i= 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i]+arr[j] === target){
        return [i, j]
      }
    }
  }
  return 0
}

// console.log(targetSum([2, 7, 11, 15], 9))
//-------------------------------------------------------------------------------------------------------------

const isBalanced = (s) => {
  const stack = [];
  const map = {"(": ")" , "{" : "}", "[" : "]"};
  
  for(let char of s){
    if(map[char]){
      stack.push(map[char])
    }else{
      if(char !== stack.pop()) return false
    }
  }
  
  return stack.length === 0;
}

// console.log(isBalanced("({[]})"))
// console.log(isBalanced("({[]}}]"))
//-------------------------------------------------------------------------------------------------------------

const isBalanced2 = (s) => {
  const stack = [];
  const map = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']']
  ]);
  
  for(let char of s){
    if(map.has(char)){
      stack.push(map.get(char))
    }else{
      if(stack.length === 0 || char !== stack.pop()) return false
    }
  }
  return stack.length === 0;
};

// console.log(isBalanced2("[{()}]"))
//-------------------------------------------------------------------------------------------------------------