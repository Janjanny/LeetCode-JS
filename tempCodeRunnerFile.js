const removeElement = (nums, val) => {
  let k = 0;
  let numCopy = [...nums];

  for (let i = 0; i < numCopy.length; i++) {
    if (numCopy[i] === val) {
      nums.splice(0, i);
      k++;
    }
  }

  return k;
};