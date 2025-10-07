function dayOfProgrammer(year) {
  let resultDate = "";
    if(year <= 1917){
      if(year%4 === 0){
        resultDate = "12.09."
      }else{
        resultDate = "13.09."
      }
    }else if(year == 1918){
        resultDate = "26.09."
    }
    else{
      if((year%400 === 0) || ((year%4 === 0) && (year%100 !== 0))){
        resultDate = "12.09."
      }else{
        resultDate = "13.09."
      }
    }
  return `${resultDate}${year}`
};