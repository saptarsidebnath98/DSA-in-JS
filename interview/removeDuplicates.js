const removeDuplicates = (arr) => {
  const duplicates = [];
  const result = [];
  for(let elem of arr){
    if(result.includes(elem)){
      duplicates.push(elem)
    }else{
      result.push(elem)
    }
  }
  return result
}

// removeDuplicates([1, 2, 2, 3, 4, 4])