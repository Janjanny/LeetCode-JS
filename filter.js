const filter = (arr, fn) => {
  let arrayyy = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      arrayyy.push(arr[i]);
    }
  }
  return arrayyy;
};

console.log(filter([0, 10, 20, 30], (n) => n > 10));
