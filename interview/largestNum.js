const findLargestNumber = (arr) => {
  return arr.reduce((final, curr) => final > curr ? final : curr)
}

// findLargestNumber([3, 7, 2, 9, 4])