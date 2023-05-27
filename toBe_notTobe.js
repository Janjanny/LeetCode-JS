const expect = function (val) {
  return {
    toBe: (x) => (x !== val ? new Error("Not Equal") : true),
    notToBe: (x) => (x === val ? new Error("Equal") : true),
  };
};

console.log(expect(5).toBe(5));

console.log(expect(5).toBe(null));
console.log(expect(5).notToBe(null));
