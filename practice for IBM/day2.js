const findTwoSum = (arr, target) => {
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] + arr[j] === target){
        return [i, j]
      }
    }
  }
  return [-1, -1]
};

// findTwoSum([2, 7, 11, 15], 9)
//-------------------------------------------------------------------------------------------------------------
const findTwoSumUsingMap = (arr, target) => {
 const map = new Map();
  for(let i = 0; i < arr.length; i++){
    const complement = target - arr[i];
    
    if(map.has(complement)){
      return [map.get(complement), i]
    }
    
    map.set(arr[i], i)
  }
  
  return [-1, -1]
};

// findTwoSumUsingMap([2, 7, 11, 15], 9)
//-------------------------------------------------------------------------------------------------------------
const reverseWordsInSentence = (sentence) => {
  const result = [];
  const sentenceArr = sentence.split(" ");
  for(let word of sentenceArr){
    const reversedWord = word.split("").reverse().join("");
    result.push(reversedWord)
  }
  return result.join(" ")
}

// reverseWordsInSentence("Hello World from IBM")
//-------------------------------------------------------------------------------------------------------------

const firstNonRepeatingChar = (s) => {
  const map = new Map();
  for(let char of s){
      map.set(char, (map.get(char) || 0) + 1)
  }
  
  for(let char of s){
    if(map.get(char) === 1) return char
  }
  return "_"
};
// firstNonRepeatingChar("aabb")
//-------------------------------------------------------------------------------------------------------------

const lengthOfLongestSubString = (s) => {
  let left = 0;
  let maxLength = 0;
  const set = new Set();
  
  for(let right = 0; right < s.length; right++){
    while(set.has(s[right])){
      set.delete(s[left]);
      left++
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1)
  }
  
  return maxLength
};

// lengthOfLongestSubString("aabb")
//-------------------------------------------------------------------------------------------------------------