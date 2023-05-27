const arr = [1, 2, 3, 4, -5];

console.log(arr.reduce((prev, curr) => prev + curr));
console.log(arr.reduceRight((prev, curr) => prev + curr));
