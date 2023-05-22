const map = (arr, fn) => {
  let newArr = [];
  // arr.forEach((num, i) => {
  //   newArr.push(fn(num, i));
  // });

  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i));
  }

  return newArr;
};

// Input: (arr = [1, 2, 3]),
//   (fn = function plusone(n) {
//     return n + 1;
//   });
// Output: [2, 3, 4];

const newArray = map([1, 2, 3], function plusone(n) {
  return n + 1;
}); // [2,3,4]
console.log(newArray);
