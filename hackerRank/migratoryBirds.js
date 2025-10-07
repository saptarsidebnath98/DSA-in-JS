function migratoryBirds(arr) {
    // Write your code here
    const map = {};
    
    for(let elem of arr){
      if(!map.hasOwnProperty(elem)){
        map[elem] = 1
      }else{
        map[elem] += 1
      }
    }
}