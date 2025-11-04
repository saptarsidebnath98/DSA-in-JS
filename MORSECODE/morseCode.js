const morseCodeMap = {
  'A': '.-',
  'B': '-...',
  'C': '-.-.',
  'D': '-..',
  'E': '.',
  'F': '..-.',
  'G': '--.',
  'H': '....',
  'I': '..',
  'J': '.---',
  'K': '-.-',
  'L': '.-..',
  'M': '--',
  'N': '-.',
  'O': '---',
  'P': '.--.',
  'Q': '--.-',
  'R': '.-.',
  'S': '...',
  'T': '-',
  'U': '..-',
  'V': '...-',
  'W': '.--',
  'X': '-..-',
  'Y': '-.--',
  'Z': '--..',
  '0': '-----',
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
  '.': '.-.-.-',
  ',': '--..--',
  '?': '..--..',
  '/': '-..-.',
  '-': '-....-',
  '(': '-.--.',
  ')': '-.--.-',
  '&': '.-...',
  ':': '---...',
  ';': '-.-.-.',
  '=': '-...-',
  '+': '.-.-.',
  '@': '.--.-.',
  ' ': '/' // Represents space between words
};


const getMorseCode = (word) => {
  let result = "";
  for(let i = 0; i < word.length; i++){
    if(i ==  word.length - 1 ){
      result += morseCodeMap[word[i]]
    }else{
      result += morseCodeMap[word[i]] + " "
    }
  }
  
  return result.slice()
}

console.log(getMorseCode("ABCD"))
 
const getMorseWord = (code) => {
  let result = ""
  const codeArr = code.split(" ");
  for(let item of codeArr){
    result += Object.keys(morseCodeMap).find(letter => morseCodeMap[letter] === item)
  }
  return result 
}

console.log(getMorseWord('.- -... -.-. -..'))

