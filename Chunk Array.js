var chunk = function (arr, size) {
  if (arr.length === 0) {
    return arr;
  }

  let newArr = [];

  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }

  return newArr;
};

console.log(chunk([1, 9, 6, 3, 2], 3));
