const removeElement = (nums, val) => {
  const filteredArray = nums.filter((number) => number !== val);

  return filteredArray;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
