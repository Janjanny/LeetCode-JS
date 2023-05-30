const expect = function (val) {
  return {
    toBe: function (x) {
      if (x !== val) {
        throw new Error("Not Equal");
      }
      return true;
    },
    notToBe: function (x) {
      if (x === val) {
        throw new Error("Equal");
      }
      return true;
    },
  };
};

console.log(expect(5).toBe(5));

console.log(expect(5).toBe(null));
console.log(expect(5).notToBe(null));
