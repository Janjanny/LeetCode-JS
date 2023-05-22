const reduce = (nums, fn, init) => {
  let count = init;
  for (i = 0; i < nums.length; i++) {
    count = fn(count, nums[i]);
  }
  return count;
};

// nums = [1, 2, 3, 4];
// fn = function sum(accum, curr) {
//   return accum + curr;
// };
// init = 0;
// Output: 10;

console.log(
  reduce(
    [1, 2, 3, 4],
    function sum(accum, curr) {
      return accum + curr;
    },
    0
  )
);
