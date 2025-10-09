function hurdleRace(k, height) {
  const maxHeight = height.reduce((final, currVal) => final > currVal ? final : currVal);
  return k >= maxHeight ? 0 : maxHeight - k
};

const k = 7;
const height = [2, 5, 4, 5, 2];

// console.log(hurdleRace(k, height))