function beautifulDays(i, j, k) {
  let beautifulDays = 0;
  for(let p = i; p <= j; p++){
    const reversed = +p.toString().split("").reverse().join("");
    if(Math.abs(p - reversed)%k == 0) {
      beautifulDays += 1;
    }
  }
  return beautifulDays;
}

// console.log(beautifulDays(13, 45, 3))