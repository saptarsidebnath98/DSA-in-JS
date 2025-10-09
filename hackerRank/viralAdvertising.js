function viralAdvertising(n) {
    // Write your code here
  let shared = 5;
  let cumulative = 2;
  for(let i = 2; i <= n; i++){
    shared = Math.floor(shared/2) * 3;
    const liked = Math.floor(shared/2);
    cumulative += liked
  }
  return cumulative
}

// console.log(viralAdvertising(3))
