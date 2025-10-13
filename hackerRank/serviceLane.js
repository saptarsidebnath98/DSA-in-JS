

function serviceLane(n, widths, cases) {
    // Write your code here
  const result = []
  for(let item of cases){
    const [i, j] = item;
    const elements = [];
    for(let s = i; s <= j; s++){
      elements.push(widths[s])
    }
    result.push(elements.reduce((final, currVal) => final < currVal ? final : currVal))
  }
  return result
}

const widths = [2, 3, 2 ,1];
const cases = [[1,2], [2, 4]]
const n = 4;

serviceLane(n, widths, cases)