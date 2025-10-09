function angryProfessor(k, a) {
    // Write your code here
    let goodArrivals = 0;
    for(let time of a){
        if(time <= 0){
            goodArrivals += 1
        };
        
        if(goodArrivals == k){
            return "NO"
        }
    }
  return "YES"
    
}
