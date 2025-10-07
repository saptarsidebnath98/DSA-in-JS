function pageCount(n, p) {
    let frontCount = 0;
    for( let i = 0; i <= n; i += 2){
      if( i !== p && i + 1 !== p){
        frontCount += 1
      }else{
        break
      }
    }
  
  let backCount = 0;
  for( let i = n%2 == 0 ? n + 1 : n; i >= 2; i -= 2){
    if( i !== p && i - 1 !== p){
      backCount += 1
    }else{
      break
    }
  }
  
  return frontCount < backCount ? frontCount : backCount;
}

// console.log(pageCount(5, 3))