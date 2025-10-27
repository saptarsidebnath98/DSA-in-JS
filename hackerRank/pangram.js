function pangrams(s) {
 const letters = s.toLowerCase().match(/[a-z]/g);

  const uniqueLetters = new Set(letters);
  
  return uniqueLetters.size === 26 ? "pangram" : "not pangram";
}

const s = "We promptly judged antique ivory buckles for the prize";
// console.log(pangrams(s))