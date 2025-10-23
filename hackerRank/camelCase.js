function camelcase(s) {
    // Write your code here
  if(!s) return 0;
  let count = 1;
    for(let i= 0; i< s.length; i++){
      const charCode = s[i].charCodeAt(0);
      if(charCode >= 65 && charCode <= 90){
        count++
      }
    }
  return count;
}

// console.log(camelcase("saveChangesInTheEditor"))