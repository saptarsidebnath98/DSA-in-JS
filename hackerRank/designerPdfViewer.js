function designerPdfViewer(h, word) {
  let max = 1;
  for (let letter of word) {
    const letterIndex = letter.charCodeAt(0) - 97;
    if (h[letterIndex] > max) {
      max = h[letterIndex];
    }
  }
  return max * word.length;
}

const h = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
];
const word = "abc";
// console.log(designerPdfViewer(h, word))
