const reference = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = (s) => {
  const romans = s.split("");
  let count = 0;

  for (let index = 0; index < romans.length; index++) {
    let current = romans[index];
    let nextValue = romans[index + 1];
    if (reference[current] >= reference[nextValue]) {
      count += reference[current];
    } else if (reference[current] < reference[nextValue]) {
      count -= reference[current];
    } else {
      count += reference[current];
    }
  }

  return count;
};

console.log(romanToInt("MCMXCIV"));
